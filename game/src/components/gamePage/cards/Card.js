import React  from 'react'



//ВЫНЕСИ ЛОГИКУ ЗА КОМПОНЕНТУ
export default function Card({handleClick,classNameCard,obj}) {
	


	return (
	 <div className={classNameCard} onClick={handleClick}>	
		
		<div className='front' style = {{background: obj.frontSrc}}>
            <div className='flashCard-options' >
			<img src={obj.frontSrc}/>
            </div>
        </div>

        <div className ='back' style = {{background: obj.src }}>   
			<img src={obj.src}/>
        </div>
	</div>
	)
}





{/* <div className={`card ${flip ? 'flip' : ''} ${obj.id}`} >	 */}