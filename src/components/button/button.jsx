import { Btn } from "./styled";
import { useNavigate } from "react-router-dom";

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
            <Btn onClick={handleClick}>{text}</Btn>
        </>
    )
}