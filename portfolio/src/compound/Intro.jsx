import "./intro.css";
import img from "./profile.png";
import { init } from 'ityped'
import { useEffect ,useRef} from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { showCursor: true,backDelay: 1500, backSpeed:60 , strings: ["Developer", "Designer" ,"Content Creator" ] })
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left1">
        <div className="imgbox">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="right2">
        <div className="con">
          <h2>Hi There I'm</h2>
          <h1>Sanjay Yadav</h1>
          <h3>Freelance <span ref={textRef}>Developer</span></h3>
        </div>
      </div>
    </div>
  );
}
