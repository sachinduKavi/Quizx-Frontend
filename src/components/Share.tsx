import React from 'react'
import {CopyOutlined} from '@ant-design/icons'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'


export default function Share() {
    const dispatch: AppDispatch = useDispatch()
    const currentQuestion = useSelector((state: RootState) => state.currentQuestion)

  return (
    <div className='h-full'>
        <div className="flex flex-row w-full justify-between">
            <a href="#" target='_BLANK'>{currentQuestion.shareLink}</a>
            <Button icon={<CopyOutlined/>}></Button>
        </div>
    </div>
  )
}
