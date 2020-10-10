import React, { useContext } from 'react';
import { StateContext } from '../../StateContext';
import { soups } from '../../Components/SoupCard/Soups';

const EditPage = ({ match }) => {
    const { updateState } = useContext(StateContext);
    const { params } = match;

    const editSoups = soups.find(soup => soup.id === params.soupID)
    

    return (
        <div>
            EditPage
            
            <p>{editSoups.image}</p>
            <h1>{editSoups.title}</h1>
            <p>{editSoups.pris} kr</p>
            <section>
                {editSoups.ingredienser.map(item => 
                    <p>{item}</p>
                )}
            </section>
            <table>
                {editSoups.nutritionl.map(item => 
                <>
                <tr>
                    <td>Kalorier</td>
                    <td>{item.Kalorier}</td>
                </tr>
                <tr>
                    <td>Protoin</td>
                    <td>{item.Protoin}</td>
                </tr>
                <tr>
                    <td>Fett</td>
                    <td>{item.Fett}</td>
                </tr>
                <tr>
                    <td>Socker</td>
                    <td>{item.Socker}</td>
                </tr>
                </>
                )}
            </table>
            <p>Meddela köket (text input)</p>
            <p>Lägg till knapp</p>
        </div>
    )
}

export default EditPage;