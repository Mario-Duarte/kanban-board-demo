import { FiChevronDown, FiList, FiGrid } from "react-icons/fi";
import type { Task } from "../card/taskCard";
import type { KanbanColumnData } from "../cols/kabanCols";
import KanbanColumn from "../cols/kabanCols";

const overdueTasks: Task[] = [
  {
    id: "t1",
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
    id: "t2",
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
    id: "t3",
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
    id: "t4",
    title: "Develop and deliver trai...",
    assignee: {
      name: "Cody Fisher",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      initials: "CF",
      bgColor: "bg-yellow-500",
    },
    dueDate: "Tomorrow 04:00 am",
    status: "In progress",
  },
];

const dueIn6HoursTasks: Task[] = [
  {
    id: "t5",
    title: "Escalate complex cus...",
    assignee: {
      name: "Leslie Alexander",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
      initials: "LA",
      bgColor: "bg-purple-500",
    },
    dueDate: "Tomorrow 04:00 am",
    status: "In progress",
  },
  {
    id: "t6",
    title: "Develop and deliver trai...",
    assignee: { name: "Guy Hawkins", initials: "G", bgColor: "bg-cyan-500" },
    dueDate: "Tomorrow 04:00 am",
    status: "In progress",
  },
  {
    id: "t7",
    title: "867 Wireless caharging",
    assignee: {
      name: "Jacob Jones",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      initials: "JJ",
      bgColor: "bg-pink-500",
    },
    dueDate: "Tomorrow 04:00 am",
    status: "In progress",
  },
];

const dueIn12HoursTasks: Task[] = [
  {
    id: "t8",
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
    id: "t9",
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
  {
    id: "t10",
    title: "867 Wireless caharging",
    assignee: {
      name: "Esther Howard",
      initials: "E",
      bgColor: "bg-orange-500",
    },
    dueDate: "Tomorrow 12:00 pm",
    status: "Open",
  },
  {
    id: "t11",
    title: "867 Wireless caharging",
    assignee: {
      name: "Wade Warren",
      avatarUrl: "https://i.pravatar.cc/150?img=8",
      initials: "WW",
      bgColor: "bg-teal-500",
    },
    dueDate: "Tomorrow 12:00 pm",
    status: "Escalated",
  },
];

const boardData: KanbanColumnData[] = [
  { id: "col1", title: "Overdue", tasks: overdueTasks.slice(0, 3) }, // Sliced to match image
  { id: "col2", title: "Due in 6 hours", tasks: dueIn6HoursTasks },
  { id: "col3", title: "Due in 12 hours and more", tasks: dueIn12HoursTasks },
];

export const KanbanBoard = () => {
  return (
    <main className="bg-white w-full p-4 md:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          All tickets
          <FiChevronDown />
        </button>

        <div className="flex items-center border border-gray-300 rounded-md p-0.5">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-md">
            <FiList />
            List
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 rounded-md">
            <FiGrid />
            Grid
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {boardData.map((column) => (
          <KanbanColumn key={column.id} column={column} />
        ))}
      </div>
    </main>
  );
};
