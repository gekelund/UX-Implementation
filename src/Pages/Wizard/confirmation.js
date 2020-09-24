import React from 'react';
import { useHistory } from 'react-router-dom';

const Confirmation = ({children}) => {

    let history = useHistory()

    return (
        <div>
            Confirmation
            <button type="button" onClick={() => history.goBack()}>{children}Back</button>
        </div>
    )
}

export default Confirmation;