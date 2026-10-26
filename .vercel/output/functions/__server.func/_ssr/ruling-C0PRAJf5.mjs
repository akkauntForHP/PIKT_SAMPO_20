import { i as __toESM } from "../_runtime.mjs";
import { n as goodsCases, r as weaknessCount } from "./cases-BpRKyOcC.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHearing, t as answerKey } from "./hearing-BkF8rCmd.mjs";
import { t as Shell } from "./shell-C60amKmC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ruling-C0PRAJf5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var checkLabel = {
	stand: "код устоит",
	risk: "код под угрозой, если факт подтвердится"
};
function buildProtocol(name) {
	const lines = [
		"УЧЕБНОЕ РЕШЕНИЕ ЭКСПЕРТНОЙ КОМИССИИ",
		"по классификации товаров в соответствии с ТН ВЭД",
		"Вариант № 20. «Защити своё классификационное решение»",
		"Курс: «Практика идентификации и классификации товаров»",
		"",
		"Статус документа: учебная работа. Не является предварительным решением таможенного органа по статьям 370–373 Таможенного кодекса Республики Узбекистан и не предъявляется при таможенном декларировании.",
		"",
		`Докладчик: ${name.trim() || "курсант, вариант № 20"}.`,
		"",
		"Комиссия рассмотрела пять товаров. По каждому проверены идентификация, существенные признаки, применённая норма и отклонённые альтернативы. Отдельно, в роли оппонента, зафиксированы слабые места — всего " + weaknessCount + ", при требуемом минимуме пять.",
		"",
		"Нормативная опора: ТН ВЭД Республики Узбекистан версии 2022 года, введённая постановлением Президента Республики Узбекистан от 28.12.2022 г. № ПП-460 (lex.uz) на базе Гармонизированной системы описания и кодирования товаров версии 2022 года; Основные правила интерпретации; примечания к разделам, группам и субпозициям; пояснения к Гармонизированной системе. Пронумерованное классификационное мнение Комитета по Гармонизированной системе по именно этим фабулам в открытых источниках не устанавливалось и в решение не вписывается.",
		"",
		"Коды указаны на уровне субпозиции (6 знаков). Знаки 7–10 берутся из действующего перечня ТН ВЭД и нулями не конструируются. С 14.05.2025 г. постановление Президента № ПП-181 утвердило обновлённый перечень кодов; шестизначный уровень этих дел — уровень ГС 2022, его нужно сверить с приложением к действующему акту на lex.uz перед любым реальным применением.",
		"",
		"Фабулы — учебные задания признаков. Это не протоколы реальных партий и не акты Государственного таможенного комитета.",
		"",
		"РЕШИЛА:",
		""
	];
	goodsCases.forEach((item, index) => {
		lines.push(`${index + 1}. Дело ${item.docket}. ${item.title}.`);
		lines.push(`Тема курса: ${item.theme}.`);
		lines.push(`Субпозиция: ${item.code}.`);
		lines.push(item.operative);
		lines.push("Идентификация: " + item.identity);
		lines.push("Существенные признаки:");
		item.essential.forEach((feature) => {
			lines.push(`— ${feature.name}. ${feature.why}`);
		});
		lines.push("Норма: " + item.rule);
		item.norms.forEach((norm) => {
			lines.push(`— ${norm.source}. ${norm.use}`);
		});
		lines.push("Альтернативы не приняты:");
		item.alternatives.forEach((alt) => {
			lines.push(`— ${alt.code} (${alt.title}). ${alt.why}`);
		});
		lines.push("Слабые места и как с ними поступила комиссия:");
		item.weaknesses.forEach((weak, weakIndex) => {
			lines.push(`— ${item.docket}.${weakIndex + 1} ${weak.title}. Довод: ${weak.attack} Ответ: ${weak.answer} Итог самопроверки по проекту комиссии: ${checkLabel[weak.correct]}.`);
		});
		lines.push("Условия, без которых резолюция не действует:");
		item.conditions.forEach((condition) => lines.push(`— ${condition}`));
		lines.push("");
	});
	lines.push("Общий вывод. Все пять субпозиций вынесены по ОПИ 1 и ОПИ 6. ОПИ 3 комиссия не применяла там, где текст позиции или примечание уже снимает конкуренцию. ОПИ 4 не применялось. Национальное регистрационное удостоверение лекарственного средства и дополнительные примечания Комбинированной номенклатуры Европейского союза нормами ТН ВЭД Республики Узбекистан не являются.");
	lines.push("");
	lines.push("Источники для сверки: постановление Президента от 28.12.2022 г. № ПП-460 — https://lex.uz/acts/6330257 ; постановление Президента от 14.05.2025 г. № ПП-181 — https://lex.uz/ru/docs/7533469 ; Таможенный кодекс, утверждённый Законом от 20.01.2016 г. № ЗРУ-400 — https://lex.uz/acts/2876352 ; постановление Кабинета Министров от 23.03.2018 г. № 213 — https://lex.uz/ru/docs/3594815 ; Закон от 25.04.1997 г. № 415-I «О лекарственных средствах и фармацевтической деятельности».");
	return lines.join("\n");
}
function RulingPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const answers = useHearing((state) => state.answers);
	const reset = useHearing((state) => state.reset);
	const total = weaknessCount;
	const answered = goodsCases.reduce((sum, item) => sum + item.weaknesses.filter((weak) => answers[answerKey(item.id, weak.id)]).length, 0);
	const matched = goodsCases.reduce((sum, item) => sum + item.weaknesses.filter((weak) => answers[answerKey(item.id, weak.id)] === weak.correct).length, 0);
	async function copy() {
		try {
			await navigator.clipboard.writeText(buildProtocol(name));
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold tracking-widest text-seal uppercase",
			children: "Итог варианта № 20"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 max-w-3xl font-serif text-4xl leading-tight text-ink",
			children: "Учебное решение экспертной комиссии"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 max-w-3xl text-ink",
			children: [
				"Документ закрывает задание: пять товаров, идентификация, существенные признаки, норма, отказ в альтернативе, ",
				total,
				" слабых мест и резолюция. Это не предварительное решение по статьям 370–373 Таможенного кодекса и на пост его нести нельзя."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-print mt-6 grid gap-3 border border-line bg-card p-4 sm:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-semibold text-ink sm:col-span-2",
				children: ["Фамилия для шапки протокола", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: name,
					onChange: (event) => {
						setName(event.target.value);
						setCopied(false);
					},
					placeholder: "Необязательно",
					className: "mt-2 min-h-11 w-full border border-line bg-paper px-3 text-base font-normal text-ink"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: copy,
					className: "min-h-11 bg-seal px-4 text-sm font-semibold text-paper",
					children: copied ? "Скопировано" : "Скопировать текст"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: reset,
					className: "min-h-11 border border-line px-4 text-sm font-semibold text-ink",
					children: "Сбросить самопроверку"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "no-print mt-3 text-sm text-muted",
			children: [
				"Самопроверка оппонента: совпало ",
				matched,
				" из ",
				answered || "0",
				" данных ответов, всего доводов",
				" ",
				total,
				". Подсчёт не меняет резолюцию."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 space-y-8",
			children: goodsCases.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-line pt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: [
							"Пункт ",
							index + 1,
							" · дело ",
							item.docket,
							" · ",
							item.theme
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl text-ink",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-3xl text-seal",
						children: item.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink",
						children: item.operative
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-semibold text-ink",
						children: "Условия"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-2",
						children: item.conditions.map((condition) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-ink",
							children: condition
						}, condition))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-semibold text-ink",
						children: "Слабые места, оставленные в деле"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-3",
						children: item.weaknesses.map((weak, weakIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold text-ink",
							children: [
								item.docket,
								".",
								weakIndex + 1,
								" ",
								weak.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: weak.answer
						})] }, weak.id))
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 border border-ink bg-card px-4 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-ink",
					children: "Как применены правила"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-ink",
					children: "Во всех пяти делах хватило ОПИ 1 и ОПИ 6. ОПИ 3 не открывалось: либо вторая позиция своим текстом товар не описывает, либо примечание или пояснение уже сняли конкуренцию. ОПИ 4 не применялось. Дополнительное примечание Европейского союза о пороге 0,5 % биодизеля и регистрационное удостоверение лекарственного средства нормами классификации не признаны."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Сверка актов: ПП-460 от 28.12.2022 г., ПП-181 от 14.05.2025 г., Таможенный кодекс (ЗРУ-400), постановление Кабинета Министров № 213, Закон № 415-I. Ссылки собраны в базе."
				})
			]
		})
	] });
}
//#endregion
export { RulingPage as component };
