import React, { useState } from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Dropdown from './dropdown';

const TopBarStyling = styled.div.attrs({
    className: "w-full h-20 flex flex-column flex-wrap justify-center fixed top-0 left-0 bg-gray-100 border-b-2",
  })`
    & {
        nav {
            ${tw`w-full md:w-min h-full flex items-end justify-between md:mr-auto text-center pb-2 ml-4 mr-4`}
        }
        p {
            ${tw`font-sans font-semibold text-base text-gray-800 m-1`}
        }
        div {
            ${tw`flex items-center justify-center md:mr-4`}
        }
        span {
            ${tw`flex ml-2 items-center justify-center border-solid border-2 border-gray-600 w-8 h-8 rounded-full bg-white`}
        }
        section {
            ${tw`h-auto w-full`}
        }
    }
  `;

const TopBar = ({number, totalpris, soupeList, handleDelete}) => {
    const [ open, setOpen ] = useState(false);

    const handleDropdown = () => {
        setOpen(!open)
    }

    return (
        <TopBarStyling>
            <nav>
                <div>
                    <LocalMallOutlinedIcon fontSize="large" onClick={handleDropdown} />
                    <span><h4>{number}</h4></span>
                </div>
                <div>
                    <p>Totalt:</p>
                    <p>{totalpris} kr</p>
                </div>
            </nav>
            <section style={open ? {display: "block"} : {display: "none"}}>
                <Dropdown handleDelete={handleDelete} soupeList={soupeList} />
            </section>
        </TopBarStyling>
    )
}

export default TopBar;