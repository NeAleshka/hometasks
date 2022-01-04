import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import {IoIosCheckmarkCircleOutline, MdDelete, MdRestore} from "react-icons/all";


function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value.trim())
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value.trim()))
    }
    const clear = () => {
        setValue('')
        saveState<string|null>('editable-span-value', null)
    }

    return (
        <div style={{backgroundColor: 'chocolate'}}>
            <hr/>
            <h2>HomeTask 6</h2>
            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'Click me, best proger...'}}
                />
            </div>
            <SuperButton onClick={save}> <IoIosCheckmarkCircleOutline size={'small'} color={'green'}
                                                                      cursor={'pointer'}/> </SuperButton>
            <SuperButton onClick={restore}><MdRestore size={'small'} color={'red'}/></SuperButton>
            <SuperButton onClick={clear}> <MdDelete size={'small'}/></SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
