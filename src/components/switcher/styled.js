import styled from "styled-components";
import { breakpoints } from "../../assets/theme";

export const SwitcherWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;


@media screen and (min-width: ${breakpoints.md}) {
    align-items: start;
}

@media screen and (min-width: ${breakpoints.xl}) {
    width: 60%;
    margin-right: 35px;
}
`;

export const SwitcherTitle = styled.h3`
font-size: 35px;

@media screen and (min-width: ${breakpoints.md}) {
font-size: 50px;
}
`;

export const BtnWrapper = styled.div`
margin-top:10px;
display: flex;
gap: 12px;

@media screen and (min-width: ${breakpoints.sm}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    display: flex;
    height: 40px;
    margin-top:20px;
}
`;

export const ContentWrapper = styled.div`
margin-top: 30px;
margin-bottom: 40px;
transition: opacity 0.8s ease 0.3s;

   > div {
    opacity: 0;
    transition: opacity 0.8s ease-in-out 0.3s;
    visibility: hidden; 
  }

  > div.visible {
    opacity: 1;
    visibility: visible;
    height: 300px;
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    margin-top: 70px;
    margin-bottom: 80px;
      > div.visible {
        height: 300px;
      }
  }

   @media screen and (min-width: ${breakpoints.xl}) {
      > div.visible {
        height: 200px;
      }
   }

      @media screen and (min-width: ${breakpoints.xxl}) {
      > div.visible {
        height: 270px;
      }
   }
`;

export const TabContent = styled.div`
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transition: opacity 0.8s ease-in-out 0.3s;
  text-align: justify;
  height: 0; 
  overflow: hidden; 
`;

export const ClientsList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 25px;

  @media screen and (min-width: ${breakpoints.md}) {
    gap: 14px;
  }
`;

export const ClientsListItem = styled.li`
width: 20%;
display: flex;
justify-content: center;
align-items: center;
`;

export const ClientsIcon = styled.img`
width: 100%;
`;