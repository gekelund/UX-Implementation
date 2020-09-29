import React from 'react';
import { soups } from './Soups';

const SoupCard = () => {

    return (
        <div>
            {soups.map((soup) => 
                <div style={{border: "2px solid red"}}>
                    <div>
                        <p>{soup.image}</p>
                    </div>
                    <div>
                        <p>{soup.infoText}</p>
                    </div>
                </div>
                )}
            Title + info icon
            text about the soup + +1 button
            icon time + time + prize

        </div>
    )
}

export default SoupCard;