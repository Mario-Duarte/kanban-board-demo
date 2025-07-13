import { FiMoreHorizontal } from "react-icons/fi";
import { TaskCard, type Task } from "../card/taskCard";
import { useDroppable } from "@dnd-kit/core";

export interface KanbanColumnData {
  id: string;
  title: string;
  tasks: Task[];
}

interface KanbanColumnProps {
  column: KanbanColumnData;
}

function KanbanColumn({ column }: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div
      className="bg-gray-100/70 rounded-xl p-4 w-full"
      ref={setNodeRef}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-gray-800">{column.title}</h2>
          <span className="text-gray-500 font-medium text-sm">
            {column.tasks.length}
          </span>
        </div>
        <button className="text-gray-500 hover:bg-gray-200 rounded-md p-1">
          <FiMoreHorizontal size={20} />
        </button>
      </div>

      {isOver && (
        <div className="bg-gray-200/50 h-2 rounded-md mb-4"></div>
      )}

      <div className="flex flex-col gap-4">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;
