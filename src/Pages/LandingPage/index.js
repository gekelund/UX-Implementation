import React from 'react';
import SoupCard from '../../Components/SoupCard';

import styled from "styled-components";
import tw from "tailwind.macro";

const LandingStyling = styled.div.attrs({
    className: "w-full h-screen flex flex-column flex-wrap mt-32 justify-center",
  })`
    & {
        main {
            ${tw`w-full h-auto text-center m-6`}
        }
        h1 {
            ${tw`font-sans text-4xl font-semibold text-4xl text-gray-700`}
        }
        h3 {
            ${tw`font-sans text-xl font-normal text-xl text-gray-600`}
        }
    }
  `;

 const handleButton = (e) => {
     console.log(e.target)
 }

 const handlePic = (e) => {
     console.log(e.target)
 }

 const handleInfo = (e) => {
    console.log(e.target)
}

const LandingPage = () => {

    return (
        <LandingStyling>
            <main>
            <h1>Upptäck våra läckra soppor</h1>
            <h3>Alla soppor kommer med bröd och vispat smör</h3>
            <SoupCard onClickButton={handleButton} onClickPic={handlePic} onClickInfoIcon={handleInfo} />
            </main>
        </LandingStyling>
    )
}

export default LandingPage;