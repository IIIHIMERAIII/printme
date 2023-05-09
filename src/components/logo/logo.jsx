import { useNavigate } from 'react-router-dom';
import { LogoWrapper, LogoIcon} from './styled';
import logoPng from '../../images/logo.png';

export const Logo = () => {
     const navigate = useNavigate();

    const onPress = () => {
        navigate('/');
    };
    
    return (
        <LogoWrapper>
            <LogoIcon
                onClick={onPress}
                src={logoPng}
            />
        </LogoWrapper>
    )
};