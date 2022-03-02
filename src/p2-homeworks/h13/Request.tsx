import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestApi} from "./RequestsAPI";
// @ts-ignore
import {emojify} from 'react-emojione';


const Request = () => {
    const [success, setSuccess] = useState(false)
    const [response, setResponse] = useState(null)
    const [colorText, setColorText] = useState('');

    return (
        <div>
            <SuperButton
                style={{backgroundColor: "yellow"}}
                onClick={() => {
                    requestApi.getRequest(success).then(
                        r => {
                            setColorText('')
                            setResponse(r.data.errorText)
                        }
                    ).catch(error => {
                        setColorText('red')
                        setResponse(error.response.data.errorText)
                    })
                }}>Send</SuperButton>
            <SuperCheckbox onChange={event => setSuccess(event.currentTarget.checked)}/>
            {response && <div>
                {response && <span style={{color: colorText}}>{response}</span>}
                {colorText ? <span>{emojify(':(')}</span> :
                    <span>{emojify(':)')}</span>}
            </div>}
        </div>
    )
}

export default Request