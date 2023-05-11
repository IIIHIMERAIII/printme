import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Button = ({text, link}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isExternalLink(link)) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  const isExternalLink = (url) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

    return (
        <>
        <div className="button-container" >
          <span className="mas">{text}</span>
          <Link className="button" onClick={handleClick}><p>{text}</p></Link>
        </div>
        </>
    )
}