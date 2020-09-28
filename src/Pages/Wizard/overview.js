import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { StateContext } from '../../StateContext';
import SoupCard from '../../Components/SoupCard';

const Overview = ({children}) => {
    const { state, updateState } = useContext(StateContext);
    const { deliveryinfo } = state;

    console.log(state)
    let history = useHistory()

    return (
        <div>
            Overview
            <SoupCard />
            <button type="button" onClick={() => history.goBack()}>{children}Back</button>
        </div>
    )
}

export default Overview;