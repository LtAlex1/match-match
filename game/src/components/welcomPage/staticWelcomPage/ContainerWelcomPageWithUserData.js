import React, { useEffect} from 'react'
import { useDispatch,useSelector, } from 'react-redux'
import { useHistory } from 'react-router'
import ContainerHeaderComponets from '../header/ContainerHeaderComponets'
import Header from '../Header'
import Difficult from './Difficult'
import ContainerCarousel from './carousel/ContainerCarousel'
import ShirtType from './ShirtType'
import Rules from './Rules'
import StartGame from './StartGameButton'
import FromDifficult from '../hints/FromDifficult'
import FromTypeShirt from '../hints/FromTypeShirt'
import {shareType,changeDifficult,setValueToLocalStorage,} from '../../../redux/actions/actionCreator'
import Animation from '../../Animation'


export default function ContainerWelcomPageWithUserData() {
   
    const state = useSelector(state => state.fullnes.filed) 
    const dispatch = useDispatch()

    //Difficult
        let difficultChandleChange = (event)=>{
        switch (event.target.value) {
            case '8':
                const column = 4
                    dispatch(changeDifficult(event.target.value,column))
                    break
            case '18':
                const columnSecond = 6
                    dispatch(changeDifficult(event.target.value,columnSecond))
                    break
            case '32': 
                const columnThird = 8
                    dispatch(changeDifficult(event.target.value,columnThird))
                    break
            default:
                break;
        }   
         

    }
   
    // PushAllValueToStore
    useEffect(()=>{
        let array = []
        for(let i = 0, length = localStorage.length; i< length; i++){
    
        array.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
        dispatch(setValueToLocalStorage(array))
    },[])

    //ShareType
        let typeChangeClickEvent = (event)=>{
            let data = event.target.value
            dispatch(shareType(data))
        }

    const typesName= ['starWars', 'marvel' , 'ricMorti' ]        
    const buttonItem = typesName.map((item)=><ShirtType typesName ={item} typeChangeClickEvent={typeChangeClickEvent}/>)
    
    // Start Game Button
    const difficult = useSelector(state => state.difficultReducer.level)    
    const shirt = useSelector(state => state.shirtType.shareType) 
    const history = useHistory()

        
    function navigationHandleClick(){
        
        if(difficult && shirt !== ""){
            history.push('/game')
        }else{ alert('ЗАПОЛНИТЕ ВСЕ ПОЛЯ')}
    }    

    // Header
    const headerTitle = useSelector(state => state.fullnes.filed)
    return (
        <div className = 'welcom-page'>
            <div>
                {state? <ContainerHeaderComponets/>:''}
                {state?<Header header={headerTitle}/>:''}
            </div>

            <div className ='difficult'>
                <div className ='difficult__title'>
                    <FromDifficult/>
                </div>
                <div className='difficult__dropdown'>
                    <Difficult difficultChandleChange = {difficultChandleChange}/>
                </div>
            </div>

            <div className='type-shirt'>
                <FromTypeShirt/>
            </div>

            <div className ='carusel'>
                 <ContainerCarousel/>
            </div>
            
            <div className='type-shirt__button'>
                   {buttonItem}
            </div>

            <div className = 'rules'>
                <Rules/>
            </div>
            <div className='game-button'>
                <StartGame navigationHandleClick={navigationHandleClick} difficult={difficult} shirt ={shirt} history={history}/>
            </div>
            <div>
                <Animation/>
            </div>
        </div>
        )
    
}
