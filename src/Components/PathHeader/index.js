import React from 'react';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import styled from "styled-components";
import tw from "tailwind.macro";

const PathHeaderStyling = styled.div.attrs({
    className: "w-full h-64 fixed top-0 left-0 flex justify-center items-center",
  })`
    & {
        nav {
            ${tw`w-full h-auto flex justify-between items-center ml-16 mr-16`}
        }
        div {
            ${tw`flex flex-col justify-center items-center`}
        }
        p {
            ${tw`font-sans font-normal text-xs text-gray-800`}
        }
        span {
            ${tw`w-12 h-12 mb-1 bg-gray-400 rounded-full border-solid border-2 border-gray-300 flex justify-center text-white items-center`}
        }
    }
  `;

const PathHeader = () => {

    return (
        <PathHeaderStyling>
            <nav>
                <div>
                    <span><EmailOutlinedIcon style={{fontSize: "34"}} /></span>
                    <p>Leveransinfo</p>
                </div>
                <RemoveOutlinedIcon />
                <div>
                    <span><ListOutlinedIcon style={{fontSize: "34"}} /></span>
                    <p>Orderöversikt</p>
                </div>
                <RemoveOutlinedIcon />
                <div>
                    <span><PaymentOutlinedIcon style={{fontSize: "34"}} /></span>
                    <p>Betalning</p>
                </div>
                <RemoveOutlinedIcon />
                <div>
                    <span><CheckCircleOutlineOutlinedIcon style={{fontSize: "34"}} /></span>
                    <p>Bekräftelse</p>
                </div>
            </nav>
        </PathHeaderStyling>
    )
}

export default PathHeader;