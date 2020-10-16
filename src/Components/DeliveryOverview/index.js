import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';
import {Link} from 'react-router-dom';


const DeliveryOverviewCardStyling = styled.div.attrs({
    className: "w-full h-screen",
  })`
    & {
        table {
            ${tw`w-auto h-auto m-4 shadow-overviewCard rounded-md bg-white p-4 flex flex-col justify-center items-center`}
                thead {
                    ${tw`w-full pt-4 border-b-2 border-gray-400 pb-4 flex flex-col items-center font-semibold `}
                    
                }
                tbody {
                    ${tw`w-full pl-8 pr-8 pb-8`}
                        tr {
                            ${tw` `}
                                td {
                                    ${tw` text-sm pr-10`}
                                    h5 {
                                        ${tw`text-italic text-gray-500`}
                                    }
                                }
                            }
                        }
                tfoot {
                    ${tw`w-full border-t-2 border-gray-400 p-4`}
                        tr {
                            ${tw``}
                           
                        }
                }
        }
    }
  `;

const DeliveryOverviewCard = ({deliveryinfo}) => {
    console.log(deliveryinfo)
    
    return (
        <DeliveryOverviewCardStyling>
            <table>
                <thead>
                    <DirectionsBikeOutlinedIcon style={{fontSize: 40}} />
                    Leveransöversikt
                </thead>
                    <tbody>
                    {deliveryinfo ?
                        <>
                        <tr> 
                            <td>Namn</td>
                            <td>{deliveryinfo.Namn}</td>
                        </tr>
                        <tr>
                            <td>Adress</td>
                            <td>{deliveryinfo.Adress}</td>
                        </tr>
                        <tr>
                            <td>Postnummer</td>
                            <td>{deliveryinfo.Postnummer}</td>
                        </tr>
                        <tr>
                            <td>Ort</td>
                            <td>{deliveryinfo.Ort}</td>
                        </tr>
                        <tr>
                            <td>Telefon</td>
                            <td>{deliveryinfo.Telefon}</td>
                        </tr>
                        <tr>
                            <td>Levernassätt</td>
                            <td>{deliveryinfo.leveranstyp}</td>
                        </tr><tr>
                            <td>Levernasdag / tid</td>
                            <td>{deliveryinfo.leveransdatum}</td>
                            <td>{deliveryinfo.levernastid}</td>
                        </tr>
                        </>
                     : ""}
                        
                </tbody>
                <tfoot>
                    <tr>
                        <th>Levernasmeddelande</th>
                    </tr>
                    <tr>
                        <td>{deliveryinfo.leveransmeddelande}</td>
                    </tr>
                    <tr>
                        <th>Hälsning</th>
                    </tr>
                    <tr>
                        <td>{deliveryinfo.greeting}</td>
                    </tr>
                </tfoot>
            </table>
        </DeliveryOverviewCardStyling>
    )
}

export default DeliveryOverviewCard;