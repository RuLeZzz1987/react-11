import React from 'react';

const Mailbox = ({ unreadMessages }) => (
    <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 ? (
            <p>You have {unreadMessages.length} unread messages.</p>
        ) :
            (<p>No unread messages!</p>)}
    </div>
);

export default Mailbox;