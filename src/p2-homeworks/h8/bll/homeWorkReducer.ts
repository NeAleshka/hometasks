import {UserType} from "../HW8";


export const homeWorkReducer = (state: UserType[], action: {type:string,payload?:string}): UserType[] => { // need to fix any
    debugger
    switch (action.type) {
        case 'sort': {
          let copyState=[...state]
            const sortUp = (a:UserType,b:UserType) => {
              return  a.name.localeCompare(b.name)
            }
            const sortDown = (a:UserType,b:UserType) => {
                return  b.name.localeCompare(a.name)
            }
        return action.payload==='up'? copyState=copyState.sort(sortUp):copyState=copyState.sort(sortDown)
        }
        case 'check': {
            const copyState=[...state]
            return copyState.filter(f=>f.age>18)
        }
        default: return state
    }
}

