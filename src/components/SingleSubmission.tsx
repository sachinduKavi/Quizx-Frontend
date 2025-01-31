import React from 'react'

export default function SingleSubmission(props: any) {
    const submission = props.submission

  return (
    <div className='bg-[#F3F3F3] w-full flex flex-col justify-center items-center
        h-[50px] rounded-[10px] cursor-pointer m-10
    ' style={{margin: '5px'}} onClick={props.onClick}>
        <p className='font-semibold'>{submission.submitter}</p>
    </div>
  )
}
