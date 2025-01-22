import React, {useState, useRef} from 'react'
import {SettingOutlined, DeleteFilled, PlusOutlined, UploadOutlined, AlignLeftOutlined} from '@ant-design/icons'
import { Button, Input, Switch, Checkbox } from 'antd'
import CrossIcon from '../../assets/icons/cross.svg'
import { setValue, setChoice, resetValues } from '../../redux/global-slice'
import { RootState, AppDispatch } from '../../redux/store'
import {useSelector, useDispatch} from 'react-redux'
import { ChoiceInterface } from '../../DataModels/QuizModel'


import '../../style/multi-choice.css'


export default function MultiChoice(props: any) {
    const globalValue = useSelector((state: RootState) => state.global);
    const currentQuestion = useSelector((state: RootState) => state.currentQuestion)
    const dispatch: AppDispatch = useDispatch()
    const setFormList = props.formList.setFormList
    

    // Update global value
    const updateGlobal = (name: any, value: any) => {
        dispatch(setValue({[name]: value}))
    }

    
    // Form is finalize to submit and save the instant
    const saveFinalize = () => {
        const updateList = [...currentQuestion.questionList, globalValue]
        setFormList(updateList)
        props.resetPanel()
        dispatch(resetValues())
    }
    

  return (
    <div className='multi-choice'>
        <div className="row setting-row" >
            <div className="column">
                <div className="row details">
                    <SettingOutlined/>
                    <h4>Settings</h4>
                </div>

                <p className='form-type'>MultipleChoice</p>
            </div>

            <Button className='square-btn' onClick={() => {props.resetPanel()}}>
                <img src={CrossIcon} alt="cross icon" />
            </Button>
            
        </div>


        <div className="content">
            <p>title</p>
            <Input value={globalValue.title} onChange={(e) => {
                updateGlobal('title', e.target.value)
            }}/>

            <p>description</p>
            <Input value={globalValue.description} onChange={(e) => {
                updateGlobal('description', e.target.value)
            }}/>


            <p>choice {globalValue.choices.length}</p>

            {
                globalValue.choices.map((element: ChoiceInterface, index: number) => {
                    return (
                        <div className="row flex items-center justify-center" key={index}>
                            <Input value={element.answer} onChange={(e) => {
                                let updateChoice = {
                                    ...element, answer: e.target.value
                                }
                                dispatch(setChoice({index, choice: updateChoice})) // Updating global choice array
                            }}/> 
                            
                            <Checkbox onChange={(e) => {
                                let updateChoice = {
                                    ...element, selected: e.target.checked
                                }
                                dispatch(setChoice({index, choice: updateChoice}))
                            }}/>

                            <Button className='square-btn' onClick={() => {
                                let updateChoice = [...globalValue.choices]
                                updateChoice.splice(index, 1)
                                updateGlobal('choices', updateChoice)
                            }}><DeleteFilled/></Button>
                        </div>
                    )
                })
            }
            

            <Button className='square-btn delete-btn' onClick={() => {
                const choiceUpdate = [...globalValue.choices, {
                    answer: '',
                    selected: false
                }]
            
                updateGlobal('choices', choiceUpdate)
                }}><PlusOutlined style={{color: 'white'}}/></Button>


            <div className="row selection-row">
                <p>allow multiple selection</p>
                <Switch size='small' onChange={(e) => {
                    updateGlobal('multiple', e)
                }} checked={globalValue.multiple}/>
            </div>

            <div className="row selection-row">
                <p>required</p>
                <Switch size='small' onChange={(e) => {
                    updateGlobal('required', e)
                }} checked={globalValue.required}/>
            </div>

            
            
            
            
        </div>

        <div className="final-button row">
            <Button className='save-btn' onClick={saveFinalize}>Save</Button>
            <Button className='delete-button'>Delete</Button>
        </div>

       

    </div>
  )
}
