import React from 'react';
import './ChatListem.css';

export default () => {
    return (
        <div className="chatListItem">
            <img  className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar"/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Geison Silva</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem---lastMsg">
                        <p>Hi my friend how's going? what you doing here?d how's going? what you doing here?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}