import { AboutContainer,AboutTitle,ReviewContainer,ClientCard1,Profile,ClientName,ClientDescription,ClientDesContainer } from "./ReviewsStyledComponents";

const AboutUs = () => (
    <AboutContainer>
            <AboutTitle>Client Reviews</AboutTitle>
            <ReviewContainer>
            <ClientCard1>
            <Profile/>
            <ClientDesContainer>
            <ClientName>Sandeep Menon</ClientName>
            <ClientDescription>Exceptional service right from communication at the start till delivery Requirements met very well</ClientDescription>
            </ClientDesContainer>

                
            </ClientCard1>
            <ClientCard1>
            <Profile/>
            <ClientDesContainer>
            <ClientName>Siddhi Joshi</ClientName>
            <ClientDescription>Very quick service and extremely professional. Thank you Prabhisha the CV is extremely well written and laid out. Highly recommended!!!</ClientDescription>
            </ClientDesContainer>
            
                
            </ClientCard1>
            <ClientCard1>
            <Profile/>
            <ClientDesContainer>
            <ClientName>Ooha Rao Myneni</ClientName>
            <ClientDescription>Excellent service.. patiently worked on feedback until I am fully satisfied</ClientDescription>
            </ClientDesContainer>
            
                
            </ClientCard1>

            </ReviewContainer>
            

    </AboutContainer>
)

export default AboutUs;