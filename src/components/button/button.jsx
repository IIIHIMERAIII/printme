import { Link } from "react-router-dom";

export const Button = ({ text, link }) => {
  const isExternal = link.startsWith("http") || link.startsWith("https");

  const handleLinkClick = (event) => {
    if (isExternal) {
      event.preventDefault();
      window.open(link, "_blank");
    }
  };

  return (
    <div className="button-container">
      <span className="mas">{text}</span>
      {isExternal ? (
        <a className="button" href={link} target="_blank" rel="noopener noreferrer">
          <p>{text}</p>
        </a>
      ) : (
        <Link className="button" to={link} onClick={handleLinkClick}>
          <p>{text}</p>
        </Link>
      )}
    </div>
  );
};