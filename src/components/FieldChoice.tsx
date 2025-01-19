import React from 'react'

import '../style/field-choice.css'


export default function FieldChoice(props: any) {
  return (
    <div className='choice-border' onClick={props.onClick}>
      {props.icon}
      <p>{props.text}</p>
    </div>
  )
}

