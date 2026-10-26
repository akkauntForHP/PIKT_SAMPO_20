import { create } from "zustand";
import type { Check } from "@/data/cases";

type HearingState = {
  answers: Record<string, Check>;
  answer: (key: string, value: Check) => void;
  reset: () => void;
};

export const useHearing = create<HearingState>((set) => ({
  answers: {},
  answer: (key, value) =>
    set((state) => ({ answers: { ...state.answers, [key]: value } })),
  reset: () => set({ answers: {} }),
}));

export function answerKey(caseId: string, weakId: string) {
  return `${caseId}:${weakId}`;
}
