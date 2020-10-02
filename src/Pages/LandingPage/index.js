import React, {useContext, useState} from 'react';
import SoupCard from '../../Components/SoupCard';
import { StateContext } from '../../StateContext';

import styled from "styled-components";
import tw from "tailwind.macro";
import { soups } from '../../Components/SoupCard/Soups';
import TopBar from '../../Components/TopBar';

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

 

const LandingPage = () => {

    const { state, updateState } = useContext(StateContext);
    const [ num, setNum ] = useState(0);
    const [ totPris, setTotPris ] = useState(0);
    const { soupe } = state;
    

    const handleButton = (e) => {
        soups.map(soup => {
           if(soup.title === e.target.closest("section").id){
                updateState(soupe.push({soupe: soup.title, pris: soup.pris}))
                setNum(num + 1)
                setTotPris(Number(totPris) + Number(soup.pris))
            };
        });
    }
   
    const handlePic = (e) => {
        console.log(e.target)
    }
   
    const handleInfo = (e) => {
       console.log(e.target)
   }

   const handleDelete = (e) => {
        console.log(e.target)
   }

   console.log(soupe)

    return (
        <LandingStyling>
            <TopBar number={num} totalpris={totPris} soupeList={soupe} handleDelete={handleDelete} />
            <main>
            <h1>Upptäck våra läckra soppor</h1>
            <h3>Alla soppor kommer med bröd och vispat smör</h3>
            <SoupCard onClickButton={handleButton} onClickPic={handlePic} onClickInfoIcon={handleInfo} />
            </main>
        </LandingStyling>
    )
}

export default LandingPage;