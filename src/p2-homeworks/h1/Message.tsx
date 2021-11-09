import React from 'react'
import style from './Message.module.css'


type propsMessage={
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props:propsMessage) {
    return (
        <div className={style.message}>
<div className={style.avatar}>
    <img src={props.avatar}/>
</div>
            <div className={style.textMessage}>
                <div className={style.inTextMessage}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.text}>{props.message}</div>
                </div>
                <div className={style.time}>{props.time}</div></div>

        </div>
    )
}

export default Message
