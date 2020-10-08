import React, {useContext} from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import { Link } from 'react-router-dom';
import { StateContext } from '../../StateContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { FirebaseContext } from '../../Firebase/FirebaseContext';
import { UserContext } from '../../Firebase/UserContext';

const BottomNavStyle = styled.div.attrs({
    className: "w-full h-16 fixed bottom-0 left-0 right-0 bg-green-400",
  })`
    & {
        nav {
            ${tw`w-full h-full flex justify-between md:justify-start pl-4 pr-4 items-center text-center`}
        }
        div {
            ${tw`w-24 h-full flex-col items-center justify-center flex `}
        }
        p {
            ${tw`font-sans font-normal text-xs text-white`}
        }
        button {
            ${tw`md:order-last md:ml-auto shadow-md bg-green-500 hover:bg-green-600 text-white w-40 font-bold py-2 px-4 rounded flex items-center justify-between`}
        }
    }
  `;


const BottomNav = () => {
    const firebase = useContext(FirebaseContext);
    /* const user = useContext(UserContext) */

    const { state, updateState } = useContext(StateContext);
    const { quantity } = state

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log(user)
        } else {
          console.log("not signed in")
        }
      });

    
    return (
        <BottomNavStyle>
            
            <nav>
                <div>
                    <Link style={{textDecoration: "none"}} to="/">
                        <ContactSupportOutlinedIcon style={{fontSize: "35", color: "white"}} />
                        <p>Support</p>
                    </Link>
                </div>
                {quantity && quantity > 0 ? <button><Link style={{color: "white", textDecoration: "none"}} to="/signin"> <ShoppingCartOutlinedIcon /> Gå till kassa</Link></button> : ""}
                <div>
                    <Link style={{textDecoration: "none"}} to="/">
                        <RestaurantMenuOutlinedIcon style={{fontSize: "35", color: "white"}} />
                        <p>Meny</p>
                    </Link>
                </div>
                
            </nav>
            
        </BottomNavStyle>
    )
}

export default BottomNav;