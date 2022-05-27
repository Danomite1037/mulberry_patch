import React from "react";
import Cookies3 from '../imgs/cookies3.jpg'
import Cookies4 from '../imgs/cookies4.jpg'
import Cookies5 from '../imgs/cookies5.jpg'
import Cookies6 from '../imgs/cookies6.jpg'
import Cookies7 from '../imgs/cookies7.jpg'
import Cookies8 from '../imgs/cookies8.jpg'
import Cookies33 from '../imgs/cookies33.jpg'
import Cookies35 from '../imgs/cookies35.jpg'

const EasterCookies = (props) => {
    return (
        <div>
            {/* Needs to be fixed after getting picture and product info in db */}
            <h1 className="display-4">Easter Cookies</h1>
            <div className="d-flex justify-content-between mx-auto my-2" style={{width: "80%"}}>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={Cookies3} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={Cookies4} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={Cookies5} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={Cookies6} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={Cookies7} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
            </div>
            <div className="d-flex justify-content-between mx-auto my-2" style={{width: "80%"}}>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={Cookies8} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={Cookies33} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={Cookies35} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
                {/* <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={""} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div>
                <div style={{width: "200px", border: "2px solid black"}}>
                    <h3>Easter Cookies</h3>
                    <img src={""} alt="" style={{width: "180px"}}/>
                    <p>Check these out!</p>
                </div> */}
            </div>
        </div>
    );
} 

export default EasterCookies;