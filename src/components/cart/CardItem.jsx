

import React from 'react'
import Item from './Item'

const CardItem = (props) => {
  return (
    <div className='row justify-content-center'>

    <div className='col-9 bg-light rounded'>

    <div className='cardGrid'> 
       {
        props.item.map(obj=>{
          return(
            <Item
            key={obj.id}
            id={obj.id}
            myId={obj.myId}
            title={obj.title}
            description={obj.description}
            price={obj.price}
            img1={obj.img1}
            img2={obj.img2}
            img3={obj.img3}
            img4={obj.img4}
            />
          )
        })
      }

     </div> 
    </div>
    </div>
  )
}

export default CardItem