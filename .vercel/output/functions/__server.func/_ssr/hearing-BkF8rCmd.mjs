import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hearing-BkF8rCmd.js
var useHearing = create((set) => ({
	answers: {},
	answer: (key, value) => set((state) => ({ answers: {
		...state.answers,
		[key]: value
	} })),
	reset: () => set({ answers: {} })
}));
function answerKey(caseId, weakId) {
	return `${caseId}:${weakId}`;
}
//#endregion
export { useHearing as n, answerKey as t };
