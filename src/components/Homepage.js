import React from "react"
import Logo from "../images/react-icon-small.png"

export default function Homepage() 
{
    return (
        <div>
            <div className="article">
                <img className="image2" src={Logo} alt=""></img>
                <h2>Bla Bla1</h2>
                <p>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla BlaBla Bla Bla Bla.</p>
            </div>
            
            <div className="article">
                <img className="image2" src={Logo} alt=""></img>
                <h2>Bla Bla2</h2>
                <p>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla BlaBla Bla Bla Bla.</p>
            </div>

            <div className="article">
                <img className="image2" src={Logo} alt=""></img>
                <h2>Bla Bla3</h2>
                <p>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla BlaBla Bla Bla Bla.</p>
            </div>
        </div>
    )
}

