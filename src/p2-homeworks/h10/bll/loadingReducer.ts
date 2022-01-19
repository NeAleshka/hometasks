const initState = false

export type initStateType={
    initState:boolean
}

export const loadingReducer = (state = initState, action: loadingACType): boolean => {
    switch (action.type)
    {case "change":{
            return !state
    }
        default: return state
    }

}


export type loadingACType={
    type:'change',
    loading:boolean,
}

export const loadingAC = (loading:boolean): loadingACType => {
    return{
        type:'change',
        loading,
    }
}