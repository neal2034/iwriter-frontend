import axios from "axios";
import {getLenLimit, getModal, getTone, getUserId} from "./config";
const API_ENDPOINT = "http://localhost:3002/iwriter";


export const getOpenApiResponse = async (prompt:string)=>{
    const userId = getUserId();
    const tone = getTone()
    const modal = getModal();
    const lenLimit = getLenLimit();
    return axios.post(API_ENDPOINT, {
        id: userId,
        prompt,
        tone,
        modal,
        lenLimit,

    })

}