import React from 'react';
import { useHistory } from 'react-router-dom';

const Overview = ({children}) => {

    let history = useHistory()

    return (
        <div>
            Overview
            <button type="button" onClick={() => history.goBack()}>{children}Back</button>
        </div>
    )
}

export default Overview;