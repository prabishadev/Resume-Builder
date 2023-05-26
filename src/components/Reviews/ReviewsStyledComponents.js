import styled from 'styled-components'
import 'typeface-roboto';

import {CgProfile} from 'react-icons/cg'


export const AboutContainer = styled.div`
min-height:250px;
padding-top:30px;
font-family: 'Roboto', sans-serif;
background-color:#19283f;

margin-bottom:30px;
`

export const AboutTitle = styled.h2`
color:#362e68;
font-size:30px;
font-weight:400;
color:white;
text-align:center;
`

export const AboutDescription = styled.p`
font-size:18px;
line-height:25px;
font-weight:400;
color:black;
margin-left:50px;
margin-right:50px;`



export const ReviewContainer = styled.div`
display: flex;
min-height:300px;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;
`
export const ClientCard1 = styled.div`
min-height:200px;
width:350px;
align-items:center;
display:flex;`



export const Profile = styled(CgProfile)`
height:120px;
width:120px;
color:white;
border-color:white;
margin-bottom:20px;
margin-rignt:30px;
padding-right:20px;`

export const ClientName = styled.h3`
color:#ffc400;
font-size:16px;
line-height:28px;
margin-top:0px;
text-align:left;
margin:0px;`


export const ClientDescription = styled.p`
font-size:14px;
line-height:20px;
font-weight:400;
text-align:left;

color:white;
margin-top:0px;

`

export const ClientDesContainer = styled.div`
display:flex;
flex-direction:column;
margin-left:0px;
`
