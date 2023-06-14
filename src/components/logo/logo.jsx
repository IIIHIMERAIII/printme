
import { LogoWrapper, LogoIcon} from './styled';

export const Logo = ({ src }) => {  
    
    return (
        <LogoWrapper to='/'>
            <LogoIcon
                src={src}
            />
        </LogoWrapper>
    )
};