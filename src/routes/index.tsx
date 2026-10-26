import { createFileRoute, Link } from "@tanstack/react-router";
import { goodsCases, weaknessCount } from "@/data/cases";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Вариант 20 — защита классификационного решения" }],
  }),
  component: Home,
});

const duties = [
  { n: "01", t: "Идентификация", d: "Товар назван по объективным признакам, не по коммерческому слову." },
  { n: "02", t: "Существенные признаки", d: "Отмечено только то, что выбирает позицию и субпозицию." },
  { n: "03", t: "Норма", d: "ОПИ, примечания и пояснения. Следующее правило не открывается раньше времени." },
  { n: "04", t: "Отказ альтернативе", d: "Соседний код закрыт текстом, а не ощущением «менее похоже»." },
];

function Home() {
  return (
    <Shell>
      <p className="text-xs font-semibold tracking-widest text-seal uppercase">
        Самостоятельная работа · практика идентификации и классификации товаров
      </p>
      <div className="mt-4 grid min-w-0 gap-8 lg:grid-cols-5">
        <div className="min-w-0 lg:col-span-3">
          <h1 className="font-serif text-3xl leading-tight text-ink sm:text-5xl">
            Защити своё классификационное решение
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink">
            Вариант № 20. Пять товаров, пять субпозиций ТН ВЭД версии 2022 года. По каждому —
            доказательство эксперта, доводы оппонента и резолюция комиссии.
          </p>
        </div>
        <div className="flex min-w-0 items-center gap-4 border border-line bg-card px-4 py-4 lg:col-span-2">
          <div className="grid size-16 shrink-0 place-items-center rounded-full border-2 border-seal text-seal">
            <div className="text-center leading-none">
              <div className="text-xs tracking-widest">ВАРИАНТ</div>
              <div className="font-serif text-xl">20</div>
            </div>
          </div>
          <p className="text-sm text-muted">
            {weaknessCount} слабых мест при минимуме пять. Учебное решение, не акт таможенного
            органа.
          </p>
        </div>
      </div>

      <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {duties.map((duty) => (
          <li key={duty.n} className="bg-paper px-4 py-4">
            <p className="font-serif text-lg text-seal">{duty.n}</p>
            <p className="mt-1 font-semibold text-ink">{duty.t}</p>
            <p className="mt-1 text-sm text-muted">{duty.d}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 font-serif text-2xl text-ink">Пять дел</h2>
      <ol className="mt-4 divide-y divide-line border-y border-line">
        {goodsCases.map((item) => (
          <li key={item.id}>
            <Link
              to="/case/$id"
              params={{ id: item.id }}
              className="grid min-h-11 gap-2 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-4"
            >
              <span className="font-serif text-lg text-seal sm:col-span-1">{item.docket}</span>
              <span className="sm:col-span-7">
                <span className="block font-semibold text-ink">{item.title}</span>
                <span className="mt-1 block text-sm text-muted">{item.theme}</span>
              </span>
              <span className="font-serif text-xl text-ink sm:col-span-3 sm:text-right">
                {item.code}
              </span>
              <span className="text-sm font-semibold text-seal sm:col-span-1 sm:text-right">
                Открыть
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/ruling"
          className="inline-flex min-h-11 items-center bg-seal px-4 text-sm font-semibold text-paper"
        >
          Комиссионное решение
        </Link>
        <Link
          to="/sources"
          className="inline-flex min-h-11 items-center border border-line bg-card px-4 text-sm font-semibold text-ink"
        >
          Нормативная база
        </Link>
      </div>

      <p className="mt-10 max-w-3xl text-sm text-muted">
        Коды даны на шести знаках Гармонизированной системы 2022 года: этот уровень введён в
        Республике Узбекистан постановлением Президента от 28.12.2022 г. № ПП-460. Десятизначный
        код для графы декларации берётся из действующего перечня на lex.uz и нулями здесь не
        дописывается. Фабулы учебные: нормы настоящие, номера сертификатов и протоколов партий не
        выдуманы.
      </p>
    </Shell>
  );
}
