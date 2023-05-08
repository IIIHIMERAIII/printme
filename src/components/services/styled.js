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
margin-left: 25px;
`;

export const MainImg = styled.img`
width: 580px;
height: 715px;
border-radius: 16px;
box-shadow: -13px 41px 50px -4px rgba(0,0,0,0.3);
`;

export const CategoryList = styled.ul`
display: flex;
gap: 25px;
flex-wrap: wrap;
`;

export const ListItem = styled.li`
border-radius: 16px;
display: flex;
flex-direction: column;
box-shadow: -13px 41px 50px -4px rgba(0,0,0,0.3);
`;


export const MainImgWrapper = styled.div`
position: relative;
`;

export const MaingTitle = styled.p`
padding: 15px;
display: flex;
flex-wrap: wrap;
width: 580px;
font-size: 20px;
position: absolute;
text-align: center;
bottom: 0px;
background: rgba(128, 127, 127, 0.53);
border-bottom-right-radius: 16px;
border-bottom-left-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.4px);
-webkit-backdrop-filter: blur(3.4px);
`;

export const ItemImg = styled.img`
border-radius: 16px 16px 0px 0px;
display:inline-block;
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