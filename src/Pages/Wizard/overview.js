import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import PathHeader from '../../Components/PathHeader';
import { StateContext } from '../../StateContext';


const Overview = ({children}) => {
    const { state, updateState } = useContext(StateContext);
   /*  const { deliveryinfo } = state; */

    console.log(state)
    let history = useHistory()

    return (
        <div>
            Overview
            <PathHeader />
            <button type="button" onClick={() => history.goBack()}>{children}Back</button>
        </div>
    )
}

export default Overview;