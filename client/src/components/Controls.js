import { useEffect, useState } from "react";

function Controls() {
    return (
        <div className="controls">
            <div className="controls-left"></div>
            <div className="screen"></div>
            <div className="controls-right">
                <div>
                    <div className="rect rect-gray"></div>
                    <div className="rect rect-gray"></div>
                    <div className="rect rect-gray"></div>
                </div>
                <div>
                    <div className="rect rect-gray"></div>
                    <div className="rect rect-gray"></div>
                </div>
            </div>
        </div>
    )
}

export default Controls;