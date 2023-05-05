
import { LogoWrapper, LogoIcon} from './styled';
import logoPng from '../../images/logo.png';

export const Logo = () => {
    return (
        <LogoWrapper>
            <LogoIcon
                src={logoPng}
            />
        </LogoWrapper>
    )
}