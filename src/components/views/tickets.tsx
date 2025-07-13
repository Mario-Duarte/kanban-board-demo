import { FiChevronDown } from "react-icons/fi";
import type { Task } from "../card/taskCard";
import type { KanbanColumnData } from "../cols/kabanCols";
import KanbanColumn from "../cols/kabanCols";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";

const openTasks: Task[] = [
  {
    id: "t132",
    title: "867 Wireless caharging",
    assignee: {
      name: "Kathryn Murphy",
      initials: "K",
      bgColor: "bg-green-500",
    },
    dueDate: "Late by 1 day 11 hours",
    status: "Open",
  },
  {
    id: "t333",
    title: "867 Wireless caharging",
    assignee: {
      name: "Robert Fox",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      initials: "RF",
      bgColor: "bg-red-500",
    },
    dueDate: "Late by 02:12 hour",
    status: "Open",
  },
  {
    id: "t874",
    title: "Escalate complex cus...",
    assignee: {
      name: "Cameron Williamson",
      avatarUrl: "https://i.pravatar.cc/150?img=6",
      initials: "CW",
      bgColor: "bg-indigo-500",
    },
    dueDate: "Tomorrow 12:00 pm",
    status: "Open",
  },
  {
    id: "t102",
    title: "867 Wireless caharging",
    assignee: {
      name: "Esther Howard",
      initials: "E",
      bgColor: "bg-orange-500",
    },
    dueDate: "Tomorrow 12:00 pm",
    status: "Open",
  },
];

const inProgressTasks: Task[] = [
  {
    id: "t273",
    title: "Monitor social media ch...",
    assignee: {
      name: "Savannah Nguyen",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      initials: "SN",
      bgColor: "bg-blue-500",
    },
    dueDate: "Late by 01:30 hour",
    status: "In progress",
  },
  {
    id: "t587",
    title: "Escalate complex cus...",
    assignee: {
      name: "Leslie Alexander",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
      initials: "LA",
      bgColor: "bg-purple-500",
    },
    dueDate: "Tomorrow 09:00 am",
    status: "In progress",
  },
  {
    id: "t667",
    title: "Develop and deliver trai...",
    assignee: { name: "Guy Hawkins", initials: "G", bgColor: "bg-cyan-500" },
    dueDate: "Tomorrow 09:00 am",
    status: "In progress",
  },
  {
    id: "t709",
    title: "867 Wireless caharging",
    assignee: {
      name: "Jacob Jones",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      initials: "JJ",
      bgColor: "bg-pink-500",
    },
    dueDate: "Tomorrow 10:00 am",
    status: "In progress",
  },
  {
    id: "t409",
    title: "Develop and deliver trai...",
    assignee: {
      name: "Cody Fisher",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      initials: "CF",
      bgColor: "bg-yellow-500",
    },
    dueDate: "Tomorrow 04:00 pm",
    status: "In progress",
  },
  {
    id: "t901",
    title: "867 Wireless caharging",
    assignee: {
      name: "Jacob Jones",
      avatarUrl: "https://i.pravatar.cc/150?img=7",
      initials: "JJ",
      bgColor: "bg-pink-500",
    },
    dueDate: "Tomorrow 12:00 pm",
    status: "In progress",
  },
];

const completedTasks: Task[] = [
  {
    id: "t111",
    title: "867 Wireless caharging",
    assignee: {
      name: "Wade Warren",
      avatarUrl: "https://i.pravatar.cc/150?img=8",
      initials: "WW",
      bgColor: "bg-teal-500",
    },
    dueDate: "Tomorrow 12:00 pm",
    status: "Completed",
  },
];

const baseBoardData: KanbanColumnData[] = [
  { id: "col1", title: "Open", tasks: openTasks },
  { id: "col2", title: "In Progress", tasks: inProgressTasks },
  { id: "col3", title: "Completed", tasks: completedTasks },
];

export const KanbanBoard = () => {
  const [boardData, setBoardData] = useState<KanbanColumnData[]>(baseBoardData);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const taskId = active.id;
    const newColumnId = over.id;
    setBoardData((prevBoardData) => {
      const taskToMove = prevBoardData
      .flatMap((col) => col.tasks)
      .find((task) => task.id === taskId);

      if (!taskToMove) return prevBoardData;

      const targetColumn = prevBoardData.find((col) => col.id === newColumnId);
      if (targetColumn && targetColumn.tasks.some((task) => task.id === taskId)) {
      return prevBoardData;
      }

      return prevBoardData.map((column) => {
      if (column.id === newColumnId) {
        return {
        ...column,
        tasks: [
          ...column.tasks,
          {
          ...taskToMove,
          status:
            column.title === "Open"
            ? "Open"
            : column.title === "In Progress"
            ? "In progress"
            : "Completed",
          },
        ],
        };
      }
      return {
        ...column,
        tasks: column.tasks.filter((task) => task.id !== taskId),
      };
      });
    });
  };

  return (
    <main className="bg-white w-full p-4 md:p-6 lg:p-8 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          All tickets
          <FiChevronDown />
        </button>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {boardData.map((column) => (
            <KanbanColumn key={column.id} column={column} />
          ))}
        </div>
      </DndContext>
    </main>
  );
};
