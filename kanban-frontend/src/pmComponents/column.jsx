import { useDrop } from "react-dnd";
import PropTypes from "prop-types"; // Import PropTypes
import Card from "./Card"; // Importing the card component

const Column = ({ title, cards, moveCard, id }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item) => {
      moveCard(item, id); // Trigger the move card function
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`p-4 rounded-lg shadow-lg ${
        isOver ? "bg-blue-100" : "bg-gray-200"
      }`}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {cards.map((card) => (
          <Card key={card.id} {...card} moveCard={moveCard} />
        ))}
      </div>
    </div>
  );
};

// Adding prop-types for validation
Column.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      column: PropTypes.string.isRequired,
    })
  ).isRequired,
  moveCard: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Column;
