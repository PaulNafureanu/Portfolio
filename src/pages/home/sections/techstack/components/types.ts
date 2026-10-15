import { type Node, type Edge } from "@xyflow/react";

export type TechData = { label: string; row: number; col: number; parentId: string };
export type TechNode = Node<TechData>;
export type TechEdge = Edge;

export type GraphSize = {
  nodeWidth: number;
  nodeHeight: number;
  columnGap: number;
  rowGap: number;
  xOffset: number;
  yOffset: number;
};
