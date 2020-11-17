import {INSERT_FATHER_INFO} from '../sections/microFatherActions'
const defaultValue = {
    nombre : 'Father',
    apellido: 'Apellido Father'
}
export const fatherMicro = (state = defaultValue,action) => {
    switch (action.type) {
        case INSERT_FATHER_INFO:
            return {...state  = action.payload};
        default: return state;
    }
}