import React from 'react';
import { soups } from './Soups';

const SoupCard = () => {

    return (
        <div>
            {soups.map((soup) => 
                <div style={{border: "2px solid red"}}>
                    <p>{soup.image}</p>
                    <p>{soup.infoText}</p>
                </div>
                )}
            Title + info icon
            text about the soup + +1 button
            icon time + time + prize

        </div>
    )
}

export default SoupCard;