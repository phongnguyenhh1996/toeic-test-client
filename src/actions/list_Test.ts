import {
    LIST_ALL_TEST_SUCCESS,
    LIST_ALL_TEST_REQUEST,
    LIST_ALL_TEST_FAILED
} from "../constants";

interface listTestObject {
    answers:null,
    author:string,
    correctAnswer:null,
    createdAt:string,
    description:string,
    id:string,
    likes:number,
    name:string,
    official:boolean,
    questions:null,
    testPart:number,
    testType:number,
    viewCount:number
}
export const listAllTestRequest = () =>{
    return {
        type:LIST_ALL_TEST_REQUEST,
    }
}
export const listAllTestSuccess = (arrayList:Array<listTestObject>) =>{
    return {
        type:LIST_ALL_TEST_SUCCESS,
        payload:arrayList
    }
}
export const listAllTestFailed = () =>{
    return {
        type:LIST_ALL_TEST_FAILED,
    }
}