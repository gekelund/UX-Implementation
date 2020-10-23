import React from 'react';
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
                    ${tw`w-full p-8`}
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
                        <td>{adress}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{ort}</td>
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
                            <td>orderId</td>
                        </tr>
                        <tr>
                            <td>{orderId}</td>
                        </tr>
                        <tr>
                            <td>Kvitto har skicakts till din angivna mail</td>
                        </tr>
                        <tr>
                            <td>Total summa: {totaltPris}</td>
                        </tr>
                    </tbody>
            </table>
        </ReceiptCardStyling>
    )
}

export default ReceiptCard;