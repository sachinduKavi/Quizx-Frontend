import React, {useEffect, useState} from 'react'
import SingleSubmission from './SingleSubmission'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import SubmissionTable from './display/SubmissionTable'
import { getQuizSubmissionsQuery } from '../services/quizQuery'

export default function Submission(props: any) {
    const [submissions, setSubmissions] = useState<Array<any>>([])
    const currentQuestion = useSelector((state: RootState) => state.currentQuestion)

    const fetchSubmissions = async () => {
        if(typeof currentQuestion.id === 'number') {
            const response = await getQuizSubmissionsQuery(currentQuestion.id)
            console.log(response)
            setSubmissions(response.data.submissions)
        }
        
    }


    const selectSubmission = (submission: any) => {
        props.setActiveDisplay(<SubmissionTable submission={submission}/>)
    }

    useEffect(() => {
        fetchSubmissions()
    }, [])


  return (
    <div className='flex flex-grow h-full flex-col'>

        {
            submissions.map((element, index) => {
                return (<SingleSubmission submission={element} key={index}
                    onClick={() => {selectSubmission(element)}}
                />)
            })
        }
        
    </div>
  )
}
