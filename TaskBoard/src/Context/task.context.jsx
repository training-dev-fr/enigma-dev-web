import { createContext, useContext } from "react";

const TaskContext = createContext();

const useTask = () => useContext(TaskContext);

const TaskProvider = ({children}) => {
    const taskStorage = localStorage.getItem('taskList')
    const [taskList,setTaskList] = useState(taskStorage?JSON(taskStorage):[]);

    const addTask = (task) => {
        if(!task.title || !task.description || !task.completed){
            throw new Error('Task format incompatible');
        }
        const newTaskList = [...taskList, task];
        localStorage.setItem('taskList',newTaskList);
        setTaskList(newTaskList);
    }

    const removeTask = (id) => {
        let newTaskList = taskList.filter(task => task.id !== id);
        localStorage.setItem('taskList',newTaskList);
        setTaskList(newTaskList);
    }

    return (
        <TaskContext.Provider value={{taskList, addTask, removeTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export {useTask, TaskProvider};