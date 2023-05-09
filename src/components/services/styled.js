import styled from "styled-components";


export const ServicesWrapper = styled.section`
padding-top: 80px;
`;

export const ServicesTitle = styled.h3`
font-size: 50px;
text-align: center;
margin-bottom: 50px;
`;

export const FlexContainer = styled.div`
display: flex;
`;

export const CategoryWrapper = styled.div`
display: flex;
`;

export const CategoryList = styled.ul`
display: flex;
gap: 25px;
flex-wrap: wrap;
`;

export const ListItem = styled.li`
height: 346px;
width: 270px;
border-radius: 16px;
display: flex;
flex-direction: column;
box-shadow: -13px 41px 50px -4px rgba(0,0,0,0.3);
`;

export const ItemImg = styled.img`
border-radius: 16px 16px 0px 0px;
display:inline-block;
height: 100%;
`;

export const ItemTitle = styled.p`
padding: 21px;
font-size: 20px;
background: rgba(128, 127, 127, 0.53);
border-bottom-right-radius: 16px;
border-bottom-left-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.4px);
vertical-align: middle;
-webkit-backdrop-filter: blur(3.4px);
`;