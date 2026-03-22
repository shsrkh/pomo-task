import React from "react";
import { useSelector } from "react-redux";
import { IData } from "src/store/auth/actions";
import { RootState } from "src/store/reducer";
import { formatAllTime } from "src/utils/js/formatAllTime";

export const useCurrentTaskList = (onClick: (id: number) => void) => {
  const [currentTaskActiveId, setCurrentTaskActiveId] = React.useState<number>(0);
  const [allTimeText, setAllTimeText] = React.useState<string>('');

  const data = useSelector<RootState, IData>(state => state.auth.data);

  const tasks = React.useMemo(
    () =>
      [...data.tasks.filter((task) => !task.done)].sort((a, b) => a.id - b.id),
    [data.tasks]
  );

  const currentTasksTime = React.useMemo(
    () =>
      data.tasks
        .filter((task) => !task.done)
        .reduce((acc, task) => task.time * task.pomodor + acc, 0) / 60 || 0,
    [data.tasks]
  );

  const onClickRef = React.useRef(onClick);
  onClickRef.current = onClick;

  React.useEffect(() => {
    if (tasks.length === 0) {
      setCurrentTaskActiveId(0);
      return;
    }
    const current = tasks.find((task) => task.id === data.currentTask);
    if (current) {
      setCurrentTaskActiveId(data.currentTask);
    } else {
      const currentId = tasks[0].id;
      setCurrentTaskActiveId(currentId);
      onClickRef.current(currentId);
    }
  }, [tasks, data.currentTask]);

  React.useEffect(() => {
    setAllTimeText(formatAllTime(currentTasksTime));
  }, [currentTasksTime])

  return {
    tasks,
    currentTaskActiveId,
    allTimeText,
    setCurrentTaskActiveId
  }
}
