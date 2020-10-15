import React, {useContext, useEffect} from 'react';
import SoupCard from '../../Components/SoupCard';
import { StateContext } from '../../StateContext';
import styled from "styled-components";
import tw from "tailwind.macro";
import { soups } from '../../Components/SoupCard/Soups';
import TopBar from '../../Components/TopBar';
import { useHistory } from 'react-router-dom';

const LandingStyling = styled.div.attrs({
    className: "w-full h-screen flex flex-column flex-wrap mt-32 pb-32 justify-center",
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
    const { soupe, quantity, totalPris, ref } = state;
    const history = useHistory();

    useEffect(() => {
        let State = JSON.parse(localStorage.getItem("State"))
        updateState(State);
    },[])

    useEffect(() => {
        localStorage.setItem('State', JSON.stringify(state));
    }, [state])

    const handleButton = (e) => {
        soups.map(soup => {
           if(soup.title === e.target.closest("section").id){
                updateState(soupe.push({soupe: soup.title, pris: soup.pris, ref: ref, special: false}));
                updateState({quantity: quantity + 1});
                updateState({ref: ref + 1});
                updateState({totalPris: Number(totalPris) + Number(soup.pris)});
            } 
        });
    }
   
   
   

   const handleDelete = (e) => {
        const newSoupe = soupe.filter( soup => Number(soup.ref) !== Number(e.target.closest('tr').id))
        updateState({soupe: newSoupe});
        updateState({quantity: quantity - 1})
        updateState({totalPris: totalPris - Number(e.target.closest('tr').childNodes[2].innerHTML)})
   }
  


    return (
        <LandingStyling>
            <TopBar number={quantity} totalpris={totalPris} soupeList={soupe} handleDelete={handleDelete} />
            <main>
                <h1>Upptäck våra läckra soppor</h1>
                <h3>Alla soppor kommer med bröd och vispat smör</h3>
                <SoupCard onClickButton={handleButton} stateSoup={ref}/>
            </main>
        </LandingStyling>
    )
}

export default LandingPage;