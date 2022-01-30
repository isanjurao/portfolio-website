import "./portfolio.css";
import shoping from "./shoping.png";
import spotify from "./spotify.png";
import chat from "./chat.png";
import todo from "./todo.png";
import cal from "./cal.png";
import clock from "./clock.png";
import {Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portitem">
       <section className="s1">
          <div className="main-container">
            <h1>Projects</h1>
            <div className="post-wrap">
              <div>
                <div className="post">
                  <img className="thumbnail" src={shoping} alt="" />
                  <div className="post-view">
                    <h3>Flipkart clone </h3>
                    <p className="p">This is my first project website clone  </p>
                    <Link className="a" to="/flipkart">
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="post">
                  <img className="thumbnail" src={spotify} alt="" />
                  <div className="post-view">
                    <h3>Spotify cloan</h3>
                    <p className="p">Working spotify clone website</p>
                    <Link className="a" to="">
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="post">
                  <img className="thumbnail" src={chat} alt="" />
                  <div className="post-view">
                    <h3>Freechat</h3>
                    <p className="p">With the use of Socket io</p>
                    <Link className="a" to="">
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="post">
                  <img className="thumbnail" src={todo} alt="" />
                  <div className="post-view">
                    <h3>Todo-List</h3>
                    <p className="p">Use todo list and save paper's</p>
                    <Link className="a" to="">
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="post">
                  <img className="thumbnail" src={cal} alt="" />
                  <div className="post-view">
                    <h3>Calculator</h3>
                    <p className="p">Build your own calculator</p>
                    <Link className="a" to="/Calculator">
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="post">
                  <img className="thumbnail" src={clock} alt="" />
                  <div className="post-view">
                    <h3>Stopwatch</h3>
                    <p className="p">Don't waste money on expensive Stopwatch make your own Stopwatch </p>
                    <Link className="a" to="">
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
