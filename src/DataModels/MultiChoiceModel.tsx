interface Choice {
    answer: string
    selected: boolean
}

interface MultiChoiceInterface {
    title: string
    description: string
    choices: Array<Choice>

    multiple: boolean
    required: boolean
    placement: boolean
    imageFile: File | null | Blob
}

export default MultiChoiceInterface