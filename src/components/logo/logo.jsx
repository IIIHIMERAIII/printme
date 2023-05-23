import { useNavigate } from 'react-router-dom';
import { LogoWrapper, LogoIcon} from './styled';

export const Logo = ({ src }) => {
     const navigate = useNavigate();

    const onPress = () => {
        navigate('/');
    };
    
    return (
        <LogoWrapper>
            <LogoIcon
                onClick={onPress}
                src={src}
            />
        </LogoWrapper>
    )
};