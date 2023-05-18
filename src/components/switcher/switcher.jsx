import { useState } from "react"
import {
  SwitcherWrapper,
  SwitcherTitle,
  BtnWrapper,
  ContentWrapper,
} from "./styled"
import { Button } from "../button/button";
import { TabButton } from "../tabButton/tabButton";
import { text } from "../../assets/text";

export const Switcher = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };



    return (
          <SwitcherWrapper>
            <SwitcherTitle>Про нашу компанію</SwitcherTitle>
            <BtnWrapper>
                <TabButton
                  className={activeTab === 1 ? 'active' : ''}
                  onClick={() => handleTabClick(1)}
                  text='Про нас'
                />
                <TabButton
                  className={activeTab === 2 ? 'active' : ''}
                  onClick={() => handleTabClick(2)}
                  text='Наша мета'
                />
                <TabButton
                  className={activeTab === 3 ? 'active' : ''}
                  onClick={() => handleTabClick(3)}
                  text='Обирай своє'
                />
          </BtnWrapper>
            <ContentWrapper>
                {activeTab === 1 && <div><p>{text.about }</p></div>}
                {activeTab === 2 && <div>Content of Tab 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem fuga inventore amet perferendis perspiciatis unde incidunt cum doloribus id earum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, illo?</div>}
                {activeTab === 3 && <div>Content of Tab 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto est repudiandae exercitationem quas. Consequuntur veniam eum id temporibus delectus impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam.</div>}
            </ContentWrapper>
            <Button
              text='Детальніше'
              link='/about'
            />
        </SwitcherWrapper>
    )
}