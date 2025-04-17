import { demoExperiments } from "@/constants";
import { create } from "zustand";

export interface ExperimentInterface {
  name: string;
  date: string;
  simulationId: string;
  equation: string;
}

interface ExperimentStore {
  experiments: [] | ExperimentInterface[];
  setExperiments: (experiment: ExperimentInterface[]) => void;
}

export const _useExperimentStore = create<ExperimentStore>((set) => ({
  experiments: demoExperiments,
  setExperiments: (experiment: ExperimentInterface[]) =>
    set(() => ({
      experiments: experiment,
    })),
}));

export const initalizeExperiments =
  _useExperimentStore.getState().setExperiments;
