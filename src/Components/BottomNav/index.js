import React, {useContext, useState} from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import { Link, useLocation, useHistory, NavLink} from 'react-router-dom';
import { StateContext } from '../../StateContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { FirebaseContext } from '../../Firebase/FirebaseContext';
import { UserContext } from '../../Firebase/UserContext';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ProfileMenu from './profileMenu';

const BottomNavStyle = styled.div.attrs({
    className: "w-full h-16 fixed bottom-0 left-0 right-0 bg-green-400",
  })`
    & {
        nav {
            ${tw`w-full h-full flex justify-between pl-4 pr-4 items-center text-center`}
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



const BottomNav = ( ) => {
    const firebase = useContext(FirebaseContext);
    const user = useContext(UserContext);
    const { state, updateState } = useContext(StateContext);
    const { quantity } = state;
    const location = useLocation();
    const history = useHistory();
    const {orderId} = state;
    const [open, setOpen] = useState(false);

    const handleToPay = () => {
        if(user && !orderId) {
        const createOrder = async () => {
            let userId = user?.uid;
            const db = firebase.firestore();
                const { id } = await db.collection('orders').add(state);
                updateState({orderId: id});
                await db.doc(`users/${userId}`).update({
                orders: firebase.firestore.FieldValue.arrayUnion(id),
            });
             history.push(`/wizard`);
        }
        createOrder();
    } else if (user && orderId){
        history.push(`/wizard`)
    } else history.push("/signin")

    }
   
    const handleProfil = () => {
        setOpen(!open);
    }

    const handleSignout = () => {
        setOpen(!open);
        history.push('/');
    }

    return (
        <BottomNavStyle>
            <ProfileMenu user={user} open={open} handleSignout={handleSignout} />
            <nav>
                <div onClick={handleProfil}>
                        <PersonOutlineOutlinedIcon style={{fontSize: "35", color: "white"}} />
                        <p>Profil</p>
                </div>
                <div>
                    <Link style={{textDecoration: "none"}} to="/support">
                        <ContactSupportOutlinedIcon style={{fontSize: "35", color: "white"}} />
                        <p>Support</p>
                    </Link>
                </div>
              
                <div>
                    <NavLink style={{textDecoration: "none"}} to="/">
                        <RestaurantMenuOutlinedIcon style={{fontSize: "35", color: "white"}} />
                        <p>Meny</p>
                    </NavLink>
                </div>
                {quantity && quantity > 0 && location.patname !== "/wizard" ? 
                    <button onClick={handleToPay}>
                        <ShoppingCartOutlinedIcon /> Gå till kassa
                    </button>
                    : ""
                    }
            </nav>
        </BottomNavStyle>
    )
}

export default BottomNav;