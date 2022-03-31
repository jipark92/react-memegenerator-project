import React from "react";

export default function Content() {
    return (
        <div className="content">
            <div className="input-container">
                <input type="text" placeholder="shut up"/>
                <input type="text" placeholder="take my money"/>
            </div>
            <div className="button-container">
                <button>Get a new meme image</button>
            </div>
            <div className="meme-container">
                <img src="" alt="meme"/>
            </div>
        </div>
    )
}