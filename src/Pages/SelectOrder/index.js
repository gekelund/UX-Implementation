import React, {useContext, useEffect} from 'react';
import SoupCard from '../../Components/SoupCard';
import { StateContext } from '../../StateContext';
import styled from "styled-components";
import tw from "tailwind.macro";
import { soups } from '../../Components/SoupCard/Soups';
import TopBar from '../../Components/TopBar';
import { useHistory } from 'react-router-dom';
import LandingPage from '../LandingPage';


const SelectOrder = () => {
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

    const handleDelete = (e) => {
        const newSoupe = soupe.filter( soup => Number(soup.ref) !== Number(e.target.closest('tr').id))
        updateState({soupe: newSoupe});
        updateState({quantity: quantity - 1})
        updateState({totalPris: totalPris - Number(e.target.closest('tr').childNodes[2].innerHTML)})
   }

    return (
        <div>
            <TopBar number={quantity} totalpris={totalPris} soupeList={soupe} handleDelete={handleDelete} />
          
            
        </div>
    )
}

export default SelectOrder;