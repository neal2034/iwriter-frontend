import React from 'react';
import './header.css'
import {Box} from "@mui/material";
import {
    goBack,
    goTo,
} from 'react-chrome-extension-router';
import Setting from "../../pages/setting/Setting";


interface IProps{
    isSetting?: boolean;
}
const Header = (props:IProps): JSX.Element => {
    const {isSetting = false} = props
    const goSetting = ()=>{
        goTo(Setting)
    }
    const goMain = ()=>{
        goBack()
    }
  return (
    <Box className={'header'}>
        {isSetting? <img src="/back.png" onClick={goMain} alt="back" className={'icon back'}/>: <img src="/icon.png" alt="icon" className={'icon'}/>}
        <Box>
            {!isSetting && <img src="/history.png" alt="history" className={'history icon'}/>}
            {!isSetting &&  <img src="/setting.png" onClick={goSetting} alt="setting" className={'setting icon'}/>}
            {isSetting && <span className={'upgrade'}>Upgrade</span>}
        </Box>

    </Box>
  );
};

export default Header;
