import { get, keyBy, range } from "lodash"
import { TEST_TYPE, TEST_TYPE_INFO } from "../constants"

export interface Answer {
    answerNumb: number
    answer: string
}

export interface Question {
    questionNumb: number
    question: string
    imageSrc: any
    audioSrc: any
    answers: Answer[]
}

export interface Test {
    name: string
    description: string
    testType: number
    testPart: number
    avatarSrc: any
    questions: {
        [key: string]: Question
    }
}

const createAnswers = (totalAnswer: number) => {
    const answers = range(1, totalAnswer + 1).map(numb => {
        const answer: Answer = {
            answerNumb: numb,
            answer: ''
        }
        return answer
    })

    return answers
}

const createQuestions = (partInfo: any) => {
    
    const questions = range(partInfo.fromNumb, partInfo.fromNumb + partInfo.totalQuestion).map(numb => {
        const question: Question = {
            questionNumb: numb,
            question: '',
            imageSrc: null,
            audioSrc: null,
            answers: createAnswers(partInfo.isThreeAnswer ? 3 : 4)
        }
        return question
    })

    return questions
}

export const createTestData = (testType: number, testPart: number) => {
    const test: Test = {
        avatarSrc: null,
        name: '',
        description: '',
        testType: testType,
        testPart: testPart,
        questions: {}
    }

    if (testType === TEST_TYPE.PART) {
        const partInfo = get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPart}`)
        const questions: Question[]= createQuestions(partInfo)
        test.questions = keyBy(questions, o => o.questionNumb)
    } else {
        const parts = get(TEST_TYPE_INFO, `${testType}.parts`, [])
        let questions: Question[] = []
        parts.forEach((part: number) => {
            const partInfo = get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${part}`)
            questions = [...questions, ...createQuestions(partInfo)]
        })
        test.questions = keyBy(questions, o => o.questionNumb)
    }



    return test
}