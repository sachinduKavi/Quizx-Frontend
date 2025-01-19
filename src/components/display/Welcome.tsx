import React from 'react'
import { Input, Button } from 'antd'


import '../../style/multi-choice-display.css'

export default function Welcome() {
  return (
    <div className='welcome-display multi-choice-display'>
        <div className="column display-column">
            <Input value={'Welcome to our form'} 
            className='display-title welcome-title'
            />

            <Input placeholder='Add question description (optional)' 
                className='display-description welcome-description' 
            value={'This is the description of the form'}/>

            <Button className='welcome-start'>Start</Button>

        </div>


        {
            // globalValue.imageFile !== null &&
            // <div className="column display-column">
            //     {/* <img src={globalValue.imageFile} alt="image load failed" width='100%'/> */}
            // </div>
        }   

        

    </div>
  )
}
