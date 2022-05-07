import React from "react";
import Ofek from "../images/Ofek.jpg"
import Niran from "../images/Niran.jpg"
import Dvir from "../images/Dvir.jpg"
import Aviya from "../images/Aviya.jpg"
import DONA from "../images/1.png"
import "../index.css";



export default function AboutDONA() {
    return (
        <div>

        <div className="BottomMessageBar">
            <img src={DONA} alt='profile image' className="ButtomBarPic"></img>
            <h1 className='h1_Message'><b>Donacontactmail@gmail.com</b></h1>
            <h1 className='h2_Message'>About Us</h1>
        </div>


            <div className="rowAboutDONA">
            <div className="columnAboutDONA">
                <div className="cardAboutDONA">

                        <div className="containerAboutDONA">
                            <img src={Ofek} alt='profile image' className="AboutPersonPic"></img>   
                            <h2>Ofek Elgozi</h2>
                            <br></br>
                            <p className="titleAboutDONA"><b>CEO & Founder</b></p>
                            <p><b>Ofekel@ac.sce.ac.il</b></p>
                            <br/>
                            <p>
                                <a href="https://il.linkedin.com/in/ofek-elgozi">
                                    <p><button className="About_button" >Contact</button></p>
                                </a>
                            </p>
                        </div>
                </div>
            </div>

                <div className="columnAboutDONA">
                    <div className="cardAboutDONA">

                            <div className="containerAboutDONA">
                                <img src={Dvir} alt='profile image' className="AboutPersonPic"></img>   
                                <h2>Dvir Dishi</h2>
                                <br></br>
                                <p className="titleAboutDONA"><b>Art Director</b></p>
                                <p><b>Dvirdi@ac.sce.ac.il</b></p>
                                <br/>
                                <a href="https://il.linkedin.com/in/dvir-dishi">
                                    <p><button className="About_button" >Contact</button></p>
                                </a>
                            </div>
                    </div>
                </div>

                <div className="columnAboutDONA">
                    <div className="cardAboutDONA">

                        <div className="containerAboutDONA">
                            <img src={Aviya} alt='profile image' className="AboutPersonPic"></img>   
                            <h2>Aviya David</h2>
                            <br></br>
                            <p className="titleAboutDONA"><b>Art Director</b></p>
                            <p><b>Aviyada@ac.sce.ac.il</b></p>
                            <br/>
                            <a href="https://il.linkedin.com/in/aviya-david-software">
                                <p><button className="About_button" >Contact</button></p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="columnAboutDONA">
                    <div className="cardAboutDONA">

                            <div className="containerAboutDONA">
                                <img src={Niran} alt='profile image' className="AboutPersonPic"></img>   
                                <h2>Niran Dishi</h2>
                                <br></br>
                                <p className="titleAboutDONA"><b>Designer</b></p>
                                <p><b>Nirandi@ac.sce.ac.il</b></p>
                                <a href="https://il.linkedin.com/in/niran-dishi">
                                    <br/>
                                <p><button className="About_button" >Contact</button></p>
                                </a>
                            </div>
                    </div>
                </div>
            </div>

        </div>


)
}



