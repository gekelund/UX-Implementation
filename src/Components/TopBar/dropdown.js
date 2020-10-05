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
            ${tw`w-full border-collapse ml-4 mt-2 mb-2`}
        }
        th {
            ${tw`p-2 text-left border-b-2`}
        }
        td {
            ${tw`p-2 text-left`}
        }
    }
  `;

const Dropdown = ({soupeList, handleDelete}) => {

    return (
        <DropdownStyling>
            <section>
                <table>
                    <tr>
                        <th>Soppa</th>
                        <th>Pris</th>
                        <th>Ta bort</th>
                    </tr>
                {soupeList ? soupeList.map(soups => (
                     <tr>
                        <td>{soups.soupe}</td>
                        <td>{soups.pris}</td>
                        <td><DeleteOutlinedIcon onClick={handleDelete} fontSize="large" style={{color: "red"}} /></td>
                    </tr>
                )) : 
                    ""
                    } 
              </table>
            </section>
        </DropdownStyling>
    )
}

export default Dropdown;