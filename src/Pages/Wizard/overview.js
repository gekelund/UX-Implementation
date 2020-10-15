import React, {useContext} from 'react';
import { StateContext } from '../../StateContext';
import styled from "styled-components";
import tw from "tailwind.macro";
import OverviewCard from '../../Components/OverviewCard';

const OverviewStyling = styled.div.attrs({
    className: "w-full h-screen flex justify-center",
  })`
    & {
        div {
            ${tw`w-full bg-white mt-32 mb-48 text-center text-gray-800 flex flex-col items-center`}
        }
        table {
            ${tw`w-max h-auto m-4 bg-white`}
        }
        tbody {
            ${tw`w-full flex flex-col items-start bg-white`}
        }
        td {
            ${tw`p-4 w-full `}
        }
        tr {
            ${tw`w-full text-left`}
        }
        th {
            ${tw`w-full`}
        }
        
    }
  `;

const Overview = () => {
    const { state } = useContext(StateContext);
    const { deliveryinfo, soupe } = state;

  

    return (
        <OverviewStyling>
            <div>
            <OverviewCard soups={soupe}/>
            </div>
           
        </OverviewStyling>
    )
}

export default Overview;