import "./topbar.css";
import person from "./person.png";
import mail from "./mail.png";

export default function topbar({menuOpen,setmenuOpen}) {
  return (
    <div className={"topbar " +  (menuOpen &&  "active")}>
      <div className="container">
        <div className="left">
          <a href="/" className="logo">Shield</a>
          <div className="item">
            <img className="icon" src={person} alt="" />
            <span>+91 1234567890</span>
            <div className="item">
              <img className="icon" src={mail} alt="" />
              <span>ronnie@shield.com</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="itemright" onClick={()=>setmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
