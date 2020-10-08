import React, { useContext, useEffect } from 'react';
import Ingredienser from '../../Components/Ingredienser';
import Nutritionl from '../../Components/Nutritional';
import { StateContext } from '../../StateContext';

const EditPage = () => {
    const { state, updateState } = useContext(StateContext);

    useEffect(() => {
        let State = JSON.parse(localStorage.getItem("State"))
        updateState(State);
    },[])

console.log(state)

    return (
        <div>
            EditPage
            <p>Soup Image</p>
            <p>Pris</p>
            <Ingredienser />
            <Nutritionl />
            <p>Meddela köet (text input)</p>
            <p>Lägg till knapp</p>
        </div>
    )
}

export default EditPage;