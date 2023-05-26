import styled from 'styled-components'
import 'typeface-roboto';


export const FreeDesignsContainer = styled.div`
background-color:#eff7fa;
min-height:250px;
font-family: 'Roboto', sans-serif;
padding-top:20px;
`


export const FreeDesignsTitle = styled.h2`
color:#362e68;
font-size:30px;
font-weight:400;
margin-top:30px;
text-align:center;

`

export const TempleteImage = styled.img`
@media (min-width:768px){
    height:400px;
    width:300px;
    margin:20px;
}
@media (max-width:768px){
    height:350px;
    width:250px;
    margin:7px;
}
`



export const TempleteContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;`