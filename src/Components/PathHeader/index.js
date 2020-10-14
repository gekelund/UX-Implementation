import React, {useContext} from 'react';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import styled from "styled-components";
import tw from "tailwind.macro";
import PathStep from './pathStep';
import {StepContext} from '../../Pages/Wizard/wizardContext';

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




const PathHeader = ({handleDeliveryInfo, handleOverview, handleConfirmation, handlePay}) => {
   const {stepState} = useContext(StepContext);

   const {steps} = stepState;
console.log(steps)
    return (
        <PathHeaderStyling>
            <nav>
                <PathStep style={steps[0].access ? {backgroundColor: "green"} : {}} id={0} onClick={handleDeliveryInfo} icon={<EmailOutlinedIcon />} stepLabel="Leveransinfo" />
                <RemoveOutlinedIcon />
                <PathStep style={steps[1].access ? {backgroundColor: "green"} : {}} id={1} onClick={handleOverview} icon={<ListOutlinedIcon />} stepLabel="Orderöversikt" />
                <RemoveOutlinedIcon />
                <PathStep style={steps[2].access ? {backgroundColor: "green"} : {}} id={2} onClick={handlePay} icon={<PaymentOutlinedIcon />} stepLabel="Betalning" />
                <RemoveOutlinedIcon />
                <PathStep style={steps[3].access ? {backgroundColor: "green"} : {}} id={3} onClick={handleConfirmation} icon={<CheckCircleOutlineOutlinedIcon />} stepLabel="Bekräftelse" />
            </nav>
        </PathHeaderStyling>
    )
}

export default PathHeader;