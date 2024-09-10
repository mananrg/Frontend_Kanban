import { Calendar, Users, Plus } from 'lucide-react';
import { useState } from 'react';
import "./kanban.css";
import CreateTask from './createTask';

const initialData = {
  columns: {
    todo: {
      id: 'todo',
      title: 'TODO',
      taskIds: ['task-1', 'task-2'],
    },
    inProgress: {
      id: 'inProgress',
      title: 'IN WORK',
      taskIds: ['task-3', 'task-4', 'task-5'],
    },
    qa: {
      id: 'qa',
      title: 'QA',
      taskIds: ['task-6', 'task-7'],
    },
    completed: {
      id: 'completed',
      title: 'COMPLETED',
      taskIds: ['task-8'],
    },
  },
  tasks: {
    'task-1': { id: 'task-1', content: 'UX Adjustments', assignees: ['user1'] },
    'task-2': { id: 'task-2', content: 'Moodboards', assignees: ['user2'] },
    'task-3': { id: 'task-3', content: 'Slack Integration', assignees: ['user3'] },
    'task-4': { id: 'task-4', content: 'Copywriting of the app', assignees: ['user4'] },
    'task-5': { id: 'task-5', content: 'Implement Apps', assignees: ['user5', 'user6', 'user7'] },
    'task-6': { id: 'task-6', content: 'Dashboard Design', assignees: ['user8', 'user9'] },
    'task-7': { id: 'task-7', content: 'Design System', assignees: ['user10', 'user11', 'user12'] },
    'task-8': { id: 'task-8', content: 'Presentation', assignees: ['user13'] },
  },
  columnOrder: ['todo', 'inProgress', 'qa', 'completed'],
};

const KanbanBoard = () => {
  const board = initialData;
  const [showCreateTask, setShowCreateTask] = useState(false);

  const handleAddTask = () => {
    setShowCreateTask(true); // Open the modal when "Add New Project" is clicked
  };

  const handleCloseCreateTask = () => {
    setShowCreateTask(false); // Close the modal
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Kanban Board Project</h1>
            <input className='input'
              type="text"
              placeholder="What are you looking for?"
            />
     
        </header>

        {/* Flexbox layout for columns */}
        <div className="flex space-x-4 underline">
          {board.columnOrder.map((columnId) => {
            const column = board.columns[columnId];
            const tasks = column.taskIds.map((taskId) => board.tasks[taskId]);

            return (
              <div
                key={column.id}
                className="bg-gray-200 p-4 rounded-lg flex-1" // Set flex-1 to distribute the columns evenly
              >
                <h2 className="font-bold mb-4">{column.title}</h2>
                {tasks.map((task) => (
                  <div key={task.id} className="bg-white p-4 mb-4 rounded shadow">
                    <p>{task.content}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex -space-x-2">
                        {task.assignees.map((assignee, i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar size={16} />
                        <span>2d</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Footer buttons */}
        <div className="flex justify-right mt-8 space-x-4">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
            <Calendar size={16} className="mr-2" />
            Schedule meeting
          </button>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
            <Users size={16} className="mr-2" />
            View Team Members
          </button>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddTask}
          >
            <Plus size={16} className="mr-2" />
            New Task
          </button>
        </div>
      </div>
      {showCreateTask && (
        <CreateTask onClose={handleCloseCreateTask} />
      )}
    </div>
   
  );
};

export default KanbanBoard;
