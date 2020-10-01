import React from 'react';
import { soups } from './Soups';
import SoupCardStyles from './styles';

const SoupCard = () => {

    return (
        <SoupCardStyles>
            {soups.map((soup) => 
                <main>
                  <h4>{soup.image}</h4>
                  <div>
                    <h2>{soup.title}</h2>
                    <h5>Info icon</h5>
                  </div>
                  <div>
                    <p>{soup.infoText}</p>
                    <button>+1</button>
                  </div>
                  <div style={{border: "none"}}>
                      <h5>Time</h5>
                      <h5>pris</h5>
                  </div>
                </main>
                )}
          

        </SoupCardStyles>
    )
}

export default SoupCard;