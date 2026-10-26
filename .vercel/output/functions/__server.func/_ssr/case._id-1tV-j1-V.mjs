import { i as __toESM } from "../_runtime.mjs";
import { t as getCase } from "./cases-BpRKyOcC.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowLeft, n as Minus, r as Check } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-C3z_TpmD.mjs";
import { n as useHearing, t as answerKey } from "./hearing-BkF8rCmd.mjs";
import { t as Shell } from "./shell-C60amKmC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case._id-1tV-j1-V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	{
		id: "expert",
		label: "Эксперт"
	},
	{
		id: "opponent",
		label: "Оппонент"
	},
	{
		id: "bench",
		label: "Комиссия"
	}
];
function CaseFile({ item }) {
	const [tab, setTab] = (0, import_react.useState)("expert");
	const answers = useHearing((state) => state.answers);
	const answer = useHearing((state) => state.answer);
	const checked = item.weaknesses.filter((weak) => answers[answerKey(item.id, weak.id)]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "no-print mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
				className: "size-4",
				"aria-hidden": true
			}), "Все дела"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs font-semibold tracking-widest text-seal uppercase",
			children: [
				"Дело ",
				item.docket,
				" · ",
				item.theme
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 max-w-3xl font-serif text-3xl leading-tight text-ink sm:text-4xl",
			children: item.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap items-end justify-between gap-4 border border-line bg-card px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-muted uppercase",
				children: "Субпозиция"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-4xl leading-none text-ink",
				children: item.code
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xl text-sm text-muted",
				children: item.codeNote
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: item.heading
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "no-print mt-8 flex gap-1 border-b border-line",
			role: "tablist",
			children: tabs.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "tab",
				"aria-selected": tab === entry.id,
				onClick: () => setTab(entry.id),
				className: `min-h-11 px-3 text-sm font-semibold ${tab === entry.id ? "border-b-2 border-seal text-ink" : "text-muted"}`,
				children: [entry.label, entry.id === "opponent" ? ` ${checked}/${item.weaknesses.length}` : ""]
			}, entry.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			hidden: tab !== "expert",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expert, { item })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			hidden: tab !== "opponent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opponent, {
				item,
				answers,
				onAnswer: answer
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			hidden: tab !== "bench",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bench, { item })
		})
	] });
}
function Section({ kicker, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10 first:mt-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-seal uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-serif text-2xl text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children
			})
		]
	});
}
function Expert({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			kicker: "Задание · идентификация",
			title: "Товар назван по признакам, а не по инвойсу",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: item.fabula.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-line pl-4 text-ink",
					children: line
				}, line))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-ink",
				children: item.identity
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Задание · существенные признаки",
			title: "Что меняет код, а что является шумом",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line border-y border-line",
				children: item.essential.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 py-4 sm:grid-cols-3 sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-ink sm:col-span-1",
						children: feature.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink sm:col-span-2",
						children: feature.why
					})]
				}, feature.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			kicker: "Задание · почему эта норма",
			title: "Правило, которое действительно сработало",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-ink",
				children: item.rule
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-4",
				children: item.norms.map((norm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "border border-line bg-card px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-ink",
							children: norm.source
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-serif text-lg leading-snug text-ink",
							children: [
								"«",
								norm.quote,
								"»"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: norm.use
						})
					]
				}, norm.source))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Задание · альтернатива не принята",
			title: "Почему соседний код закрыт",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-4",
				children: item.alternatives.map((alt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-2 border-b border-line pb-4 sm:grid-cols-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl text-seal",
						children: alt.code
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-ink",
							children: alt.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-ink",
							children: alt.why
						})]
					})]
				}, alt.code))
			})
		})
	] });
}
function Opponent({ item, answers, onAnswer }) {
	const [open, setOpen] = (0, import_react.useState)(item.weaknesses[0]?.id ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-3xl text-ink",
			children: "Пять доводов против собственного решения. Сначала формулировка оппонента. Ответ комиссии открывается после выбора: код устоит или факт, если он подтвердится, код ломает."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-6 space-y-3",
			children: item.weaknesses.map((weak, index) => {
				const key = answerKey(item.id, weak.id);
				const picked = answers[key];
				const shown = open === weak.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-11 w-full items-start gap-3 px-4 py-4 text-left",
						"aria-expanded": shown,
						onClick: () => setOpen(shown ? null : weak.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-serif text-lg text-seal",
							children: [
								item.docket,
								".",
								index + 1
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-ink",
							children: weak.title
						})]
					}), shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-muted uppercase",
								children: "Довод оппонента"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-ink",
								children: weak.attack
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm font-semibold text-ink",
								children: "Если принять довод, код устоит?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => onAnswer(key, "stand"),
									className: `min-h-11 border px-4 text-sm font-semibold ${picked === "stand" ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink"}`,
									children: "Устоит"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => onAnswer(key, "risk"),
									className: `min-h-11 border px-4 text-sm font-semibold ${picked === "risk" ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink"}`,
									children: "Под угрозой"
								})]
							}),
							picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 border-l-2 border-seal pl-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-sm font-semibold text-ink",
									children: [picked === weak.correct ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-4 text-seal",
										"aria-hidden": true
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
										className: "size-4 text-seal",
										"aria-hidden": true
									}), picked === weak.correct ? "Совпадает с проектом комиссии" : "В проекте комиссии иначе"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink",
									children: weak.answer
								})]
							}) : null
						]
					}) : null]
				}, weak.id);
			})
		})]
	});
}
function Bench({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 border border-ink bg-card px-4 py-5 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-semibold tracking-widest text-muted uppercase",
				children: ["Резолюция по делу ", item.docket]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-serif text-2xl leading-snug text-ink",
				children: item.operative
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 font-semibold text-ink",
				children: "Без этих условий резолюция не действует"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: item.conditions.map((condition) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-seal pl-4 text-ink",
					children: condition
				}, condition))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "Полный текст по пяти делам собирается на странице решения. Его можно скопировать как учебный документ."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/ruling",
				className: "mt-4 inline-flex min-h-11 items-center bg-seal px-4 text-sm font-semibold text-paper",
				children: "К общему решению"
			})
		]
	});
}
function CasePage() {
	const { id } = Route.useParams();
	const item = getCase(id);
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-serif text-3xl text-ink",
		children: "Такого дела нет"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "mt-4 inline-flex min-h-11 items-center font-semibold text-seal",
		children: "Вернуться к списку"
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseFile, { item }) });
}
//#endregion
export { CasePage as component };
