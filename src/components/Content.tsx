import React, {useEffect} from 'react'
import ContentIcon from '../assets/icons/content.svg'
import SingleForm from './SingleForm'
import {PlusOutlined, CloudFilled, DeleteFilled} from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import Quiz, { QuizInterface } from '../DataModels/QuizModel'
import {Button} from 'antd'
import { setUserID, setQuizID, setQuiz } from '../redux/currentQuestion-slice'
import toast from 'react-hot-toast'
import { setQuestion } from '../redux/global-slice'
import { QuestionInterface } from '../DataModels/QuizModel'
import MultiChoice from './FormComponents/MultiChoice'
import MultiDisplay from './display/MultiDisplay'
import { resetValues } from '../redux/global-slice'

import '../style/content.css'

export default function Content(props: any) {
  const dispatch: AppDispatch = useDispatch()
  const currentQuestion = useSelector((state: RootState) => state.currentQuestion)
  const user = useSelector((state: RootState) => state.user)

  const quizSubmission = async () => {
    dispatch(setUserID(user.id))
    let res:any = await Quiz.createQuiz(currentQuestion);
    // else res = await Quiz.updateQuiz(currentQuestion);
    if(res) {
        const quiz_format: QuizInterface = {
          name: res.values.quiz_name,
          id: res.values.quiz_id,
          shareLink: res.values.access_link,
          questionList: currentQuestion.questionList
        }

        dispatch(setQuiz(quiz_format));
        toast.success(res.message)
    }
    console.log('Response', res)
    // console.log(JSON.stringify(currentQuestion))
  }


  const resetPanel = () => {
    props.setEditable(false)
  }

  const selectQuestion = (question: QuestionInterface) => {
    dispatch(setQuestion(question))
    props.setEditable(true)
    props.setCurrentPanel(<MultiChoice resetPanel={resetPanel} formList={props.formList}/>)
    props.setActiveDisplay(<MultiDisplay/>)
  }


  return (
    <div className='content-border'>
        <div className="main-content">
            <div className="steps">
                <img src={ContentIcon} alt="content-icon" />
                <p>Steps</p>
            </div>

            <p className="steps-description">The steps users will take to complete the form</p>
            {/* <SingleForm type='welcome' title='Welcome screen'/> */}
            {
              currentQuestion.questionList.map((element: QuestionInterface, index: number) => {
                return (<SingleForm 
                  formList={props.fromList}
                  onClick={() => {selectQuestion(element)}}
                  key={index} data={element}/>)
              })
            }


            <Button icon={<PlusOutlined/>} className='add-field-btn' onClick={() => {
              dispatch(resetValues()) // Reset the global values
              props.newField(true)
            }}>Add Field</Button>

            <hr /> 

            {/* <SingleForm type='end' title='End screen'/> */}
        </div>

        <div className="content-footer">
            <Button icon={<CloudFilled/>} onClick={quizSubmission} className='save-publish'>Save & Published</Button>
            <Button icon={<DeleteFilled/>} className='delete-btn'>Delete</Button>
        </div>
        
    </div>
  )
}
