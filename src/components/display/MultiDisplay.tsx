import React from 'react'
import {Input} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import { setValue, setChoice } from '../../redux/global-slice'
import { RootState, AppDispatch } from '../../redux/store'
import MultiChoiceInterface from '../../DataModels/MultiChoiceModel'

import '../../style/multi-choice-display.css'


function MultiDisplay() {
    const globalValue = useSelector((state: RootState) => state.global)
    const dispatch: AppDispatch = useDispatch()


    const updateGlobal = (name: any, value: any) => {
        dispatch(setValue({[name]: value}))
    }

  return (
    <div className='multi-choice-display'>
        <div className="column display-column">
            <Input placeholder='Add question title' value={globalValue.title} 
            className='display-title'
            onChange={(e) => {updateGlobal('title', e.target.value)}}/>

            <Input placeholder='Add question description (optional)' 
                className='display-description'
                onChange={(e) => {updateGlobal('description', e.target.value)}}
            value={globalValue.description}/>


            <div className="choice-grid">

                {
                    globalValue.choices.map((element, index) => {
                        return (
                            <div className="choice" key={index}>
                                <h2>{element.answer}</h2>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>


        
        
    </div>
  )
}

export default MultiDisplay