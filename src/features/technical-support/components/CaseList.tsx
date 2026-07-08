import type { WorkflowCase } from "../types/case.types";
import { SelectableNavList } from "./shared/SelectableNavList";

type CaseListProps = {
  cases: WorkflowCase[];
  activeCaseIndex: number;
  onSelectCase: (index: number) => void;
};

export function CaseList({
  cases,
  activeCaseIndex,
  onSelectCase,
}: CaseListProps) {
  return (
    <SelectableNavList
      items={cases}
      activeIndex={activeCaseIndex}
      getKey={(item) => item.id}
      getLabel={(item) => item.issueClass}
      onSelect={(_item, index) => onSelectCase(index)}
    />
  );
}
