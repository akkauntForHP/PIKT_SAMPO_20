import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus } from "lucide-react";
import type { GoodsCase } from "@/data/cases";
import { answerKey, useHearing } from "@/lib/hearing";

const tabs = [
  { id: "expert", label: "Эксперт" },
  { id: "opponent", label: "Оппонент" },
  { id: "bench", label: "Комиссия" },
] as const;

type Tab = (typeof tabs)[number]["id"];

export function CaseFile({ item }: { item: GoodsCase }) {
  const [tab, setTab] = useState<Tab>("expert");
  const answers = useHearing((state) => state.answers);
  const answer = useHearing((state) => state.answer);
  const checked = item.weaknesses.filter((weak) => answers[answerKey(item.id, weak.id)]).length;

  return (
    <article>
      <Link
        to="/"
        className="no-print mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Все дела
      </Link>

      <p className="text-xs font-semibold tracking-widest text-seal uppercase">
        Дело {item.docket} · {item.theme}
      </p>
      <h1 className="mt-2 max-w-3xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
        {item.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border border-line bg-card px-4 py-4">
        <div>
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">Субпозиция</p>
          <p className="font-serif text-4xl leading-none text-ink">{item.code}</p>
        </div>
        <p className="max-w-xl text-sm text-muted">{item.codeNote}</p>
      </div>
      <p className="mt-3 text-sm text-muted">{item.heading}</p>

      <div className="no-print mt-8 flex gap-1 border-b border-line" role="tablist">
        {tabs.map((entry) => (
          <button
            key={entry.id}
            type="button"
            role="tab"
            aria-selected={tab === entry.id}
            onClick={() => setTab(entry.id)}
            className={`min-h-11 px-3 text-sm font-semibold ${
              tab === entry.id ? "border-b-2 border-seal text-ink" : "text-muted"
            }`}
          >
            {entry.label}
            {entry.id === "opponent" ? ` ${checked}/${item.weaknesses.length}` : ""}
          </button>
        ))}
      </div>

      <div className="mt-8" hidden={tab !== "expert"}>
        <Expert item={item} />
      </div>
      <div hidden={tab !== "opponent"}>
        <Opponent item={item} answers={answers} onAnswer={answer} />
      </div>
      <div hidden={tab !== "bench"}>
        <Bench item={item} />
      </div>
    </article>
  );
}

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <p className="text-xs font-semibold tracking-widest text-seal uppercase">{kicker}</p>
      <h2 className="mt-1 font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Expert({ item }: { item: GoodsCase }) {
  return (
    <div>
      <Section kicker="Задание · идентификация" title="Товар назван по признакам, а не по инвойсу">
        <ul className="space-y-3">
          {item.fabula.map((line) => (
            <li key={line} className="border-l-2 border-line pl-4 text-ink">
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-ink">{item.identity}</p>
      </Section>

      <Section kicker="Задание · существенные признаки" title="Что меняет код, а что является шумом">
        <ul className="divide-y divide-line border-y border-line">
          {item.essential.map((feature) => (
            <li key={feature.name} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
              <p className="font-semibold text-ink sm:col-span-1">{feature.name}</p>
              <p className="text-ink sm:col-span-2">{feature.why}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="Задание · почему эта норма" title="Правило, которое действительно сработало">
        <p className="text-ink">{item.rule}</p>
        <div className="mt-4 space-y-4">
          {item.norms.map((norm) => (
            <blockquote key={norm.source} className="border border-line bg-card px-4 py-4">
              <p className="text-sm font-semibold text-ink">{norm.source}</p>
              <p className="mt-2 font-serif text-lg leading-snug text-ink">«{norm.quote}»</p>
              <p className="mt-3 text-sm text-muted">{norm.use}</p>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section kicker="Задание · альтернатива не принята" title="Почему соседний код закрыт">
        <ul className="space-y-4">
          {item.alternatives.map((alt) => (
            <li key={alt.code} className="grid gap-2 border-b border-line pb-4 sm:grid-cols-4">
              <p className="font-serif text-xl text-seal">{alt.code}</p>
              <div className="sm:col-span-3">
                <p className="font-semibold text-ink">{alt.title}</p>
                <p className="mt-1 text-ink">{alt.why}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function Opponent({
  item,
  answers,
  onAnswer,
}: {
  item: GoodsCase;
  answers: Record<string, "stand" | "risk">;
  onAnswer: (key: string, value: "stand" | "risk") => void;
}) {
  const [open, setOpen] = useState<string | null>(item.weaknesses[0]?.id ?? null);

  return (
    <div className="mt-8">
      <p className="max-w-3xl text-ink">
        Пять доводов против собственного решения. Сначала формулировка оппонента. Ответ комиссии
        открывается после выбора: код устоит или факт, если он подтвердится, код ломает.
      </p>
      <ol className="mt-6 space-y-3">
        {item.weaknesses.map((weak, index) => {
          const key = answerKey(item.id, weak.id);
          const picked = answers[key];
          const shown = open === weak.id;
          return (
            <li key={weak.id} className="border border-line bg-card">
              <button
                type="button"
                className="flex min-h-11 w-full items-start gap-3 px-4 py-4 text-left"
                aria-expanded={shown}
                onClick={() => setOpen(shown ? null : weak.id)}
              >
                <span className="font-serif text-lg text-seal">
                  {item.docket}.{index + 1}
                </span>
                <span className="font-semibold text-ink">{weak.title}</span>
              </button>
              {shown ? (
                <div className="border-t border-line px-4 py-4">
                  <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                    Довод оппонента
                  </p>
                  <p className="mt-2 text-ink">{weak.attack}</p>
                  <p className="mt-4 text-sm font-semibold text-ink">Если принять довод, код устоит?</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onAnswer(key, "stand")}
                      className={`min-h-11 border px-4 text-sm font-semibold ${
                        picked === "stand"
                          ? "border-ink bg-ink text-paper"
                          : "border-line bg-card text-ink"
                      }`}
                    >
                      Устоит
                    </button>
                    <button
                      type="button"
                      onClick={() => onAnswer(key, "risk")}
                      className={`min-h-11 border px-4 text-sm font-semibold ${
                        picked === "risk"
                          ? "border-ink bg-ink text-paper"
                          : "border-line bg-card text-ink"
                      }`}
                    >
                      Под угрозой
                    </button>
                  </div>
                  {picked ? (
                    <div className="mt-4 border-l-2 border-seal pl-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                        {picked === weak.correct ? (
                          <Check className="size-4 text-seal" aria-hidden />
                        ) : (
                          <Minus className="size-4 text-seal" aria-hidden />
                        )}
                        {picked === weak.correct
                          ? "Совпадает с проектом комиссии"
                          : "В проекте комиссии иначе"}
                      </p>
                      <p className="mt-2 text-ink">{weak.answer}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Bench({ item }: { item: GoodsCase }) {
  return (
    <div className="mt-8 border border-ink bg-card px-4 py-5 sm:px-6">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">
        Резолюция по делу {item.docket}
      </p>
      <p className="mt-3 font-serif text-2xl leading-snug text-ink">{item.operative}</p>
      <h3 className="mt-6 font-semibold text-ink">Без этих условий резолюция не действует</h3>
      <ul className="mt-3 space-y-2">
        {item.conditions.map((condition) => (
          <li key={condition} className="border-l-2 border-seal pl-4 text-ink">
            {condition}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">
        Полный текст по пяти делам собирается на странице решения. Его можно скопировать как
        учебный документ.
      </p>
      <Link
        to="/ruling"
        className="mt-4 inline-flex min-h-11 items-center bg-seal px-4 text-sm font-semibold text-paper"
      >
        К общему решению
      </Link>
    </div>
  );
}
