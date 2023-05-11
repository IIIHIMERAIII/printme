
import {
    ScrollBar,
    ScrollBarList,
    ListItem,
    ItemTetxWrapper,
    ItemTitle,
    ItemText,
} from "./styled";
import clock from '../../images/clock.svg';
import chat from '../../images/chat.svg';
import rocket from '../../images/rocket.svg';
import card from '../../images/cards.svg'

const scrollBarItems = [
    { icon: clock, title: 'Цінуємо час', subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.' },
    { icon: rocket, title: 'Швидка відповідь', subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.' },
    { icon: card, title: 'Знижки', subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.' },
    { icon: chat, title: 'Надійна пітримка', subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam veniam quod in est odit modi, nostrum repellendus, voluptates placeat eos maxime saepe, fuga ut nobis. Quam impedit illum porro, magnam neque magni. Ipsum.' },
];

export const ScrollBox = () => {
    

    
    return (
        <ScrollBar>
            <ScrollBarList>
                {scrollBarItems.map((item, index) => (
                        <ListItem key={index}>
                            <ItemTetxWrapper icon={item.icon}>
                                <ItemTitle>{item.title}</ItemTitle>
                                <ItemText>{item.subTitle}</ItemText>
                            </ItemTetxWrapper>
                        </ListItem>
                ))}
            </ScrollBarList>
        </ScrollBar>
    )
};