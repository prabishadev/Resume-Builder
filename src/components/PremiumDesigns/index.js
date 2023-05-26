import {FreeDesignsContainer, FreeDesignsTitle,TempleteContainer,TempleteImage} from './PremiumDesignsStyledComponents'
import {Link} from 'react-router-dom'

const PremiumDesigns = () => (
    <FreeDesignsContainer>
        <FreeDesignsTitle>Premium Designs</FreeDesignsTitle>
        <TempleteContainer>
        <div className='templates'>
        <Link to="/resume3">
            <TempleteImage className='template-image'  src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683350551/WhatsApp_Image_2023-05-06_at_10.34.24_AM_mebjkc.jpg" alt="template"/>
        </Link>
        <Link to="/resume4">
            <TempleteImage src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683350551/WhatsApp_Image_2023-05-06_at_10.34.27_AM_ternbo.jpg" alt="template"/>
        </Link>
            
        </div>
    </TempleteContainer>
    </FreeDesignsContainer>
)


export default PremiumDesigns;