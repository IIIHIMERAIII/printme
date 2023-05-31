import { useState } from "react"
import {
  SwitcherWrapper,
  SwitcherTitle,
  BtnWrapper,
  ContentWrapper,
  TabContent,
  ClientsList,
  ClientsListItem,
  ClientsIcon,
} from "./styled"
import { Button } from "../button/button";
import { TabButton } from "../tabButton/tabButton";
import { text } from "../../assets/text";

import { clientsIcons } from "../../assets/arrays";

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
                <TabButton
                  className={activeTab === 3 ? 'active' : ''}
                  onClick={() => handleTabClick(3)}
                  text='Наші клієнти'
                />
            </BtnWrapper>
<ContentWrapper>
  <TabContent isActive={activeTab === 1} className={activeTab === 1 ? 'visible' : ''}>
    <p>{text.about}</p>
  </TabContent>
  <TabContent isActive={activeTab === 2} className={activeTab === 2 ? 'visible' : ''}>
    <p>{text.about2}</p>
  </TabContent>
  <TabContent isActive={activeTab === 3} className={activeTab === 3 ? 'visible' : ''}>
    <ClientsList>
      {clientsIcons.map((item, index) => (
        <ClientsListItem key={index}>
          <ClientsIcon
            src={item}
          />
        </ClientsListItem>
      ))}
    </ClientsList>
  </TabContent>
</ContentWrapper>
            <Button
              text='Детальніше'
              link='/about'
            />
        </SwitcherWrapper>
    )
};