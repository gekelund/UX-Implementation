import React from 'react';
import { soups } from './Soups';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from 'react-router-dom';

const SoupCardStyles = styled.div.attrs({
    className: "w-full h-auto flex flex-row flex-wrap items-center justify-center",
    
})`
    & {
        section {
            ${tw`bg-white text-left shadow-lg m-6 p-6 w-64 h-soupcardheight flex-initial flex-col items-center justify-center rounded-md`}
        }
        div {
            ${tw`w-11/12 flex justify-between items-center border-solid border-b border-t-0 border-r-0 border-l-0 border-gray-600 `}
        }
        div#footer {
            ${tw`w-11/12 flex justify-between items-center border-none`}
        }
        p {
            ${tw`text-gray-700 text-xs w-8/12 p-1`}
        }
        h2 {
            ${tw`text-lg font-semibold m-1 ml-0 text-gray-900 `}
        }
        h5 {
          ${tw`text-sm font-semibold mt-5 text-gray-900 `}
      }
        button {
            ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded`}
        }
        img {
            ${tw`mb-4`}
        }
    }
  `;

const SoupCard = ({onClickButton}) => {

    return (
        <SoupCardStyles>
            {soups.map((soup) => 
                <section id={soup.id}>
                  <Link to={`/edit/${soup.id}`}><img src={soup.image} alt={soup.title} /></Link> 
                  <div>
                    <h2>{soup.title}</h2>
                    <Link style={{textDecoration: "none", color: "black"}} to={`/edit/${soup.id}`}><InfoOutlinedIcon /></Link>
                  </div>
                  <div>
                    <p>{soup.infoText}</p>
                    <button onClick={onClickButton}>+1</button>
                  </div>
                  <div id="footer">
                      <h5><QueryBuilderOutlinedIcon /> 30min</h5>
                      <h5>Pris: {soup.pris} kr</h5>
                  </div>
                </section>
                )}
          

        </SoupCardStyles>
    )
}

export default SoupCard;