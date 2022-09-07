import React from "react";
import './styles/Message.css'

function Message({ name }) {
    return (
        <h3>Hello {name}!</h3>
    );
}

export default Message;