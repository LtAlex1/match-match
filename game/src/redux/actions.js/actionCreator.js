export const CHANGE_DIFFICULT = 'CHANGE_DIFFICULT'

export function changeDifficult(levelType){
    return {
        type : CHANGE_DIFFICULT,
        payload: levelType
    }
} 