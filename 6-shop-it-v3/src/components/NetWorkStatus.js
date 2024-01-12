
import React from 'react';
import { useSelector } from 'react-redux';

const NetWorkStatus = () => {
    const { message } = useSelector(state => state.networkStatus);
    if (message === "") return null;
    return (
        <div className="alert alert-warning">
            <div>{message}</div>
        </div>
    )
}

export default NetWorkStatus;