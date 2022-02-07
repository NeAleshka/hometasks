export type ChangeThemeType ={
    color:string
}
const initState:ChangeThemeType = {
color:'dark'
};

export type changeThemeACType={
    type:string
    payload:{
        newColor:string
    }
}
export const themeReducer = (state = initState, action: changeThemeACType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
                color: action.payload.newColor
            }
        }
        default: return state;
    }
};

export const changeThemeAC = (newColor:string): changeThemeACType => {
    return{
        type:'CHANGE_THEME',
        payload:{
            newColor
        }
    }as const
};