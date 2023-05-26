import styled from 'styled-components';
import 'typeface-roboto';



export const HeaderContainer = styled.div`
@media (min-width: 768px){
    background-color:#19283f;
min-height:250px;
display:flex;
font-family: 'Roboto', sans-serif;

flex-direction:row;
align-items:center;
margin-bottom:30px;
justify-content:space-evenly;
}
@media (max-width: 768px){
background-color:#19283f;
min-height:250px;
display:flex;
flex-direction:row;
font-family: 'Roboto', sans-serif;
color:white;

align-items:center;
margin-bottom:30px;
}
`


export const  HeaderTitle = styled.h2`
@media (min-width:992px){
font-size:25px;
color:white;
font-weight:400;
}
@media (max-width:992px){
    text-align:left;
    padding-left:20px;
font-size:20px;
color:white;
font-weight:400;
}
`


export const HeaderImage = styled.img`
@media (min-width: 992px){
    height:270px;
    align-self:flex-end;
}
@media (max-width: 992px){
    height:200px;
    align-self:flex-end;
    margin-right:20px;
}
`