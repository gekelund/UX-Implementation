import React from 'react';
import styled from 'styled-components';
import tw from "tailwind.macro";
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import SwishIcon from '../../SoupImages/swish_logo_secondary_RGB.svg';
import MasterCardIcon from '../../SoupImages/mastercard.svg';

const PaymentCardStyling = styled.section.attrs({
    className: "w-full sm:w-3/5 md:3/5 lg:3/5 h-auto mt-12 pl-12 pr-12 pb-12 pt-4 bg-white shadow-overviewCard rounded flex flex-col items-center justify-center",
  })`
    & {
        span {
            ${tw`flex flex-col justify-center items-center p-4`}
            h3 {
                ${tw`font-semibold`}
            }
        }
        ul {
            ${tw`w-full h-auto bg-white text-center text-gray-800 pl-16 pr-16 flex flex-col items-center justify-center border-b-2 border-t-2 border-gray-400`}
            li {
                ${tw`w-full h-12 flex items-center shadow-lg rounded justify-center m-4 bg-gray-100`}
            }
        
        }  
    }
  `;


const PaymentCard = ({handleSwish, handleMastercard}) => {

    return (
        <PaymentCardStyling>
            <span>
            <CreditCardOutlinedIcon style={{fontSize: 35}} />
            <h3>Betalning</h3>
            </span>
           <ul>
               <li onClick={handleSwish}><img src={SwishIcon} alt="Swish" style={{width: "70%", height: "70%"}} /></li>
               <li onClick={handleMastercard}><img src={MasterCardIcon} alt="Mastercard" style={{width: "100%", height: "100%"}} /></li>
           </ul>
        </PaymentCardStyling>
    )
}

export default PaymentCard;