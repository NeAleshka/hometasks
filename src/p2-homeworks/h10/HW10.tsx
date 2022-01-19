import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import ReactLoading from 'react-loading';

function HW10() {
    // useSelector, useDispatch


    let dispatch=useDispatch()

    const loading = useSelector<AppStoreType,boolean>(state => state.loading)

    const setLoading = () => {
        dispatch(loadingAC(loading))
        setTimeout(()=>{
             dispatch(loadingAC(loading))
         },1500)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                   <ReactLoading type={'spin'} color={'yellow'} />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading} cursor={'pointer'}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
