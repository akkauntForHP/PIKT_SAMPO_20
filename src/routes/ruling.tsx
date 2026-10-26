import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { goodsCases, weaknessCount } from "@/data/cases";
import { answerKey, useHearing } from "@/lib/hearing";
import { buildProtocol } from "@/lib/protocol";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/ruling")({
  head: () => ({
    meta: [{ title: "Учебное комиссионное решение — вариант 20" }],
  }),
  component: RulingPage,
});

function RulingPage() {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  const answers = useHearing((state) => state.answers);
  const reset = useHearing((state) => state.reset);
  const total = weaknessCount;
  const answered = goodsCases.reduce(
    (sum, item) => sum + item.weaknesses.filter((weak) => answers[answerKey(item.id, weak.id)]).length,
    0,
  );
  const matched = goodsCases.reduce(
    (sum, item) =>
      sum +
      item.weaknesses.filter((weak) => answers[answerKey(item.id, weak.id)] === weak.correct).length,
    0,
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(buildProtocol(name));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Shell>
      <p className="text-xs font-semibold tracking-widest text-seal uppercase">
        Итог варианта № 20
      </p>
      <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-tight text-ink">
        Учебное решение экспертной комиссии
      </h1>
      <p className="mt-4 max-w-3xl text-ink">
        Документ закрывает задание: пять товаров, идентификация, существенные признаки, норма,
        отказ в альтернативе, {total} слабых мест и резолюция. Это не предварительное решение по
        статьям 370–373 Таможенного кодекса и на пост его нести нельзя.
      </p>

      <div className="no-print mt-6 grid gap-3 border border-line bg-card p-4 sm:grid-cols-3">
        <label className="text-sm font-semibold text-ink sm:col-span-2">
          Фамилия для шапки протокола
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setCopied(false);
            }}
            placeholder="Необязательно"
            className="mt-2 min-h-11 w-full border border-line bg-paper px-3 text-base font-normal text-ink"
          />
        </label>
        <div className="flex flex-col justify-end gap-2">
          <button
            type="button"
            onClick={copy}
            className="min-h-11 bg-seal px-4 text-sm font-semibold text-paper"
          >
            {copied ? "Скопировано" : "Скопировать текст"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="min-h-11 border border-line px-4 text-sm font-semibold text-ink"
          >
            Сбросить самопроверку
          </button>
        </div>
      </div>
      <p className="no-print mt-3 text-sm text-muted">
        Самопроверка оппонента: совпало {matched} из {answered || "0"} данных ответов, всего доводов{" "}
        {total}. Подсчёт не меняет резолюцию.
      </p>

      <div className="mt-10 space-y-8">
        {goodsCases.map((item, index) => (
          <section key={item.id} className="border-t border-line pt-6">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              Пункт {index + 1} · дело {item.docket} · {item.theme}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-ink">{item.title}</h2>
            <p className="mt-2 font-serif text-3xl text-seal">{item.code}</p>
            <p className="mt-4 text-ink">{item.operative}</p>
            <h3 className="mt-4 font-semibold text-ink">Условия</h3>
            <ul className="mt-2 space-y-2">
              {item.conditions.map((condition) => (
                <li key={condition} className="text-ink">
                  {condition}
                </li>
              ))}
            </ul>
            <h3 className="mt-4 font-semibold text-ink">Слабые места, оставленные в деле</h3>
            <ul className="mt-2 space-y-3">
              {item.weaknesses.map((weak, weakIndex) => (
                <li key={weak.id}>
                  <p className="font-semibold text-ink">
                    {item.docket}.{weakIndex + 1} {weak.title}
                  </p>
                  <p className="text-sm text-muted">{weak.answer}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-10 border border-ink bg-card px-4 py-5">
        <h2 className="font-serif text-2xl text-ink">Как применены правила</h2>
        <p className="mt-3 text-ink">
          Во всех пяти делах хватило ОПИ 1 и ОПИ 6. ОПИ 3 не открывалось: либо вторая позиция своим
          текстом товар не описывает, либо примечание или пояснение уже сняли конкуренцию. ОПИ 4 не
          применялось. Дополнительное примечание Европейского союза о пороге 0,5 % биодизеля и
          регистрационное удостоверение лекарственного средства нормами классификации не признаны.
        </p>
        <p className="mt-3 text-sm text-muted">
          Сверка актов: ПП-460 от 28.12.2022 г., ПП-181 от 14.05.2025 г., Таможенный кодекс
          (ЗРУ-400), постановление Кабинета Министров № 213, Закон № 415-I. Ссылки собраны в базе.
        </p>
      </section>
    </Shell>
  );
}
