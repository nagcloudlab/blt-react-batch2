
import React from 'react';

function Clock(props) {
    let { timeZone } = props;
    return (
        <div class="card">
            <div class="card-header">Time in {timeZone}</div>
            <div class="card-body">
                {new Date().toLocaleTimeString('en-US', { timeZone })}
            </div >
        </div >
    )
}

export default Clock;