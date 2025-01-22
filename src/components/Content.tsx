import React from 'react'
import ContentIcon from '../assets/icons/content.svg'
import SingleForm from './SingleForm'
import {PlusOutlined, CloudFilled, DeleteFilled} from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import Quiz from '../DataModels/QuizModel'
import {Button} from 'antd'
import { setUserID, setQuizID } from '../redux/currentQuestion-slice'
import toast from 'react-hot-toast'

import '../style/content.css'

export default function Content(props: any) {
  const dispatch: AppDispatch = useDispatch()
  const currentQuestion = useSelector((state: RootState) => state.currentQuestion)
  const user = useSelector((state: RootState) => state.user)

  const quizSubmission = async () => {
    dispatch(setUserID(user.id))
    const res = await Quiz.createQuiz(currentQuestion)
    if(res) {
        if(typeof res === 'number')
        dispatch(setQuizID(res))
        toast.success('Quiz created successfully')
    }
    console.log(JSON.stringify(currentQuestion))
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
              currentQuestion.questionList.map((element: Object, index: number) => {
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
