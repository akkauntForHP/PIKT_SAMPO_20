import { S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-C60amKmC.js
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/",
		label: "Дела"
	},
	{
		to: "/ruling",
		label: "Решение"
	},
	{
		to: "/sources",
		label: "База"
	}
];
function Shell({ children }) {
	const path = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "no-print border-b border-line bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-serif text-xl leading-none text-ink",
					children: ["Комиссия", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-sans text-xs font-semibold tracking-widest text-muted uppercase",
						children: "Вариант 20"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-1",
					children: links.map((link) => {
						const active = path === link.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: `inline-flex min-h-11 items-center px-3 text-sm font-semibold ${active ? "border-b-2 border-seal text-ink" : "text-muted"}`,
							children: link.label
						}, link.to);
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-5xl min-w-0 px-4 py-8",
			children
		})]
	});
}
//#endregion
export { Shell as t };
