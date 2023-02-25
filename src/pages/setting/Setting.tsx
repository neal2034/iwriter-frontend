import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from '@mui/material';
import React, {useEffect, useState} from 'react';
import Header from "../../compoents/header/Header";
import './setting.css'

const Setting = (): JSX.Element => {
    const [tone, setTone] = useState('Activity')
    const [length,setLength] = useState('Thousand')
    const [modal, setModal] = useState('Davinci')

    const onModalChange = (event:any, value:string)=>{
        setModal(value)
        localStorage.setItem('modal', value)
    }

    const onToneChange = (event:any, value:string)=>{
        setTone(value)
        localStorage.setItem('tone', value)
    }

    const onLengthChange = (event:any, value:string) => {
        setLength(value)
        localStorage.setItem('lenLimit', value)
    }

    useEffect(()=>{
        const savedModal = localStorage.getItem('modal')
        if(savedModal){
            setModal((savedModal))
        }
        const savedTone = localStorage.getItem('tone')
        if(savedTone){
            setTone(savedTone)
        }
        const savedLength = localStorage.getItem('lenLimit')
        if(savedLength){
            setLength(savedLength)
        }
    },[])
  return (
    <>
        <Header isSetting={true}/>
        <FormControl>
            <Grid container alignItems={'center'} pl={2} mt={5}>
                <Grid item xs={1} mr={1}>
                    <FormLabel className={'label'}>Tone:</FormLabel>
                </Grid>
                <Grid item xs={10}>
                    <RadioGroup
                        row
                        value={tone}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={onToneChange}

                    >
                        <FormControlLabel value="Activity" control={<Radio />} label="Activity" />
                        <FormControlLabel value="Encouraging" control={<Radio />} label="Encouraging" />
                        <FormControlLabel
                            value="Funny"
                            disabled
                            control={<Radio  />}
                            label="Funny"
                            className={'proRadio'}
                        />
                        <FormControlLabel
                            value="Compassionate"
                            disabled
                            control={<Radio />}
                            label="Compassionate"
                            className={'proRadio'}
                            sx={{
                                'margin-left':'-35px'
                            }}
                        />
                    </RadioGroup>
                </Grid>

                <Grid item xs={1} mr={1}>
                    <FormLabel className={'label'}>Length:</FormLabel>
                </Grid>
                <Grid item xs={10}>
                    <RadioGroup
                        row
                        value={length}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={onLengthChange}

                    >
                        <FormControlLabel value="THOUSAND" control={<Radio />} label="1000" />
                        <FormControlLabel
                            value="UNLIMITED"
                            disabled
                            control={<Radio  />}
                            label="Unlimited"
                            className={'proRadio'}
                        />

                    </RadioGroup>
                </Grid>


                <Grid item xs={1} mr={1}>
                    <FormLabel className={'label'}>Modal:</FormLabel>
                </Grid>
                <Grid item xs={10}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={modal}
                        onChange={onModalChange}
                    >
                        <FormControlLabel value="DAVINCI" control={<Radio />} label="Davinci" />
                        <FormControlLabel value="CURIE" control={<Radio />} label="Curie" />
                        <FormControlLabel
                            value="BABBAGE"
                            disabled
                            control={<Radio  />}
                            label="Babbage"
                            className={'proRadio'}
                        />
                        <FormControlLabel
                            value="ADA"
                            disabled
                            control={<Radio />}
                            label="Ada"
                            className={'proRadio'}
                            sx={{
                                'margin-left':'-35px'
                            }}
                        />
                    </RadioGroup>
                </Grid>
            </Grid>
        </FormControl>
    </>
  );
};

export default Setting;
