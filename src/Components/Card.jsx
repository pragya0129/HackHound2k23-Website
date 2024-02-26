import PropTypes from "prop-types"; 
function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}


Card.propTypes = {
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
};

export default Card;
