import { stackTree } from "./stackContent";

export type ColorPalette = {
  id: string;
  base: string;
  mid: string;
  light: string;
};

const getStackId = (fallback: string) => stackTree.children?.find((node) => node.id === fallback)?.id ?? fallback;

const stackIds = {
  documentation: getStackId("full_stack__documentation"),
  frontend: getStackId("full_stack__frontend"),
  backend: getStackId("full_stack__backend"),
  database: getStackId("full_stack__databases"),
  testing: getStackId("full_stack__testing"),
  delivery: getStackId("full_stack__delivery_operations"),
  tooling: getStackId("full_stack__engineering_tooling"),
} as const;

export const stackTheme: ColorPalette[] = [
  {
    id: stackIds.documentation,
    base: "#3B82F6",
    mid: "#60A5FA",
    light: "#93C5FD",
  },
  {
    id: stackIds.frontend,
    base: "#8B5CF6",
    mid: "#A78BFA",
    light: "#C4B5FD",
  },
  {
    id: stackIds.backend,
    base: "#14A38B",
    mid: "#4DB6A3",
    light: "#8BD0C4",
  },
  {
    id: stackIds.database,
    base: "#E8873A",
    mid: "#F0A15F",
    light: "#F6C08E",
  },
  {
    id: stackIds.testing,
    base: "#4E9F67",
    mid: "#72B786",
    light: "#9BCDA8",
  },
  {
    id: stackIds.delivery,
    base: "#6675D8",
    mid: "#8792E2",
    light: "#AAB2EC",
  },
  {
    id: stackIds.tooling,
    base: "#D05C9B",
    mid: "#DF83B4",
    light: "#ECB0CF",
  },
] as const;

export const getTheme = (domainId: string) => stackTheme.find((palette) => palette.id === domainId);
