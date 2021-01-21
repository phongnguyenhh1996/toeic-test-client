import { get, range } from "lodash"
import { TEST_PART, TEST_TYPE, TEST_TYPE_INFO } from "../constants"

export interface Answer {
    answerNumb: number
    answer: string
}

export interface Question {
    questionNumb: number
    question: string
    imageSrc: any
    audioSrc: any
    questionGroupId?: number
}

export interface CorrectAnswer {
    answerNumb: number
    explanation: string
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
    answers: {
        [key: string]: Answer[]
    }
    correctAnswer: {
        [key: string]: CorrectAnswer
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
    const questions: any = {}
    const answers: any = {}
    range(partInfo.fromNumb, partInfo.fromNumb + partInfo.totalQuestion).forEach(numb => {
        const question: Question = {
            questionNumb: numb,
            question: '',
            imageSrc: null,
            audioSrc: null,
        }
        answers[numb] = createAnswers(partInfo.isThreeAnswer ? 3 : 4)
        questions[numb] = question
    })

    return {questions, answers}
}

export const createTestData = (testType: number, testPart: number) => {
    const test: Test = {
        avatarSrc: null,
        name: '',
        description: '',
        testType: testType,
        testPart: testPart,
        questions: {},
        answers: {},
        correctAnswer: {}
    }

    if (testType === TEST_TYPE.PART) {
        const partInfo = get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPart}`)
        const {questions, answers} = createQuestions(partInfo)
        test.questions = questions
        test.answers = answers
    } else {
        const parts = get(TEST_TYPE_INFO, `${testType}.parts`, [])
        let questionsList: any = {}
        let answersList: any = {}
        parts.forEach((part: number) => {
            const partInfo = get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${part}`)
            const {questions, answers} = createQuestions(partInfo)
            questionsList = {...questionsList, ...questions}
            answersList = {...answersList, ...answers}
        })
        test.questions = questionsList
        test.answers = answersList
    }

    return test
}

export const getFirstQuestion = (testType: number, testPart: number) => {
    if (testType === TEST_TYPE.PART) {
        const partInfo = get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPart}`)
        return partInfo.fromNumb
    } else {
        const testTypeInfo = get(TEST_TYPE_INFO, `${testType}`, [])
        return testTypeInfo.fromNumb
    }
}

export const getPartInfoFromQuestion = (questionNumb: number) => {
    const testPartId = Object.values(TEST_PART).find(testPart => {
        const partInfo = get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPart}`)
        return (questionNumb >= partInfo.fromNumb &&
            questionNumb < (partInfo.fromNumb + partInfo.totalQuestion))
    })

    return get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPartId}`)
}
