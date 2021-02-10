export const CHANGE_DIFFICULT = 'CHANGE_DIFFICULT'
export const SHARE_TYPE = 'SHARE_TYPE'
export const STORAGE_FULLNES = 'STORAGE_FULLNES'
export const FLIP_CHECK = 'FLIP_CHECK'
export const FLIP_ACTION = 'FLIP_ACTION'
export const RESET_TIMER = 'RESET_TIMER'
export const INIT_CARDS = 'INIT_CARDS'
export const CARD_SELECTED = 'CARD_SELECTED'
export const CLICK_COUNTER ='CLICK_COUNTER'
export const SHUFFLE_ARRAY ='SHUFFLE_ARRAY'
export const DELEAT_DATA ='DELEAT_DATA'
export const SET_DATA ='SET_DATA'


export function initCardsArray(array){
    return {
        type: INIT_CARDS,
        payload: array 
    }
}

export function cardSelected(check,secondCheck){
    return {
        type: CARD_SELECTED,
        payload: {
            check,secondCheck
        }       
    }
}

export function flipCheck(obj){
    return {
        type : FLIP_CHECK,
        obj: obj,
    }
}
export function flipAction(bullean){
    return {
        type : FLIP_ACTION,
        payload: bullean,
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


export function resetTimer(count){
    return {
        type: RESET_TIMER,
        payload: count
    }
}
export function clickCounter(count){
    return {
        type: CLICK_COUNTER,
        payload: count
    }
}
export function shuffleArray(bullean){
    return {
        type: SHUFFLE_ARRAY,
        payload: bullean
    }
}
export function deleatData(){
    return {
        type: DELEAT_DATA
    }
}
export function setData(array){
    return {
        type: SET_DATA,
        payload: array
    }
}


