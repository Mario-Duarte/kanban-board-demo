import type { KanbanColumnData } from "../components/cols/kabanCols";

function useFilterTasks(column: KanbanColumnData, searchTerm?: string) {
  if (!searchTerm) {
    return column;
  }

  const tasks = column.tasks.filter((task) =>
    task.title.toLocaleLowerCase().includes(searchTerm)
  );

  return {
    ...column,
    tasks,
  };
}

export default useFilterTasks;
