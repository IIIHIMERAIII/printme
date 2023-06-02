import { useState } from "react"
import {
  SwitcherWrapper,
  SwitcherTitle,
  BtnWrapper,
  ContentWrapper,
  TabContent,
  MarkedList,
  MarkedListItem,
  Dot,
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
                  text='Наші переваги'
                />
            </BtnWrapper>
<ContentWrapper>
  <TabContent isActive={activeTab === 1} className={activeTab === 1 ? 'visible' : ''}>
    <p>{text.about}</p>
  </TabContent>
  <TabContent isActive={activeTab === 2} className={activeTab === 2 ? 'visible' : ''}>
    <MarkedList>
      {text.about2.map((item, index) =>
          <MarkedListItem key={index}><Dot>•</Dot><p>{item}</p></MarkedListItem>
          )}
    </MarkedList>
  </TabContent>
</ContentWrapper>
            <Button
              text='Детальніше'
              link='/about'
            />
        </SwitcherWrapper>
    )
};