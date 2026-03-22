import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authRequestAsync, ITask } from 'src/store/auth/actions';
import { RootState } from 'src/store/reducer';
import { useLoadLocal } from 'src/hooks/useLoadLocal';
import { Form } from 'src/shared/pages/PomodoroPage/FormBlock/Form';
import { TaskList } from 'src/shared/pages/PomodoroPage/FormBlock/TaskList';
import { useIsMounted } from 'src/hooks/useIsMounted';
import { useHandleFormTasks } from 'src/hooks/useHandleFormTasks';

export const FormBlock = () => {
  const { newTask, data, error, handleChange, handleSubmit } = useHandleFormTasks();
  const mounted = useIsMounted();
  useLoadLocal();

  const dispatch = useDispatch<any>();

  const currentTasks = useSelector<RootState, ITask[]>(state => state.auth.data.tasks)
    .filter((task) => !task.done);

  function handleClickTask(id: number) {
    data.currentTask = id;
    dispatch(authRequestAsync(data));
  }

  return (
    <>
      {mounted && data.auth.length === 0 && (<Navigate to="/auth" replace />)}
      <Form
        value={newTask}
        error={error}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TaskList
        tasks={currentTasks}
        settings={data.settings}
        onClick={handleClickTask}
        auth={data.auth}
      />
    </>
  );
}
