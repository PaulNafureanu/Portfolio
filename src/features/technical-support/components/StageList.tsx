import type { WorkflowStage, WorkflowStageKey } from "../types/stage.types";
import { SelectableNavList } from "./shared/SelectableNavList";

type WorkflowStageListProps = {
  stages: WorkflowStage[];
  activeStageKey: WorkflowStageKey;
  onSelectStage: (key: WorkflowStageKey) => void;
};

export function StageList({
  stages,
  activeStageKey,
  onSelectStage,
}: WorkflowStageListProps) {
  const activeStageIndex = stages.findIndex(
    (stage) => stage.key === activeStageKey,
  );

  return (
    <SelectableNavList
      items={stages}
      activeIndex={activeStageIndex === -1 ? 0 : activeStageIndex}
      getKey={(item) => item.key}
      getLabel={(item) => item.label}
      onSelect={(item) => onSelectStage(item.key)}
    />
  );
}
