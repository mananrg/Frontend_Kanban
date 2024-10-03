import PropTypes from "prop-types";

const PMProjectCard = ({ imageUrl, title, description, avatars }) => {
  return (
    <div className="flex flex-col bg-[#2B2C2D] rounded-xl p-6 shadow-lg">
      {/* Project Image */}
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg mb-4 object-cover h-40 w-full"
      />

      {/* Project Title & Description */}
      <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      {/* Placeholder Avatars (Replace with actual images if needed) */}
      <div className="flex mb-4">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="h-6 w-6 rounded-full bg-gray-500 mr-2"
          ></div>
        ))}
      </div>

      {/* Manage Project Button */}
      <button className="px-4 py-2 bg-transparent text-[#4CD7D0] border border-[#4CD7D0] rounded-full hover:bg-[#4CD7D0] hover:text-black transition duration-300 ease-in-out">
        Manage Project
      </button>
    </div>
  );
};

// Prop type validation for the PMProjectCard component
PMProjectCard.propTypes = {
  imageUrl: PropTypes.string.isRequired, // imageUrl should be a required string
  title: PropTypes.string.isRequired, // title should be a required string
  description: PropTypes.string.isRequired, // description should be a required string
  avatars: PropTypes.arrayOf(PropTypes.any).isRequired, // avatars should be an array of any type (e.g., strings, objects)
};

export default PMProjectCard;
