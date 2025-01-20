import React from 'react'
import ContentIcon from '../assets/icons/content.svg'
import SingleForm from './SingleForm'
import {PlusOutlined, CloudFilled, DeleteFilled} from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import {Input, Button} from 'antd'

import '../style/content.css'

export default function Content(props: any) {
  const questionList = useSelector((state: RootState) => state.questionList)
  const global = useSelector((state: RootState) => state.global)
  const user = useSelector((state: RootState) => state.user)

  const quizSubmission = async() => {
    const quizValues = {
      name: props.formDetails.name,
      userID: user.id,
      questionList: questionList
    }
    // console.log('form details', props.formDetails)
    // console.log('Form submission ', questionList)
    // console.log('Form submission ', global)

    console.log(quizValues)
  }


  return (
    <div className='content-border'>
        <div className="main-content">
            <div className="steps">
                <img src={ContentIcon} alt="content-icon" />
                <p>Steps</p>
            </div>

            <p className="steps-description">The steps users will take to complete the form</p>

            <SingleForm type='welcome' title='Welcome screen'/>

            {
              props.formList.map((element: Object, index: number) => {
                return (<SingleForm key={index} data={element}/>)
              })
            }


            <Button icon={<PlusOutlined/>} className='add-field-btn' onClick={() => props.newField(true)}>Add Field</Button>

            <hr />

            <SingleForm type='end' title='End screen'/>
        </div>

        <div className="content-footer">
            <Button icon={<CloudFilled/>} onClick={quizSubmission} className='save-publish'>Save & Published</Button>
            <Button icon={<DeleteFilled/>} className='delete-btn'>Delete</Button>
        </div>
        
    </div>
  )
}
