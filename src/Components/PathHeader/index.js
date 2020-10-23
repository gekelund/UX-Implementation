import React from 'react';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import styled from "styled-components";
import tw from "tailwind.macro";
import PathStep from './pathStep';


const PathHeaderStyling = styled.div.attrs({
    className: "w-full h-24 fixed top-0 left-0 flex justify-center items-center",
  })`
    & {
        nav {
            ${tw`w-pathHeadMax h-full flex justify-between items-center ml-16 mr-16`}
        }
        div {
            ${tw`flex flex-col justify-center items-center`}
        }
        p {
            ${tw`font-sans font-normal text-xs text-gray-800`}
        }
        span {
            ${tw`w-12 h-12 mb-1 bg-gray-400 rounded-full flex justify-center text-white items-center`}
        }
    }
  `;




const PathHeader = ({completed, steps, handleDeliveryInfo, handleOverview, handlePay }) => {
  

    return (
        <PathHeaderStyling>
            <nav>
                <PathStep 
                    style={!completed ? steps[0].access || steps[0].completed ? {backgroundColor: "green"} : {} : {backgroundColor: "green"}} 
                    id={0} 
                    icon={<EmailOutlinedIcon />} 
                    stepLabel="Leveransinfo" 
                    onClick={handleDeliveryInfo}
                    />
                <RemoveOutlinedIcon />
                <PathStep 
                    style={!completed ? steps[1].access || steps[1].completed ? {backgroundColor: "green"} : {} : {backgroundColor: "green"}} 
                    id={1} 
                    icon={<ListOutlinedIcon />} 
                    stepLabel="Orderöversikt" 
                    onClick={handleOverview}
                    />
                <RemoveOutlinedIcon />
                <PathStep 
                    style={!completed ? steps[2].access || steps[2].completed ? {backgroundColor: "green"} : {} : {backgroundColor: "green"}} 
                    id={2} 
                    icon={<PaymentOutlinedIcon />} 
                    stepLabel="Betalning" 
                    onClick={handlePay}
                    />
                <RemoveOutlinedIcon />
                <PathStep  
                    style={completed ? {backgroundColor: "green"} : {}}
                    id={3} 
                    icon={<CheckCircleOutlineOutlinedIcon />} 
                    stepLabel="Bekräftelse" 
                    />
            </nav>
        </PathHeaderStyling>
    )
}

export default PathHeader;