export const CHANGE_DIFFICULT = 'CHANGE_DIFFICULT'
export const SHARE_TYPE = 'SHARE_TYPE'
export const STORAGE_FULLNES = 'STORAGE_FULLNES'
//---------------------------
export const FLIP_CHECK = 'FLIP_CHECK'
export const ARRAY_STORAGE = 'ARRAY_STORAGE'

export function flipCheck(obj){
    return {
        type : FLIP_CHECK,
        obj: obj,

    }
}

export function changeDifficult(levelType){
    return {
        type : CHANGE_DIFFICULT,
        payload: levelType,
      
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


