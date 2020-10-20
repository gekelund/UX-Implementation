import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';



const DropdownStyling = styled.div.attrs({
    className: "w-full h-auto flex flex-column justify-center bg-white",
  })`
    & {
        section {
            ${tw`w-full h-full text-center bg-white`}
        }
        table {
            ${tw`w-full md:w-maxDropdown border-collapse ml-4 mt-2 mb-2 `}
        }
        th {
            ${tw` p-2 text-left border-b-2`}
        }
        td {
            ${tw` p-2 text-left`}
        }
        h5 {
            ${tw` text-left text-xs`}
        }
        
    }
  `;

const Dropdown = ({soupeList, handleDelete}) => {

    const antalNormal = soupeList.filter(soup => soup.soupe && !soup.special);
    const antalSpecial = soupeList.filter(soup => soup.soupe && soup.special);
    
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

    const filteredNormalSoups = soupeList.filter((item, index) => normalSoups.indexOf(item.soupe) === index);
    
    const filteredSpecialSoups = soupeList.filter((item) => item.special)
    console.log(filteredSpecialSoups)
    
    
    return (
        <DropdownStyling>
            <section>
                <table>
                    <tbody>
                        <tr>
                            <th>Soppa</th>
                            <th>Antal</th>
                            <th>Pris</th>
                            <th>Ta bort</th>
                        </tr>
                    {filteredSpecialSoups ? filteredSpecialSoups.map(soups => (
                        <tr id={soups.ref}> 
                            <td>{soups.soupe}<br />{soups.special ?  <h5><i>Special: {soups.special.substring(0, 20)}...</i></h5> : ""} </td>
                            <td>{AntalSpecialSoups[soups.soupe]}</td>
                            <td key="pris">{soups.pris}</td>
                            <td><DeleteOutlinedIcon onClick={handleDelete} fontSize="large" style={{color: "red"}} /></td>
                        </tr>
                    )) : 
                        ""}   
                    {filteredNormalSoups ? filteredNormalSoups.map(soups => (
                        <tr id={soups.ref}> 
                            <td>{soups.soupe}<br />{soups.special ?  <h5><i>Special: {soups.special.substring(0, 20)}...</i></h5> : ""} </td>
                            <td>{AntalNormalSoups[soups.soupe]}</td>
                            <td key="pris">{soups.pris}</td>
                            <td><DeleteOutlinedIcon onClick={handleDelete} fontSize="large" style={{color: "red"}} /></td>
                        </tr>
                    )) : 
                        ""
                        }
                        
                </tbody>
              </table>
            </section>
        </DropdownStyling>
    )
}

export default Dropdown;