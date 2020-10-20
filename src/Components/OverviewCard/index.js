import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import {Link} from 'react-router-dom';

const OverviewCardStyling = styled.div.attrs({
    className: "w-full h-screen",
  })`
    & {
        table {
            ${tw`w-auto h-auto m-4 shadow-overviewCard rounded-md bg-white p-4 flex flex-col justify-center items-center`}
                thead {
                    ${tw`w-full pt-4 flex flex-col items-center font-semibold`}
                    
                }
                tbody {
                    ${tw`w-full p-8`}
                        tr {
                            ${tw` border-b-2 border-gray-300`}
                                th {
                                    ${tw`border-b-2 p-4 text-normal`}
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
    }
  `;

const OverviewCard = ({soups}) => {
    

    const antalNormal = soups.filter(soup => soup.soupe && !soup.special);
    const antalSpecial = soups.filter(soup => soup.soupe && soup.special);
    
    const normalSoups = antalNormal.map(soup => soup.soupe);
    const specialSoupe = antalSpecial.map(soup => soup.soupe);

    const AntalNormalSoups = {};
    const AntalSpecialSoups = {};

    const AntalFunction = (listSoups, listAntal) => {
       return listSoups.forEach(function(i) { listAntal[i] = (listAntal[i]||0) + 1;});
    } 
   
    AntalFunction(normalSoups, AntalNormalSoups);
    AntalFunction(specialSoupe, AntalSpecialSoups);

    console.log("Normal", antalNormal, "special", antalSpecial)

    const filteredNormalSoups = soups.filter((item, index) => normalSoups.indexOf(item.soupe) === index);
    
    const filteredSpecialSoups = soups.filter((item) => item.special)
    console.log(filteredSpecialSoups)

    return (
        <OverviewCardStyling>
            <table>
                <thead>
                    <ListAltOutlinedIcon style={{fontSize: 40}} />
                    Beställningöversikt
                </thead>
                    <tbody>
                        <tr>
                            <th>Soppa</th>
                            <th>Antal</th>
                            <th>Ändra</th>
                            
                        </tr>
                    {filteredSpecialSoups ? filteredSpecialSoups.map(soups => (
                        <tr id={soups.ref}> 
                            <td>{soups.soupe}<br />{soups.special ?  <h5><i>Special: {soups.special.substring(0, 20)}...</i></h5> : ""} </td>
                            <td>{AntalSpecialSoups[soups.soupe]}</td>
                            <td><Link to={`/edit/${soups.soupe}${soups.ref}`}><EditOutlinedIcon /></Link></td>
                            {/* <td><DeleteOutlinedIcon onClick={handleDelete} fontSize="large" style={{color: "red"}} /></td> */}
                        </tr>
                    )) : 
                        ""}   
                    {filteredNormalSoups ? filteredNormalSoups.map(soups => (
                        <tr id={soups.ref}> 
                            <td>{soups.soupe}<br />{soups.special ?  <h5><i>Special: {soups.special.substring(0, 20)}...</i></h5> : ""} </td>
                            <td>{AntalNormalSoups[soups.soupe]}</td>
                            <td><Link to={`/edit/${soups.soupe}${soups.ref}`}><EditOutlinedIcon /></Link></td>
                            {/* <td><DeleteOutlinedIcon onClick={handleDelete} fontSize="large" style={{color: "red"}} /></td> */}
                        </tr>
                    )) : 
                        ""
                        }
                        
                </tbody>
            </table>
        </OverviewCardStyling>
    )
}

export default OverviewCard;