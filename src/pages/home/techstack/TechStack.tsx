import { useMemo, useState } from "react";
import { ReactFlow } from "@xyflow/react";

import { buildGraph, getGraphSize } from "./graph";
import type { TechNode } from "./types";
import { stackTree } from "./stackContent";
import { useElementSize } from "./useElementSize";

const startDomain = stackTree.children?.at(0);
const startCapability = startDomain?.children?.at(0);

const initialDomainId = startDomain?.id ?? "";
const initialCapabilityId = startCapability?.id ?? "";

export default function TechStack() {
  const { ref, width, isMeasured } = useElementSize<HTMLDivElement>();

  const [activeDomain, setActiveDomain] = useState(initialDomainId);
  const [activeCapability, setActiveCapability] = useState(initialCapabilityId);

  const graphSize = useMemo(() => {
    if (!width) return undefined;

    return getGraphSize(width);
  }, [width]);

  const graph = useMemo(() => {
    if (!graphSize) return undefined;

    return buildGraph(stackTree, activeDomain, activeCapability, graphSize);
  }, [activeDomain, activeCapability, graphSize]);

  const handleNodeClick = (node: TechNode) => {
    const { col, parentId } = node.data;

    if (col === 1) {
      setActiveDomain(node.id);

      const stackDomain = stackTree.children?.find((child) => child.id === node.id);

      setActiveCapability(stackDomain?.children?.at(0)?.id ?? "");
    } else if (col === 2) {
      setActiveDomain(parentId);
      setActiveCapability(node.id);
    }
  };

  return (
    <div ref={ref} className="relative h-full w-full">
      {isMeasured && graph && (
        <ReactFlow
          nodes={graph.nodes}
          edges={graph.edges}
          onNodeClick={(_event, node) => handleNodeClick(node)}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
        />
      )}
    </div>
  );
}
