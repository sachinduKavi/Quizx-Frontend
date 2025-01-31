import React from 'react';

export default function SubmissionTable(props: any) {
    const submission = props.submission;

    return (
        <div className="container mx-auto p-6">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Submission by: <span className="italic font-light">{submission.submitter}</span>
                </h2>
                <div className="space-y-8">
                    {submission.answers.map((answer, ansIndex) => (
                        <div
                            key={answer.question_id}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:-translate-y-2"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{answer.question_title}</h3>
                            <div className="mt-6">
                                <strong className="text-lg font-semibold text-gray-700">Selected Answers:</strong>
                                <ul className="list-inside list-disc mt-4 space-y-3">
                                    {answer.answers.map((ans, idx) => (
                                        <li key={idx} className="text-gray-700 text-lg pl-4">
                                            {ans}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}