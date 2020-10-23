import React, { useContext, useRef, useEffect, useState } from 'react';
import { StateContext } from '../../StateContext';
import { soups } from '../../Components/SoupCard/Soups';
import styled from "styled-components";
import tw from "tailwind.macro";
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useHistory } from 'react-router-dom';


const EditStyling = styled.div.attrs({
    className: "w-full h-screen flex flex-col pb-32 items-center justify-center items-center bg-gray-100",
  })`
    & {
        header {
            ${tw`w-3/4 md:w-max h-auto text-center flex flex-col justify-center`}
        } 
        main {
            ${tw`flex md:w-max flex-wrap items-center justify-center w-3/4`}
        }
        footer {
            ${tw`flex md:w-max flex-wrap items-center justify-center w-3/4`}
        }
        h1 {
            ${tw`font-sans p-2 font-semibold text-4xl text-gray-700 border-b-2`}
        }
        h3 {
            ${tw`font-sans p-4 text-lg font-bold text-gray-800`}
        }
        h4 {
            ${tw`font-sans p-2 text-normal font-semibold text-gray-900`}
        }
        section {
            ${tw`flex flex-col justify-center items-center shadow-lg rounded-lg m-4 p-8 w-48 bg-white`}
        }
        div {
            ${tw`flex flex-row justify-center items-center text-sm text-gray-700`}
        }
        div#textarea {
            ${tw`flex-col text-center shadow-lg rounded-lg m-8 pt-6 pb-6 pl-2 pr-2 w-full h-36 bg-white`}
        }
        textarea {
            ${tw` w-11/12 h-20 m-4 shadow-inner resize-none rounded p-2 bg-gray-100`}
        }
        table {
            ${tw`text-sm text-gray-700`}
        }
        label {
            ${tw`flex justify-between w-full items-end text-lg font-semibold pr-4 pl-4`}
        }
        button {
            ${tw`shadow-md bg-green-500 hover:bg-green-600 text-white w-40 font-bold py-2 px-4 rounded`}
        }
        img {
            ${tw` w-full`}
        }
    }
  `;

const EditPage = ({ match }) => {
    const { state, updateState } = useContext(StateContext);
    const {soupe, ref, quantity, totalPris} = state;
    const { params } = match;
    const textareaRef = useRef(null);
    const editSoups =  soups.find(soup => params.soupID.includes(soup.id));
    const [addNew, setAddNew] = useState(false);
    const [updateSoup, setUpdateSoup] = useState(false);
    const history = useHistory();
    const findSoup = params.soupID.match((/\d+/)) !== null && params.soupID.match((/\d+/)[0]) ? soupe.find(soup => soup.ref === Number(params.soupID.match(/\d+/)[0])) : false; 
  
   if(findSoup !== undefined) {
    console.log(findSoup.special)
}
    useEffect(() => {
        
        let State = JSON.parse(localStorage.getItem("State"))
        updateState(State);
      
    },[])

    useEffect(() => {
        localStorage.setItem('State', JSON.stringify(state));
        if(addNew) {
            history.push('/')
        }
        if(updateSoup) {
            history.push(`/wizard`)
        }
    }, [state, addNew, updateSoup, history, soupe])
    
    const handleOrder = () => {
        
        
        if(findSoup) {
            console.log(findSoup.special)
            findSoup.special = textareaRef.current.value
            updateState({soupe : [...soupe]})
            setUpdateSoup(true);
        } else {
        const newSoup = soups.find(soup => soup.title === params.soupID);
                updateState(soupe.push({soupe: newSoup.title, pris: newSoup.pris, ref: ref, special: textareaRef.current.value}));
                updateState({quantity: quantity + 1});
                updateState({ref: ref + 1})
                updateState({totalPris: Number(totalPris) + Number(newSoup.pris)});
            setAddNew(true);
    }
}



    return (
        <EditStyling>
            {editSoups ? 
            <>
            <header>
                <img src={editSoups.image} alt={editSoups.title} />
                <h1>{editSoups.title}</h1>
                <h3>Pris: {editSoups.pris} kr</h3>
            </header>
            <main>
            <section>
                <ListAltOutlinedIcon style={{fontSize: 30, color: "green"}} />
                <h4>Ingredienser</h4>
                <div>
                    {editSoups.ingredienser.map(item => 
                        `${item}, `
                    )}
                </div>
            </section>
            <section>
                <FavoriteBorderIcon style={{fontSize: 30, color: "red"}} />
                <h4>Näringsinnehåll</h4>
            <table>
                {editSoups.nutritionl.map(item => 
                <>
                <tbody>
                    <tr>
                        <td>Kalorier:</td>
                        <td>{item.Kalorier}</td>
                    </tr>
                    <tr>
                        <td>Protoin:</td>
                        <td>{item.Protoin}</td>
                    </tr>
                    <tr>
                        <td>Fett:</td>
                        <td>{item.Fett}</td>
                    </tr>
                    <tr>
                        <td>Socker:</td>
                        <td>{item.Socker}</td>
                    </tr>
                </tbody>
                </>
                )}
            </table>
            </section>
            </main>
            <footer>
                <div id="textarea">
                    <label>
                        Meddela köket
                        <ErrorOutlineIcon style={{fontSize: 30}} />
                    </label>
                    <textarea defaultValue={findSoup ? findSoup.special : ""} ref={textareaRef} name="special" placeholder="T.ex Allergisk mot nötter" />
                </div>
                <button onClick={handleOrder}>{findSoup ? 'Uppdatera' : 'Lägg till'}</button>
            </footer>
            </>
            :
            <p>Loading...</p>
            }
        </EditStyling>
    )
}

export default EditPage;