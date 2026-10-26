import { n as goodsCases, r as weaknessCount } from "./cases-BpRKyOcC.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-C60amKmC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dozvsx5b.js
var import_jsx_runtime = require_jsx_runtime();
var duties = [
	{
		n: "01",
		t: "Идентификация",
		d: "Товар назван по объективным признакам, не по коммерческому слову."
	},
	{
		n: "02",
		t: "Существенные признаки",
		d: "Отмечено только то, что выбирает позицию и субпозицию."
	},
	{
		n: "03",
		t: "Норма",
		d: "ОПИ, примечания и пояснения. Следующее правило не открывается раньше времени."
	},
	{
		n: "04",
		t: "Отказ альтернативе",
		d: "Соседний код закрыт текстом, а не ощущением «менее похоже»."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold tracking-widest text-seal uppercase",
			children: "Самостоятельная работа · практика идентификации и классификации товаров"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid min-w-0 gap-8 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl leading-tight text-ink sm:text-5xl",
					children: "Защити своё классификационное решение"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg text-ink",
					children: "Вариант № 20. Пять товаров, пять субпозиций ТН ВЭД версии 2022 года. По каждому — доказательство эксперта, доводы оппонента и резолюция комиссии."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-4 border border-line bg-card px-4 py-4 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-16 shrink-0 place-items-center rounded-full border-2 border-seal text-seal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs tracking-widest",
							children: "ВАРИАНТ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-xl",
							children: "20"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [weaknessCount, " слабых мест при минимуме пять. Учебное решение, не акт таможенного органа."]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4",
			children: duties.map((duty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "bg-paper px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg text-seal",
						children: duty.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-semibold text-ink",
						children: duty.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: duty.d
					})
				]
			}, duty.n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-12 font-serif text-2xl text-ink",
			children: "Пять дел"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 divide-y divide-line border-y border-line",
			children: goodsCases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/case/$id",
				params: { id: item.id },
				className: "grid min-h-11 gap-2 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg text-seal sm:col-span-1",
						children: item.docket
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sm:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold text-ink",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: item.theme
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-xl text-ink sm:col-span-3 sm:text-right",
						children: item.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-seal sm:col-span-1 sm:text-right",
						children: "Открыть"
					})
				]
			}) }, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/ruling",
				className: "inline-flex min-h-11 items-center bg-seal px-4 text-sm font-semibold text-paper",
				children: "Комиссионное решение"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/sources",
				className: "inline-flex min-h-11 items-center border border-line bg-card px-4 text-sm font-semibold text-ink",
				children: "Нормативная база"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-10 max-w-3xl text-sm text-muted",
			children: "Коды даны на шести знаках Гармонизированной системы 2022 года: этот уровень введён в Республике Узбекистан постановлением Президента от 28.12.2022 г. № ПП-460. Десятизначный код для графы декларации берётся из действующего перечня на lex.uz и нулями здесь не дописывается. Фабулы учебные: нормы настоящие, номера сертификатов и протоколов партий не выдуманы."
		})
	] });
}
//#endregion
export { Home as component };
