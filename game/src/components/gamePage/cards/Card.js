import React  from 'react'
import PropTypes from 'prop-types'


//ВЫНЕСИ ЛОГИКУ ЗА КОМПОНЕНТУ
 function Card({handleClick,classNameCard,obj}) {
	


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

export default Card


Card.propTypes = {
	handleClick: PropTypes.func.isRequired,
	className:PropTypes.object.isRequired,
	obj:PropTypes.object.isRequired
}