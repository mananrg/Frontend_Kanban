import { useDrag } from "react-dnd";
import PropTypes from "prop-types";

const Card = ({ id, name, description, column }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { id, name, description, column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-4 rounded-lg shadow-md ${
        isDragging ? "opacity-50" : "opacity-100"
      } bg-white`}
      style={{ marginBottom: "10px" }}
    >
      <h4 className="text-base font-medium">{name}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

// Adding prop-types to validate the props
Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  column: PropTypes.string.isRequired,
};

export default Card;
