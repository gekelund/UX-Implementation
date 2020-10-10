import React, {useContext} from 'react';
import { StateContext } from '../../StateContext';


const Overview = () => {
    const { state } = useContext(StateContext);
   /*  const { deliveryinfo } = state; */

    console.log(state)
   

    return (
        <div>
            Overview
           
        </div>
    )
}

export default Overview;