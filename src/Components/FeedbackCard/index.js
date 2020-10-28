import React from 'react';
import styled from 'styled-components';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import TextArea from '../TextArea';

const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FeddbackButtonWrapper = styled.div`
    display: flex;

`;


const FeedbackButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 150px;
    height: 130px;
    margin: 10px;
    border-radius: 10px;
    
    &#negativ {
        background-color: #FFF0F0;
    }
    &#positiv {
        background-color: #D2FFE4;
    }

`;

const FeedbackCard = ({ handleFeedback, handleTextArea}) => {


    return (
        <FeedbackContainer>
            <h1>Feedback  <ChatOutlinedIcon /></h1>
           
            <p>Berätta gärna om din upplevelse för oss</p>
             <FeddbackButtonWrapper>
                <FeedbackButton id="negativ" onClick={handleFeedback}>
                    <p>Missnöjd</p>
                    <SentimentDissatisfiedOutlinedIcon  style={{fontSize: 40}} />
                </FeedbackButton>
                <FeedbackButton id="positiv" onClick={handleFeedback}>
                    <p>Nöjd</p>
                    <SentimentSatisfiedOutlinedIcon  style={{fontSize: 40}} />
                </FeedbackButton>
            </FeddbackButtonWrapper>
            <TextArea 
            name="feedback" 
            onChange={handleTextArea}
            placeholder="Lämna feedback här:"
            labelName="Kommentar (valfritt)" 
            />
        </FeedbackContainer>
    )
}

export default FeedbackCard;