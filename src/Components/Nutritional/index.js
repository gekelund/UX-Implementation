import React from 'react';
import { soups } from '../SoupCard/Soups';

const Nutritionl = () => {

    console.log(soups.map(({nutritionl})=> nutritionl.map(soup => Object.values(soup))))
    return (
        <div>
            <h2>Nutritionl</h2>
            {soups.map(({nutritionl}) => 
                <>
                <p>{Object.keys(nutritionl)}</p>
                </>
                )}
        </div>
    )
}

export default Nutritionl;