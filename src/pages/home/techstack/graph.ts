import type { StackItem } from "./stackContent";
import { createStyledEdge, createStyledNode } from "./styling";
import type { GraphSize, TechData, TechEdge, TechNode } from "./types";

export const getGraphSize = (width: number): GraphSize => {
  const rem = 16;

  const xOffset = 1 * rem;
  const yOffset = 1 * rem;

  const columns = 4;
  const horizontalPadding = 1 * rem;

  const minNodeWidth = 10 * rem;
  const maxNodeWidth = 15 * rem;

  const minNodeHeight = 3 * rem;
  const maxNodeHeight = 4 * rem;

  const minColumnGap = 0.75 * rem;
  const maxColumnGap = 2 * rem;

  const minRowGap = 0.75 * rem;
  const maxRowGap = 1 * rem;

  const columnGap = Math.min(maxColumnGap, Math.max(minColumnGap, width * 0.02));

  const availableWidth = width - horizontalPadding * 2 - columnGap * (columns - 1);

  const nodeWidth = Math.min(maxNodeWidth, Math.max(minNodeWidth, availableWidth / columns));

  const widthRatio = (nodeWidth / maxNodeWidth) * (1 + 1000 / width);

  const nodeHeight = Math.min(maxNodeHeight, Math.max(minNodeHeight, maxNodeHeight * widthRatio));

  const rowGap = Math.min(maxRowGap, Math.max(minRowGap, maxRowGap * widthRatio));

  return {
    xOffset,
    yOffset,
    nodeWidth,
    nodeHeight,
    columnGap,
    rowGap,
  };
};

export const buildGraph = (root: StackItem, activeDomainId: string, activeCapabityId: string, graphSize: GraphSize) => {
  const { xOffset, yOffset, nodeWidth, nodeHeight, columnGap, rowGap } = graphSize;
  const nodes: TechNode[] = [];
  const edges: TechEdge[] = [];

  // Factories

  const createNode = (id: string, data: TechData): TechNode => {
    const { row, col } = data;

    const node: TechNode = {
      id,
      data,
      position: { x: xOffset + col * (nodeWidth + columnGap), y: yOffset + row * (nodeHeight + rowGap) },
      width: nodeWidth,
      height: nodeHeight,
    };

    return createStyledNode(node, activeDomainId, activeCapabityId);
  };

  const createEdge = (sourceId: string, targetId: string): TechEdge => {
    const edge: TechEdge = {
      id: `${sourceId}-${targetId}`,
      source: sourceId,
      target: targetId,
      type: "simplebezier",
    };

    return createStyledEdge(edge, activeDomainId, activeCapabityId);
  };

  // Graph elements

  const createElement = (element: StackItem, index: number, level: number, parentId: string = "") => {
    const elementId = element.id;
    nodes.push(createNode(elementId, { label: element.label, row: index, col: level, parentId }));
    if (parentId) edges.push(createEdge(parentId, elementId));
    element.children?.forEach((child, childIndex) => createElement(child, childIndex, level + 1, elementId));
  };

  createElement(root, 0, 0);

  return { nodes, edges };
};
