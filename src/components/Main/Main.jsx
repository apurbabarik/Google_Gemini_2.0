import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
    const { 
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult?
            <>
             <div className="greet">
                <p><span>Hello,User</span></p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Welcome User</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>I am a Good boy</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>HeYYYYYYYY!!!!</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>How are You?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>    
            : <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
        }
           
            <div className="main-bottom">
                <div className="searchbox">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='Enter Prompt here' value={input}/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon}alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display incorrect info,including about people,so double check it's responses.Your Privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main