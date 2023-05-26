import styled from 'styled-components'
import 'typeface-roboto';



export const AboutContainer = styled.div`
min-height:240px;
margin-top:30px;
background-color:#ffffff
font-family: 'Roboto', sans-serif;

margin-bottom:30px;
`

export const AboutTitle = styled.h2`
@media (min-width: 768px){
color:#362e68;
font-size:30px;
font-weight:400;
text-align:center;
}
@media (max-width: 768px){
color:#362e68;
font-size:25px;
font-weight:400;
text-align:center;
}
`

export const AboutDescription = styled.p`
@media (min-width: 768px){
font-size:18px;
line-height:25px;
font-weight:400;
color:black;
text-align:left;

margin-left:50px;
margin-right:50px;

}
@media (max-width: 768px){
font-size:15px;
line-height:20px;
font-weight:400;
color:black;
text-align:left;
margin-left:20px;
margin-right:20px;
}
`


