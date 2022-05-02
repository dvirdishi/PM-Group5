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
                            <p className="titleAboutDONA">CEO & Founder</p>
                            <p>Aibbat server has a LVL 120 Jester Full DEX.</p>
                            <p>OfekEl@ac.sce.ac.il</p>
                            <br/>
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
                                <p className="titleAboutDONA">Art Director</p>
                                <p>Mushroom server has a LVL 99 RM AOE Full INT.</p>
                                <p>dvirdi@ac.sce.ac.il</p>
                                <br/>
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
                            <p className="titleAboutDONA">Art Director</p>
                            <p>Sakura Chan has an Healing abilities , almost crashed Oruchimaru </p>
                            <p>aviyada@ac.sce.ac.il</p>
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
                                <p className="titleAboutDONA">Designer</p>
                                <p>Falling Star</p>
                                <p>nirandi@ac.sce.ac.il</p>
                                <a href="https://il.linkedin.com/in/niran-dishi">
                                    <br/>
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



