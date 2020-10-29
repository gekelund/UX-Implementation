import React from 'react';
import styled from 'styled-components';
import SignOut from '../SignOut';


const ProfileSection = styled.section`
    position: fixed;
    bottom: 4rem;
    left: 1rem;
    width: auto;
    min-height: 100px;
    background-color: white;
    border-radius: 10px;

    ul {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    li {
        cursor: pointer;
    }
`;

const ProfileMenu = ({user, open, handleSignout}) => {
    

    return (
        <ProfileSection style={open ? {display: "block"} : {display: "none"}}>
        {user ? 
        <ul>
            <li onClick={handleSignout}><SignOut /></li>
        </ul>
        : "Inte inloggad"}
      </ProfileSection>
    )
}

export default ProfileMenu;

