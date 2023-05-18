import { useNavigate } from "react-router-dom";

export const Button = ({ text, link }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (isExternalLink(link)) {
      e.preventDefault();
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  const isExternalLink = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div className="button-container">
      <span className="mas">{text}</span>
      <a href={link} className="button" onClick={handleClick}>
        <p>{text}</p>
      </a>
    </div>
  );
};