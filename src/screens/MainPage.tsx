import React, {Component, useState, useEffect, useRef} from 'react'
import CubeIcon from '../assets/icons/cube.svg'
import SettingsIcon from '../assets/icons/settings.svg'
import AddPop from '../components/AddPop'
import Welcome from '../components/display/Welcome'
import { useNavigate } from 'react-router-dom'
import Input from 'antd/es/input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { QuestionInterface } from '../DataModels/QuizModel'
import { RootState, AppDispatch } from '../redux/store'
import { newQuestionList } from '../redux/currentQuestion-slice'
import { setQuizName } from '../redux/currentQuestion-slice'
import Share from '../components/Share'
import Submission from '../components/Submission'

import Content from '../components/Content'

import '../style/main-page.css'

export default function MainPage() {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()


    const formList = useSelector((state: RootState) => state.questionList)
    const currentQuestion = useSelector((state: RootState) => state.currentQuestion)

    const [editable, setEditable] = useState<Boolean>(false)
    const [activePanel, setPanel] = useState<String>("Content")
    // const [formList, setFormList] = useState<Array<Object>>([]) // Dynamic form list 
    const [choiceView, setChoiceView] = useState<Boolean>(false)    
    const [activeDisplay, setActiveDisplay] = useState<JSX.Element>(<Welcome/>) // What displays on the screen
    const [currentPanel, setCurrentPanel] = useState<JSX.Element>(<div></div>) // Currently active panel
    const [formDetails, setFormDetails] = useState<any>({
        name: '',
    })

    // Update global question list
    const setFormList = (newList: Array<QuestionInterface>) => {
        console.log(newList)
        dispatch(newQuestionList(newList))
        // dispatch(setQuestionList(newList))
    }

    useEffect(() => {
        console.log('question list', currentQuestion)
    })

  return (

    <div className='screen main-page bg-white'>
        <div className="row">

            {
            !editable ?    
            <div className="panel min-w-[300px]">
                <div className="nav-bar">
                    <img src={CubeIcon} alt="cube icon" />

                    <p className='nav previous' onClick={() => {navigate('/dashboard')}}>Dashboard &#10095;</p>
                   <Input
                    value={currentQuestion.name}
                    onChange={((e) => dispatch(setQuizName(e.target.value)))}
                    placeholder='Form name'
                    style={{fontSize: '12px', padding: '0 2px', flex: '1 1 0', width: '100%', borderRadius: 0}}/>
                    <div className="last-element">
                        <img src={SettingsIcon} alt="settings" />
                    </div>
                    
                </div>

                <div className="navigation">
                    <div className={`inactive ${activePanel === 'Content' ? 'active': '' }`} onClick={() => {setPanel('Content')}}>Content</div>
                    <div className={`inactive ${activePanel === 'Share' ? 'active': '' }`} onClick={() => {setPanel('Share')}}>Share</div>
                    <div className={`inactive ${activePanel === 'Submissions' ? 'active': '' }`} onClick={() => {setPanel('Submissions')}}>Submissions</div>
                </div>


                <div className="editor-panel">
                    {activePanel === 'Content' && <Content newField={setChoiceView} 
                    formList={{formList: formList, setFormList: setFormList}}
                    setEditable={setEditable} 
                    setCurrentPanel={setCurrentPanel} setActiveDisplay={setActiveDisplay}
                    formDetails={formDetails} setFormDetails={setFormDetails}/>}


                    {
                        activePanel === 'Share' && <Share/>
                    }


                    {   
                        activePanel === 'Submissions' && <Submission
                        setActiveDisplay={setActiveDisplay}
                        />
                    }
                </div>



            </div>
            : <div className="panel min-w-[300px]">
                {currentPanel}
            </div>
        }

            <div className="display">
                {activeDisplay}
            </div>

            {

                choiceView && <AddPop choiceView={choiceView} setChoiceView={setChoiceView} setEditable={setEditable}     
                    setCurrentPanel={setCurrentPanel} setActiveDisplay={setActiveDisplay} formList={{formList: formList, setFormList: setFormList}}
                />

            }

            
        </div>
    </div>
  )
}
