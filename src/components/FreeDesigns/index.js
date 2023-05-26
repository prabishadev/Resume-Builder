import {FreeDesignsContainer, FreeDesignsTitle,TempleteContainer,TempleteImage} from './FreeDesignsStyledComponents'
import {Link} from 'react-router-dom'

const FreeDesigns = () => (
    <FreeDesignsContainer>
        <FreeDesignsTitle>Free Designs</FreeDesignsTitle>
        <TempleteContainer>
        <div className='templates'>
            <Link to="/resume1">
            <TempleteImage src="https://res.cloudinary.com/dg0telgxq/image/upload/v1684321988/WhatsApp_Image_2023-05-17_at_3.30.32_PM_boena1.jpg" alt="template"/>
            </Link>
        <Link to="/resume2">
            <TempleteImage src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683350731/WhatsApp_Image_2023-05-06_at_10.54.08_AM_rs9dnw.jpg" alt="template"/>
        </Link>
            
        </div>
    </TempleteContainer>
    </FreeDesignsContainer>
)


export default FreeDesigns