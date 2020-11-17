export const INSERT_FATHER_INFO = 'INSERT_FATHER_INFO';


export const inserFatherInfo = (value) => {
    return {
        type : INSERT_FATHER_INFO,
        payload: value
    }
}