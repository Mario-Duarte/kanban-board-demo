// src/components/TaskCard.tsx
import React from "react";
import { FiTool, FiClock, FiClipboard } from "react-icons/fi";
import Avatar from "../avatar/avatar";
import { StatusPill, type TaskStatus } from "../pill/statusPill";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export interface Assignee {
  name: string;
  avatarUrl?: string;
  initials: string;
  bgColor: string;
}

export interface Task {
  id: string;
  title: string;
  assignee: Assignee;
  dueDate: string;
  status: TaskStatus;
}

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: { task },
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  const colorVariation = isDragging ? "bg-slate-100" : "bg-white";
  const rotationVariation = isDragging ? `rotate-6` : "rotate-0";
  const zIndex = isDragging ? 'z-10' : 'z-0';

  return (
    <div
      className={` border ${colorVariation} border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-grab ${rotationVariation} ${zIndex}`}
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <FiTool className="text-gray-500 mt-1 flex-shrink-0" />
          <p className="font-semibold text-gray-800">{task.title}</p>
        </div>

        <div className="flex items-center gap-2">
          <Avatar
            src={task.assignee.avatarUrl}
            initials={task.assignee.initials}
            name={task.assignee.name}
            bgColor={task.assignee.bgColor}
          />
          <p className="text-sm text-gray-700">{task.assignee.name}</p>
        </div>

        <div className="flex items-center gap-2">
          <FiClock className="text-gray-500" />
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
            {task.dueDate}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FiClipboard className="text-gray-500" />
          <StatusPill status={task.status} />
        </div>
      </div>
    </div>
  );
};
