import React, {useEffect, useState} from 'react';
import Header from "../../compoents/header/Header";
import {Box, TextField} from "@mui/material";
import './main.css'
import {getOpenApiResponse} from "../../util/request";
import {getTodayCallNum, setTodayCallNum} from "../../util/config";


const Main = (): JSX.Element => {
    const [prompts, setPrompts] = useState('')
    const [helpText, setHelpText] = useState('')
    const [completion, setCompletion] = useState('')
    const [callNum, setCallNUm] = useState(0)
    const [hasCompletion, setHasCompletion] = useState(false);

    useEffect(()=>{
         const savedCallNum = getTodayCallNum()
         setCallNUm(savedCallNum);
    },[])
    const getResponse = async (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.keyCode === 13){
            if(!prompts.trim().length){
                setHelpText("Please input something")
            }else{
              const response = await getOpenApiResponse(prompts)
                if(response.data){
                    if(response.data.status === 0){
                        setCompletion(response.data.data.completion.trim())
                        setTodayCallNum(response.data.data.callNum)
                        setCallNUm(response.data.data.callNum)
                        setHasCompletion(true)
                    }else if(response.data.status ===100006){
                        setHelpText("Extend call limit for free user")
                    }else{
                        setHelpText("Can not connect to openapi server, please try later")

                    }

                }

            }
        }
    }
  return (
    <>
        <Header/>
        <Box px={1}>
            <TextField
                multiline
                fullWidth
                size="small"
                rows={2}
                value={prompts}
                placeholder="Ask me to write something for you, press enter to get the answer"
                sx={{
                    '& fieldset': {
                        borderWidth: `1px !important`,
                        borderColor: (theme) => `${theme.palette.grey[500]} !important`,
                    }
                }}
                onKeyUp={getResponse}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if(event.target.value.endsWith('\n')){
                        return
                    }
                    setHelpText('')
                    setPrompts(event.target.value);
                }}
                helperText={helpText}
            />

            {hasCompletion &&
            <TextField
                multiline
                fullWidth
                size="small"
                rows={6}
                value={completion}
                sx={{
                    '& fieldset': {
                        borderWidth: `1px !important`,
                        borderColor: (theme) => `${theme.palette.grey[500]} !important`,
                    },
                    mt:2
                }}
            /> }

            <Box my={2}  display={'flex'} justifyContent={'flex-end'}>
                <span className={"usage"}>Usage: {callNum}/5 per day</span>
            </Box>
        </Box>


    </>
  );
};

export default Main;
