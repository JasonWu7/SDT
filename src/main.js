import { useState, useEffect } from 'react';
import './Main.css';
import Clock from './clock';
import Setting from './setting';


function Main() {
  var imgAddress;
  if(localStorage.getItem("bgi") == null){
    imgAddress = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";
    localStorage.setItem("bgi", "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg");
  }
  else{
    imgAddress = localStorage.getItem("bgi");
  }
  const [imgpath, setPath] = useState(imgAddress);
  const [notes, addNotes] = useState([]);

  function setBg(){
    var address = prompt("Enter Image Address");
    if(address.length>5){
        setPath(address);
        localStorage.setItem("bgi", address);
    }
    else{
        alert("Invalid Image Address");
    }
  }

  function setNote(){
    var note = prompt("Enter Note");
    var item = {inote: note, key: notes.length+1}
    if(note == null){
        return;
    }
    else if(note.length>5){
        addNotes(prev => {
            return [...prev, item]
        });
    }
    else{
        alert("Invalid Notes");
    }
  }

  const notesContent = notes.map(n => <div className='Notes' key={n.key}>{n.key+ ". " + n.inote} <br/></div>)

    function UseShortcut(keynum){
        var address = localStorage.getItem(keynum.toString());
        if(address != null && address.length > 5){
            window.open(address)
        }
    }

    document.onkeydown = function(e) {
        
        let key = window.event.keyCode;
        if(key == 13){
            setNote();
        }
        else{
            UseShortcut(key);
        }
        
    }
 
  

  return (
    <div className="Main" style={{backgroundImage: "url(" + imgpath + ")"}}>
        <Clock/>
        <Setting handleBg={setBg} handleNt={setNote}/>
        <br/>
        {notesContent}
    </div>
  );
}

export default Main;
