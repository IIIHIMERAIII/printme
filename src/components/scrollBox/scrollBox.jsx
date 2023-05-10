
import {
    ScrollBar,
    ScrollBarList,
    ListItem,
    ItemIcon,
    ItemTitle,
    ItemText,
} from "./styled";
import sprite from '../../images/sprite.svg';

const scrollBarItems = [
    { icon: `${sprite}#clock`, title: 'Цінуємо час', subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.' },
    { icon: `${sprite}#rocket`, title: 'Швидка відповідь', subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.' },
    { icon: `${sprite}#credit-card`, title: 'Знижки', subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.' },
    { icon: `${sprite}#chat`, title: 'Надійна пітримка', subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.' },
];

export const ScrollBox = () => {
    return (
        <ScrollBar>
            <ScrollBarList>
                {scrollBarItems.map((item, index) => (
                        <ListItem key={index}>
                            <ItemIcon>
                                <use href={item.icon}/>
                            </ItemIcon>
                            <ItemTitle>{item.title}</ItemTitle>
                            <ItemText>{item.subTitle}</ItemText>
                        </ListItem>
                ))}
            </ScrollBarList>
        </ScrollBar>
    )
};