import React, {useEffect, useRef} from 'react'
import FieldChoice from './FieldChoice'
import {EditOutlined, DownOutlined, PhoneOutlined, InfoCircleOutlined, GlobalOutlined, FileTextOutlined, ProductOutlined, CheckOutlined, MailOutlined} from '@ant-design/icons'
import CrossIcon from '../assets/icons/cross.svg'
import MultiChoice from './FormComponents/MultiChoice'
import MultiDisplay from './display/MultiDisplay'
import Welcome from './display/Welcome'


export default function AddPop(props: any) {

    const choiceRef = useRef<HTMLDivElement | null>(null)
    // Close the pop up when user click outside the container
    const checkOutsideClick = (e: any) => {
        if(props.choiceView && !choiceRef.current?.contains(e.target)) {
            props.setChoiceView(false)
        }
    }

    // Component did mount ?
    useEffect(() => {
        document.addEventListener('mousedown', checkOutsideClick)


        return(() => {
            document.removeEventListener('mousedown', checkOutsideClick)
        })
    }, [props.choiceView])


    // Reset all the panels & go back to dashboard
    const resetPanel = () => {
        props.setEditable(false)
        props.setCurrentPanel(null)
        props.setActiveDisplay(<Welcome/>)
    }



    // User clicks on one of the choice 
    const addField = (type: string) => {
        console.log('choice selected', type)
        props.setChoiceView(false)
        props.setEditable(true)


        switch(type) {
            case "Multiple":
                props.setCurrentPanel(<MultiChoice resetPanel={resetPanel} formList={props.formList}/>)
                props.setActiveDisplay(<MultiDisplay/>)
        }
    }

  return (
    <div className="add-filed-pop">
        <div className="pop-up" ref={choiceRef}>
            <div className="row space-between">
                <h3 className='title'>Add Field</h3>
                <img src={CrossIcon} alt="cross icon" className='cross-icon' onClick={() => props.setChoiceView(false)}/>
            </div>
        
            <div className="content-grid">
                <FieldChoice text='Multiple Choice' icon={<CheckOutlined/>} onClick={() => addField('Multiple')}/>
                <FieldChoice text='Short Text' icon={<EditOutlined/>} onClick={() => addField('Multiple')}/>
                <FieldChoice text='Email' icon={<MailOutlined/>} onClick={() => addField('Multiple')}/>
                <FieldChoice text='Drop Down' icon={<DownOutlined/>} onClick={() => addField('Multiple')}/>
                <FieldChoice text='Phone Number' icon={<PhoneOutlined/>} onClick={() => addField('Multiple')}/>
                <FieldChoice text='Section' icon={<ProductOutlined/>} onClick={() => addField('Multiple')}/>
                <FieldChoice text='Contact Information'  icon={<InfoCircleOutlined/>} onClick={() => addField('Multiple')}/>
                <FieldChoice text='Legal' icon={<FileTextOutlined/>} onClick={() => addField('Multiple')}/>
                <FieldChoice text='County' icon={<GlobalOutlined/>} onClick={() => addField('Multiple')}/>

            </div>
        </div>
    </div>
  )
}
