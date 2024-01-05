import React from "react"
import Clock from "./Clock"

function ClockBoard() {
    return (
        <div class="card">
            <div class="card-header">Clock Board</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6" id="chennai-clock">
                        <Clock timeZone="Asia/kolkata" />
                    </div>
                    <div class="col-6" id="dubai-clock">
                        <Clock timeZone="Asia/Dubai" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClockBoard;