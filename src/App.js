import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "going to gym",
      day: "02 feb,2023",
      reminder: true,
    },
    {
      id: 2,
      text: "going to office",
      day: "02 feb,2023",
      reminder: true,
    },
    {
      id: 3,
      text: "going to home",
      day: "02 feb,2023",
      reminder: true,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onShowAdd={() => setShowAddTask(!showAddTask)} onShow={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
