import React from 'react';
import SoupCard from '../../Components/SoupCard';

import styled from "styled-components";
import tw from "tailwind.macro";

const LandingStyling = styled.div.attrs({
    className: "w-full h-screen flex flex-col flex-wrap items-center justify-center",
  })`
    & {
        main {
            ${tw`shadow-lg m-6 p-5 h-auto flex flex-wrap flex-col items-center justify-center rounded-md`}
        }
        
       
    }
  `;

 

const LandingPage = () => {

    return (
        <LandingStyling>
            <main>
            <h1>LandingPage</h1>
            <SoupCard />
            </main>
        </LandingStyling>
    )
}

export default LandingPage;