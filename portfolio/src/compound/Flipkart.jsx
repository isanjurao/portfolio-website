import "./flipkart.css"
import beanbag from "./images/beanbag.webp"
import blue from "./images/blue.webp"
import cap from "./images/caps.webp"
import flipkart from "./images/flipkart.png"
import floorseating from "./images/floorseating.webp"
import fwd from "./images/fwd.webp"
import glass from "./images/glass.webp"
import headphones from "./images/headphones.webp"
import heater from "./images/heater.webp"
import ht from "./images/ht.webp"
import img from "./images/img.avif"
import keyboard from "./images/keyboard.webp"
import mholder from "./images/mholder.webp"
import phone from "./images/phone.webp"
import sarees from "./images/sarees.webp"
import shirt from "./images/shirt.webp"
import sofa from "./images/sofa.webp"
import tvunites from "./images/ht.webp"
import watch from "./images/watch.webp"
import webcam from "./images/webcam.webp"

export default function Flipkart() {
  return   <div className="flipkart">
   



<header>
        <nav>
            <div className="logo">
             <img src={flipkart} alt=""/>
            </div>
            <ul>
                <li><a href="home.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="contact.html">CONTACT US</a></li>
            </ul>
            <div className="search">
                <input type="text" name="" id="" placeholder="Search Here"/>
                <button  className="btn" >search</button>
            </div>
        </nav>
    </header>
   
      <div className="container">
           <div className="slider">
            <img className="img" src={img} alt="" width="1250p" height="400px"/
            >
            </div>

           <div className="container">
               <h2 className="my-2">Trending Offer's</h2>
               <div className="cards">
               <div className="card-item">
                   <img src={watch} alt="" width="150px" height="150px"/>

                   <div className="lines">
                       <p className="text-center my-1">Smart Watch</p>
                       <p id="per" className="text-center my-1">Extra 20% off</p>
                       <p className="text-center my-1">Great Savings!</p>
                   </div>
               </div>
           
             <div className="card-item">
                   <img src="images/caps.webp" src={cap} alt="" width="150px" height="150px"/>

                  <div className="lines">
                    <p className="text-center my-1">Preminu Caps</p>
                    <p id="per" className="text-center my-1">Upto 70% off</p>
                    <p className="text-center my-1">Grab or Gone!</p>
                </div>
               </div>
        
               <div className="card-item">
                <img src={heater} alt="" width="150px" height="150px"/>

               <div className="lines">
                 <p className="text-center my-1">Room Heater</p>
                 <p id="per" className="text-center my-1">Extra 50% off</p>
                 <p className="text-center my-1">Buy Now!</p>
             </div>
            </div>
            <div className="card-item">
                <img src={headphones} alt="" width="150px" height="150px"/>

               <div className="lines">
                 <p className="text-center my-1">Smart Watch</p>
                 <p id="per" className="text-center my-1">Extra 5% off</p>
                <p className="text-center my-1">Great Savings!</p>
             </div>
            </div>
            <div className="card-item">
                <img src={sarees} alt="" width="150px" height="150px"/>

               <div className="lines">
                 <p className="text-center my-1">women's sarees</p>
                 <p id="per" className="text-center my-1">Extra 10% off</p>
                    <p className="text-center my-1">Explore Now!</p>
             </div>
            </div>
            <div className="card-item">
                <img src={shirt} alt="" width="150px" height="150px"/>

               <div className="lines">
                 <p className="text-center my-1">Men's Shirts</p>
                 <p id="per" className="text-center my-1">Top Offers</p>
                    <p className="text-center my-1">Shop Now!</p>
             </div>
            </div>
             </div>
            </div>
            <hr/>
            <div className="card">
                <h2 className="my-2">Top Deals on Accessories</h2>
                <div className="cards">
                <div className="card-item">
                    <img src={phone} alt="" width="150px" height="150px"/>
 
                    <div className="lines">
                        <p className="text-center my-1">Bset Brand</p>
                        <p id="per" className="text-center my-1">Shop Now</p>
                        <p className="text-center my-1">For all phone models</p>
                    </div>
                </div>
            
              <div className="card-item">
                    <img src={keyboard} alt="" width="150px" height="150px"/>
 
                   <div className="lines">
                     <p className="text-center my-1">keyboard Skins</p>
                     <p id="per" className="text-center my-1">Upto 65% off</p>
                     <p className="text-center my-1">Grab or Gone!</p>
                 </div>
                </div>
         
                <div className="card-item">
                 <img src={glass} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Glass Cases</p>
                  <p id="per" className="text-center">Shop Now</p>
                  <p className="text-center my-1">For all phone models</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={mholder} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Mobile Holder</p>
                  <p id="per" className="text-center my-1">Extra 15% off</p>
                 <p className="text-center my-1">Shop Now!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={webcam} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Web cam</p>
                  <p id="per" className="text-center my-1">For 490</p>
                     <p className="text-center my-1">Logitech Quantum & more</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={blue} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Headphones</p>
                  <p id="per" className="text-center my-1">Extra 5% off</p>
                     <p className="text-center my-1">Explore Now!</p>
              </div>
             </div>
              </div>
             </div>
             <hr/>
             <div className="card">
                <h2 className="my-2">Furniture Bestsellers</h2>
                <div className="cards">
                <div className="card-item">
                    <img src={beanbag} alt="" width="150px" height="150px"/>
 
                    <div className="lines">
                        <p className="text-center my-1">Bean Bag cover</p>
                        <p id="per" className="text-center my-1">Min 80% off</p>
                        <p className="text-center my-1">XL,XXL & More</p>
                    </div>
                </div>
            
              <div className="card-item">
                    <img src={tvunites}alt="" width="150px" height="150px"/>
 
                   <div className="lines">
                     <p className="text-center my-1">TV Units</p>
                     <p id="per" className="text-center my-1">From 2100</p>
                     <p className="text-center my-1">Forzza,Zuari & More</p>
                 </div>
                </div>
         
                <div className="card-item">
                 <img src={floorseating} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Floor Seating</p>
                  <p id="per" className="text-center my-1">From 1799</p>
                  <p className="text-center my-1">New Collection</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={ht} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Home Temple</p>
                  <p id="per" className="text-center my-1">From 399</p>
                 <p className="text-center my-1">Trendy Collection</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={sofa} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Sofa Set</p>
                  <p id="per" className="text-center my-1">Min 50% off</p>
                     <p className="text-center my-1">Bharat Lifestyleb & More</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={fwd} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Fwd Furniture</p>
                  <p id="per" className="text-center my-1">From 4299</p>
                     <p className="text-center my-1">Tv units cabinets & more</p>
              </div>
             </div>
              </div>
             </div>
             <hr/>
             <div className="card">
                <h2 className="my-2">Trending Offer's</h2>
                <div className="cards">
                <div className="card-item">
                    <img src={watch} alt="" width="150px" height="150px"/>
 
                    <div className="lines">
                        <p className="text-center my-1">Smart Watch</p>
                        <p id="per" className="text-center my-1">Extra 20% off</p>
                        <p className="text-center my-1">Great Savings!</p>
                    </div>
                </div>
            
              <div className="card-item">
                    <img src={cap} alt="" width="150px" height="150px"/>
 
                   <div className="lines">
                     <p className="text-center my-1">Preminu Caps</p>
                     <p id="per" className="text-center my-1">Uptp 70% off</p>
                     <p className="text-center my-1">Grab or Gone!</p>
                 </div>
                </div>
         
                <div className="card-item">
                 <img src={heater} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Room Heater</p>
                  <p id="per" className="text-center my-1">Extra 50% off</p>
                  <p className="text-center my-1">Buy Now!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={headphones} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Smart Watch</p>
                  <p id="per" className="text-center my-1">Extra 5% off</p>
                 <p className="text-center my-1">Great Savings!</p>
              </div>
             </div>
             <div className="card-item">
                 <img ssrc={sarees} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">women's sarees</p>
                  <p id="per" className="text-center my-1">Extra 10% off</p>
                     <p className="text-center my-1">Explore Now!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={shirt} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Men's Shirts</p>
                  <p id="per" className="text-center my-1">Top Offers</p>
                     <p className="text-center my-1">Shop Now!</p>
              </div>
             </div>
              </div>
             </div><hr/>
             <div className="card">
                <h2 className="my-2">Trending Offer's</h2>
                <div className="cards">
                <div className="card-item">
                    <img src={watch} alt="" width="150px" height="150px"/>
 
                    <div className="lines">
                        <p className="text-center my-1">Smart Watch</p>
                        <p id="per" className="text-center my-1">Extra 20% off</p>
                        <p className="text-center my-1">Great Savings!</p>
                    </div>
                </div>
            
              <div className="card-item">
                    <img src={cap} alt="" width="150px" height="150px"/>
 
                   <div className="lines">
                     <p className="text-center my-1">Preminu Caps</p>
                     <p id="per" className="text-center my-1">Uptp 70% off</p>
                     <p className="text-center my-1">Grab or Gone!</p>
                 </div>
                </div>
         
                <div className="card-item">
                 <img src={heater} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Room Heater</p>
                  <p id="per" className="text-center my-1">Extra 50% off</p>
                  <p className="text-center my-1">Buy Now!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={headphones} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Smart Watch</p>
                  <p id="per" className="text-center my-1">Extra 5% off</p>
                 <p className="text-center my-1">Great Savings!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={sarees} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">women's sarees</p>
                  <p id="per" className="text-center my-1">Extra 10% off</p>
                     <p className="text-center my-1">Explore Now!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={shirt}alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Men's Shirts</p>
                  <p id="per" className="text-center my-1">Top Offers</p>
                     <p className="text-center my-1">Shop Now!</p>
              </div>
             </div>
              </div>
             </div><hr/>
             <div className="card">
                <h2 className="my-2">Trending Offer's</h2>
                <div className="cards">
                <div className="card-item">
                    <img src={watch} alt="" width="150px" height="150px"/>
 
                    <div className="lines">
                        <p className="text-center my-1">Smart Watch</p>
                        <p id="per" className="text-center my-1">Extra 20% off</p>
                        <p className="text-center my-1">Great Savings!</p>
                    </div>
                </div>
            
              <div className="card-item">
                    <img src={cap} alt="" width="150px" height="150px"/>
 
                   <div className="lines">
                     <p className="text-center my-1">Preminu Caps</p>
                     <p id="per" className="text-center my-1">Uptp 70% off</p>
                     <p className="text-center my-1">Grab or Gone!</p>
                 </div>
                </div>
         
                <div className="card-item">
                 <img src={heater} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Room Heater</p>
                  <p id="per" className="text-center my-1">Extra 50% off</p>
                  <p className="text-center my-1">Buy Now!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={headphones} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Smart Watch</p>
                  <p id="per" className="text-center my-1">Extra 5% off</p>
                 <p className="text-center my-1">Great Savings!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={sarees} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">women's sarees</p>
                  <p id="per" className="text-center my-1">Extra 10% off</p>
                     <p className="text-center my-1">Explore Now!</p>
              </div>
             </div>
             <div className="card-item">
                 <img src={shirt} alt="" width="150px" height="150px"/>
 
                <div className="lines">
                  <p className="text-center my-1">Men's Shirts</p>
                  <p id="per" className="text-center my-1">Top Offers</p>
                     <p className="text-center my-1">Shop Now!</p>
              </div>
             </div>
              </div>
             </div>
       </div>
    
    <footer className="flex-all-center"> 
        <p >copyright &copy; Clonecart.com</p>
    </footer>


    </div>

}
