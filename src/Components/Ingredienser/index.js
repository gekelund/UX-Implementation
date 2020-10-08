import React from 'react';
import { soups } from '../SoupCard/Soups';

const Ingredienser = () => {

    return (
        <div>
            <h2>Ingredienser</h2>
            {soups.map(({ingredienser}) => 
                <>
                <p>{ingredienser}</p>
                </>
                )}
        </div>
    )
}

export default Ingredienser;