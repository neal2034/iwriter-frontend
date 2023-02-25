import uuid from "react-uuid";

export const getUserId = ()=>{
    let userId = localStorage.getItem('user_id');
    if(!userId){
        userId = uuid();
        localStorage.setItem('user_id', userId)
    }
    return userId;
}

export const getTone = ()=>{
    return localStorage.getItem('tone') || 'Activity'
}

export const getModal = ()=>{
    return localStorage.getItem('modal') || 'DAVINCI'
}


export const getLenLimit = ()=>{
    return localStorage.getItem('lenLimit') || 'THOUSAND'
}

export const getTodayDate = ()=>{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const withSlashes = [year, month, day].join('/');
    return withSlashes;
}


export const getTodayCallNum = () => {
    const today = getTodayDate();
    const savedToday = localStorage.getItem('today')
    if(today!==savedToday){
        localStorage.setItem('today', today)
        localStorage.setItem('callNum', "0")
        return 0;
    }else{
        const num = localStorage.getItem('callNum')
        if(!num) return 0
        return  parseInt(num);

    }
}


export const setTodayCallNum = (callNum:number) =>{
    const today = getTodayDate();
    localStorage.setItem('today', today)
    localStorage.setItem('callNum', callNum+"")
}