export const CHANGE_DIFFICULT = 'CHANGE_DIFFICULT'
export const SHARE_TYPE = 'SHARE_TYPE'
export const STORAGE_FULLNES = 'STORAGE_FULLNES'
export const FLIP_CHECK = 'FLIP_CHECK'
export const FLIP_ACTION = 'FLIP_ACTION'
export const ARRAY_STORAGE = 'ARRAY_STORAGE'
export const RESET_TIMER = 'RESET_TIMER'

export function flipCheck(obj){
    return {
        type : FLIP_CHECK,
        obj: obj,
    }
}
export function flipAction(bullean){
    return {
        type : FLIP_ACTION,
        bullean: bullean,
    }
}

export function changeDifficult(levelType,columnCount){
    return {
        type : CHANGE_DIFFICULT,
        payload: levelType,
        columnCount: columnCount
      
    }
} 

export function shareType(type){
    return {
        type: SHARE_TYPE,
        payload: type
    }
}

export function storageFullness(type){
    return {
        type: STORAGE_FULLNES,
        payload: type
    }
}
export function arrayStorage(array){
    return {
        type: ARRAY_STORAGE,
        payload: array
    }
}

export function resetTimer(count){
    return {
        type: RESET_TIMER,
        payload: count
    }
}


