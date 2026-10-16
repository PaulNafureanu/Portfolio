import { ProjectShowcase } from "./ProjectShowcase";

type WorkProps = {
  showFlow: boolean;
  onEntranceComplete?: () => void;
};

export function Work({ showFlow, onEntranceComplete }: WorkProps) {
  return (
    <div
      onTransitionEnd={() => {
        console.log("trr");
        onEntranceComplete?.();
      }}
      className={`
        transition-[opacity,transform]
        duration-700
        ease-out
        ${showFlow ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
      `}
    >
      <ProjectShowcase />
    </div>
  );
}
