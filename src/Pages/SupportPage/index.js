import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;

    h1 {
        margin-top: 60px;
        margin-bottom: 50px;
        font-weight: 600;
    }

    h2 {
        font-size: 20px;
        color: black;
        font-weight: 500;
    }
`;

const FQASection = styled.section`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
`;

const UL = styled.ul`
    display: flex;
    flex-direction: column;
    
`;

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    width: 300px;
    p {
        text-align: center;
        margin: 10px;
    }
`;

const SupportPage = () => {

    return (
        <Container>
            <h1>Kontakta oss</h1>
            <FQASection>
                <h2>FAQ</h2>
                <UL>
                    <li>Vad är souperhealthy?</li>
                    <li>Kan jag betala med swish?</li>
                    <li>Hur skapar jag ett konto?</li>
                    <li>Vad kostar leveransen?</li>
                    <li>Var levererar ni?</li>
                </UL>
            </FQASection>

            <ContactWrapper>
                <h2>Maila oss</h2>
                <p>
                    Inte fått svar på din fråga? 
                    Kontakta oss via mail, vi återkopplar inom 24 timmar.
                </p>
                <p>support@souperhealthy.com</p>
            </ContactWrapper>
            <ContactWrapper>
                <h2>Ring oss</h2>
                <p>08-230230230</p>
            </ContactWrapper>
            <ContactWrapper>
                <h2>Besök oss</h2>
                <p>
                Av soppa blir du varm, det blir du även av ett besök i vår fina restaurang, vi finns på Odengatan 5. 
                Varmt välkommen förbi!
                </p>
            </ContactWrapper>
        </Container>
    )
}

export default SupportPage;