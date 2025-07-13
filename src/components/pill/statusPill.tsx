export type TaskStatus = "Open" | "In progress" | "Completed";

const STATUS_STYLES: Record<TaskStatus, string> = {
  Open: "bg-purple-100 text-purple-700",
  "In progress": "bg-blue-100 text-blue-700",
  Completed: "bg-yellow-100 text-yellow-800",
};

interface StatusPillProps {
  status: TaskStatus;
}

export function StatusPill({ status }: StatusPillProps) {
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}
