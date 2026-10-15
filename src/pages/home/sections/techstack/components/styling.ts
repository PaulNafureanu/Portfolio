import { stackTree } from "./stackContent";
import { getTheme, type ColorPalette } from "./stackTheme";
import type { TechEdge, TechNode } from "./types";

const getNodeType = (col: number) => {
  const isRoot = col === 0;
  const isDomain = col === 1;
  const isCapability = col === 2;
  const isTech = col === 3;

  return { isRoot, isDomain, isCapability, isTech };
};

const getNodeTheme = (node: TechNode): ColorPalette | undefined => {
  const { col, parentId } = node.data;
  const { isDomain, isCapability, isTech } = getNodeType(col);

  let partOfDomain = "";
  if (isDomain) partOfDomain = node.id;
  if (isCapability) partOfDomain = parentId;
  if (isTech)
    partOfDomain =
      stackTree.children?.find((domain) => domain.children?.find((capability) => capability.id === parentId))?.id ?? "";

  return getTheme(partOfDomain);
};

const getStyle = (color: string, theme?: ColorPalette) => {
  return {
    ...(color && {
      "--node-border-color": color,
    }),

    ...(theme && { "--node-tech-bg-color": `color-mix(in srgb, ${theme.base} 20%, white)` }),
    ...(theme && { "--node-active-bg-color": `color-mix(in srgb, ${theme.base} 10%, white)` }),
  };
};

export const createStyledNode = (node: TechNode, activeDomainId: string, activeCapabilityId: string): TechNode => {
  const { col, parentId } = node.data;

  const { isRoot, isDomain, isCapability, isTech } = getNodeType(col);

  const isActiveDomain = node.id === activeDomainId;
  const isActiveCapability = node.id === activeCapabilityId;

  const isCapabilityInActiveDomain = parentId === activeDomainId;
  const isTechInActiveCapability = parentId === activeCapabilityId;

  const isActive = isActiveDomain || isActiveCapability;
  const isClickable = isDomain || isCapabilityInActiveDomain;
  const isVisible = isRoot || isDomain || isCapabilityInActiveDomain || isTechInActiveCapability;

  const theme = getNodeTheme(node);

  const color = (isDomain ? theme?.base : isCapability ? theme?.mid : isTech ? theme?.light : undefined) ?? "";

  const className = `
  flex items-center justify-center
  text-center

  bg-white/20
  transition-[border-color,box-shadow,transform,background-color]
  duration-150

  ${color ? "border-(--node-border-color)!" : ""}
  ${isTech ? "bg-(--node-tech-bg-color)! border! shadow-xs font-medium" : ""}
  ${isActive ? "bg-(--node-active-bg-color)! border! shadow-xs font-medium" : ""}
  ${isClickable ? "cursor-pointer! hover:bg-white/60 hover:shadow-sm hover:-translate-y-px" : "cursor-default!"}

  ${isRoot ? "text-[13px]! font-medium! tracking-[0.01em]!" : ""}
  ${isDomain ? "text-[13px]! font-medium! tracking-[0.01em]!" : ""}
  ${isCapability ? "text-[12px]! font-normal! leading-[1.35]!" : ""}
  ${isTech ? "text-[12px]! font-semibold! tracking-[0.015em]!" : ""}
`;
  return {
    ...node,
    className,
    hidden: !isVisible,
    data: { ...node.data, label: isVisible ? node.data.label : "" },
    style: { ...node.style, ...getStyle(color, theme) },
    zIndex: isVisible ? 10 : 0,
  };
};

export const createStyledEdge = (edge: TechEdge, activeDomainId: string, activeCapabilityId: string): TechEdge => {
  const { source, target } = edge;

  const isLinkingActiveDomain = target === activeDomainId || source === activeDomainId;
  const isLinkingActiveCapability = source === activeCapabilityId || target === activeCapabilityId;

  const isLinkingActiveNodes = isLinkingActiveCapability || isLinkingActiveDomain;

  const theme = getTheme(activeDomainId);

  const className: string = `
    ${isLinkingActiveNodes ? "!opacity-100" : "!opacity-50"} 
  `;

  if (isLinkingActiveNodes)
    edge.style = {
      stroke: theme?.base ?? "#3b82f6",
      strokeWidth: 2,
      opacity: 0.2,
    };

  return { ...edge, className, animated: isLinkingActiveNodes };
};
