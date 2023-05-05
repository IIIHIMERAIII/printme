
import {
    ScrollBar,
    ScrollBarList,
    ListItem,
    ItemIcon,
    ItemTitle,
    ItemText,
} from "./styled";
import sprite from '../../images/sprite.svg';
import { colors } from "../../assets/theme";

export const AdvantagesScrollBox = () => {
    return (
        <ScrollBar>
            <ScrollBarList>
                <ListItem>
                    <ItemIcon>
                        <use href={`${sprite}#alarm`} fill={colors.clockColor} />
                    </ItemIcon>
                    <ItemTitle>Lorem, ipsum.</ItemTitle>
                    <ItemText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.</ItemText>
                </ListItem>
                <ListItem>
                    <ItemIcon>
                        <use href={`${sprite}#rocket`} fill={colors.rocketColor} />
                    </ItemIcon>
                    <ItemTitle>Lorem, ipsum.</ItemTitle>
                    <ItemText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.</ItemText>
                </ListItem>
                <ListItem>
                    <ItemIcon>
                        <use href={`${sprite}#credit-card`} fill={colors.cardColor} />
                    </ItemIcon>
                    <ItemTitle>Lorem, ipsum.</ItemTitle>
                    <ItemText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.</ItemText>
                </ListItem>
                <ListItem>
                    <ItemIcon>
                        <use href={`${sprite}#bubbles`} fill={colors.talkColor} />
                    </ItemIcon>
                    <ItemTitle>Lorem, ipsum.</ItemTitle>
                    <ItemText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.</ItemText>
                </ListItem>
            </ScrollBarList>
        </ScrollBar>
    )
};