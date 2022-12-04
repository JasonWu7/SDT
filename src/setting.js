import { useState, useEffect } from 'react';
import './setting.css';
import settingIcon from './setting.svg'
import settingIconFill from './setting-filling.svg'
import keycode from "./key-char"
import {useRef} from 'react';


function Setting(props) {
 const [setting, openSetting] = useState(false);
 const [sc, setsc] = useState(false);
 const key = useRef(null);
 const address = useRef(null);

 function setShortcut(){
    console.log(key.current.value, address.current.value);
    setsc(prev => {return !prev});
    for(var i in keycode){
        var e = keycode[i];
        if(e.char == key.current.value){
            localStorage.setItem(e.key, address.current.value);
            alert(`Successfully Set Key ${e.char}`);
        }
    }
 }

 function openInstruction(){
    window.open("https://github.com/JasonWu7/smalldesktop");
 }

  return (
    <div className='Setting'>
        <img src={settingIcon} className="Icon"
        onClick={function () {
            openSetting(prev => {return !prev})
        }}
        onMouseEnter={function (e) {
        return (e.currentTarget.src = settingIconFill);
        }}
        onMouseLeave={function (e) {
        return (e.currentTarget.src = settingIcon);
        }}
    ></img>
    <br/><br/>
        {setting && <div className='Setting-panel'>
            <button onClick={props.handleBg}>Change Background Image</button><hr/>
            <button onClick={props.handleNt}>Add Notes</button><hr/>
            <button onClick={function () {
            setsc(prev => {return !prev})
        }}>Set Shortcut</button><hr/>
            <button onClick={openInstruction}>Instruction</button><hr/>
            </div>}
            {sc && <div className='Shortcut-setting'>
                <input placeholder='Enter Key' ref = {key}/><br/>
                <input placeholder='Enter Address' ref = {address}/><br/>
                <button onClick={setShortcut}> Confirm</button>
                </div>}
        
    </div>
    
  );
}

export default Setting;
