import { useState } from "react";
import Column from "./column"; // Importing the column component

const initialData = {
  todo: [
    { id: 1, name: "Task 1", description: "Do something", column: "todo" },
    { id: 2, name: "Task 2", description: "Do something else", column: "todo" },
  ],
  inWork: [
    {
      id: 3,
      name: "Task 3",
      description: "Doing something",
      column: "inProgress",
    },
  ],
  qa: [{ id: 4, name: "Task 4", description: "Did something", column: "done" }],
  completed: [
    { id: 5, name: "Task 4", description: "Did something", column: "done" },
  ],
};

const PMProject = () => {
  const [columns, setColumns] = useState(initialData);

  // Function to handle moving cards between columns
  const moveCard = (card, targetColumnId) => {
    const sourceColumnId = card.column;
    const sourceCards = [...columns[sourceColumnId]];
    const targetCards = [...columns[targetColumnId]];

    // Remove the card from the source column
    const cardIndex = sourceCards.findIndex((c) => c.id === card.id);
    sourceCards.splice(cardIndex, 1);

    // Add the card to the target column
    card.column = targetColumnId;
    targetCards.push(card);

    // Update the state
    setColumns({
      ...columns,
      [sourceColumnId]: sourceCards,
      [targetColumnId]: targetCards,
    });
  };

  return (
    <div className="p-8 bg-gray-800 min-h-screen">
      <h2 className="text-3xl font-bold mb-2">Project Manager Kanban Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Render the columns */}
        <Column
          title="TO DO"
          cards={columns.todo}
          moveCard={moveCard}
          id="todo"
        />
        <Column
          title="IN WORK"
          cards={columns.inWork}
          moveCard={moveCard}
          id="inWork"
        />
        <Column title="QA" cards={columns.qa} moveCard={moveCard} id="qa" />
        <Column
          title="COMPLETED"
          cards={columns.completed}
          moveCard={moveCard}
          id="completed"
        />
      </div>
    </div>
  );
};

export default PMProject;
