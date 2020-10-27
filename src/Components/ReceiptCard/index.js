/* import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";


const ReceiptCardStyling = styled.div.attrs({
    className: "w-full h-auto",
  })`
    & {
        table {
            ${tw`w-auto h-auto m-4 shadow-overviewCard rounded-md bg-white p-4 flex flex-col justify-center items-center border-b-2 border-gray-400`}
                thead {
                    ${tw`w-full pt-4 text-xs`}
                    
                }
                tbody {
                    ${tw`w-full p-8 border-b-2`}
                        tr {
                            ${tw` `}
                                th {
                                    ${tw`text-left`}
                                }
                                td {
                                    ${tw` text-xs pr-10`}
                                    h5 {
                                        ${tw`text-italic text-gray-500`}
                                    }
                                }
                            }
                        }
                    }
                tbody#footer {
                    ${tw`flex flex-col items-center`}
                    p {
                        ${tw`text-xs`}
                    }
                    h3 {
                        ${tw`text-lg font-semibold`}
                    }
                }
    }
  `;

const ReceiptCard = ({adress, ort, datum, tid, leveransMeddelande, antal, orderId, totaltPris}) => {

    return (
        <ReceiptCardStyling>
            <table>
                <thead>
                    <tr>
                        <th>Kvitto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Leveransinfo:</td>
                        <td></td>
                        <td><strong>{adress}</strong></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><strong>{ort}</strong></td>
                    </tr>
                    <tr>
                        <td>Datum:</td>
                        <td></td>
                        <td>{datum}</td>
                    </tr>
                    <tr>
                        <td>Tid:</td>
                        <td></td>
                        <td>{tid}</td>
                    </tr>
                    <tr>
                        <td>Meddelande:</td>
                        <td></td>
                        <td>{leveransMeddelande}</td>
                    </tr>
               
                    {antal.filteredSpecialSoups ? antal.filteredSpecialSoups.map(soups => (
                        <tr>
                            <td>Din order:</td>
                            <td>{antal.AntalSpecialSoups[soups.soupe]}</td>
                            <td>{soups.soupe}<br />{soups.special ?  <h5><i>Special: {soups.special.substring(0, 20)}...</i></h5> : ""} </td>
                        </tr>
                    )) : 
                        ""}   
                    {antal.filteredNormalSoups ? antal.filteredNormalSoups.map(soups => (
                        <tr>
                            <td></td>
                            <td>{antal.AntalNormalSoups[soups.soupe]}</td>
                            <td>{soups.soupe}<br />{soups.special ?  <h5><i>Special: {soups.special.substring(0, 20)}...</i></h5> : ""} </td>
                        </tr>
                    )) : 
                        ""
                        }
                       
                   </tbody>
                   <tbody id="footer">
                        <tr>
                            <td><p>orderId</p></td>
                        </tr>
                        <tr>
                            <td><p>{orderId}</p></td>
                        </tr>
                        <tr>
                            <td>Kvitto har skicakts till din angivna mail</td>
                        </tr>
                        <tr>
                            <td><h3>Total summa: {totaltPris} kr</h3></td>
                        </tr>
                    </tbody>
            </table>
        </ReceiptCardStyling>
    )
}

export default ReceiptCard; */

import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";


const ReceiptCardStyling = styled.div.attrs({
    className: "w-full h-auto",
  })`
    & {
        div {
         ${tw`flex flex-col justify-center bg-white pb-4 pr-12 pl-12 pt-4 rounded-md shadow-overviewCard mt-12`}   
            h2{
                ${tw`text-base text-gray-900 font-semibold pb-8`}
            }
            section#part1 {
                ${tw`flex w-full border-b-2`}
            
            ul {
                ${tw`w-full flex flex-col mb-10`}
                li {
                    ${tw`flex justify-between`}
                }
            }
        }
            section#part2 {
                ${tw`w-full flex flex-col justify-center mt-4`}
               
              p {
                  ${tw`text-center p-4 m-0`}
              }
              p#orderID {
                  ${tw`text-sm text-gray-600`}
              }
              p#totpris {
                  ${tw`text-lg font-semibold text-gray-900`}
              }
            }
    }
    }
  `;

const ReceiptCard = ({adress, ort, datum, tid, leveransMeddelande, antal, orderId, totaltPris}) => {

    return (
        <ReceiptCardStyling>
            <div>
                <h2>Kvitto</h2>
            <section id="part1">
            <ul>
                <li>
                    <p>Leveransinfo:</p>
                    <p><strong>{adress}</strong>
                    <br /><strong>{ort}</strong></p>
                </li>
                <li>
                    <p>Datum:</p>
                    <p>{datum}</p>
                </li>
                <li>
                    <p>Tid:</p>
                    <p>{tid}</p>
                </li>
                <li>
                    <p>Meddelande:</p>
                    <p>{leveransMeddelande}</p>
                </li>
                <li>
                    <p>Din order:</p>
                    {antal.filteredSpecialSoups ? antal.filteredSpecialSoups.map(soups => (
                        <p>
                            <span style={{paddingRight: "5px"}}>{antal.AntalSpecialSoups[soups.soupe]}</span>
                            <span>{soups.soupe}<br />{soups.special ?  <h5><i>Special: {soups.special.substring(0, 20)}...</i></h5> : ""} </span>
                        </p>
                    )) : 
                        ""}   
                    {antal.filteredNormalSoups ? antal.filteredNormalSoups.map(soups => (
                        <p id="soupNormal">
                           
                            <span style={{paddingRight: "10px"}}>{antal.AntalNormalSoups[soups.soupe]}</span>
                            <span>{soups.soupe}<br />{soups.special ?  <h5><i>Special: {soups.special.substring(0, 20)}...</i></h5> : ""} </span>
                        </p>
                    )) : 
                        ""
                        }
                </li>
            </ul>
            </section>
            <section id="part2">
              
                    <p id="orderID">orderId:<br />#{orderId}</p>
                    
                    <p>Kvitto har skickats till din angivna mail</p>
                    <p id="totpris">Total summa: {totaltPris} kr</p>
             
            </section>
            </div>
        </ReceiptCardStyling>
    )
}

export default ReceiptCard;