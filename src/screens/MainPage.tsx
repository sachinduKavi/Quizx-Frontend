import React, {Component, useState, useEffect, useRef} from 'react'
import CubeIcon from '../assets/icons/cube.svg'
import SettingsIcon from '../assets/icons/settings.svg'
import AddPop from '../components/AddPop'
import Welcome from '../components/display/Welcome'


import Content from '../components/Content'

import '../style/main-page.css'

export default function MainPage() {

    const [editable, setEditable] = useState<Boolean>(false)
    const [activePanel, setPanel] = useState<String>("Content")

    const [formList, setFormList] = useState<Array<Object>>([]) // Dynamic form list 

    const [choiceView, setChoiceView] = useState<Boolean>(false)    

    const [activeDisplay, setActiveDisplay] = useState<JSX.Element>(<Welcome/>) // What displays on the screen
    const [currentPanel, setCurrentPanel] = useState<JSX.Element>(<div></div>) // Currently active panel


    useEffect(() => {
        console.log('form list', formList)
    })

  return (

    <div className='screen main-page'>
        <div className="row">

            {
                !editable ?
            

            <div className="panel">
                <div className="nav-bar">
                    <img src={CubeIcon} alt="cube icon" />

                    <p className='nav previous'>Dashboard &#10095;</p>
                    <p className='nav'>Form name</p>

                    <div className="last-element">
                        <img src={SettingsIcon} alt="settings" />
                    </div>
                    
                </div>

                <div className="navigation">
                    <div className={`inactive ${activePanel === 'Content' ? 'active': '' }`} onClick={() => {setPanel('Content')}}>Content</div>
                    <div className={`inactive ${activePanel === 'Design' ? 'active': '' }`} onClick={() => {setPanel('Design')}}>Design</div>
                    <div className={`inactive ${activePanel === 'Share' ? 'active': '' }`} onClick={() => {setPanel('Share')}}>Share</div>
                    <div className={`inactive ${activePanel === 'Replies' ? 'active': '' }`} onClick={() => {setPanel('Replies')}}>Replies</div>
                </div>


                <div className="editor-panel">
                    {activePanel === 'Content' && <Content newField={setChoiceView} formList={formList}/>}
                </div>



            </div>
            : <div className="panel">
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
