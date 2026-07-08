export type Tool =
  | "Freshdesk"
  | "Jira"
  | "Confluence"
  | "Postman"
  | "SQL"
  | "Browser DevTools"
  | "HAR"
  | "Logs"
  | "Auth / access"
  | "ITSM vocabulary";

export type IssueClass =
  | "Billing sync"
  | "Login incident"
  | "Account access"
  | "API authentication"
  | "API resource lookup"
  | "Browser-specific bug"
  | "Performance issue"
  | "Integration sync"
  | "Access request"
  | "Unclear bug report";

export type WorkflowCase = {
  id: string;
  title: string;
  brief: string;
  issueClass: IssueClass;
  tools: Tool[];
};
