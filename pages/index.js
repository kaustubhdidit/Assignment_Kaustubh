import { useState } from 'react';
import Image from "next/image";

import bell from "../public/images/bell1.png"
import status from "../public/images/status.png"

export default function Home() {

  const sendNotification = () => {
      new Notification('Hello!', {
        body: 'Notification from Kaustubh',
        icon: bell, // Use your desired icon
      });
  };

  return (
    <div className="top">
    <div className="status" style={{display:"flex", justifyContent:"center"}}>
      <Image src={status} alt="hello" width={375} height={130} />
      </div>
    <div className="holder" style={{ display:"flex", justifyContent:"center"}}>
      
      <div className="layout" style={{ justifyContent:"center"}}>
        <div className="head" style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1>Lorem Ipsum...</h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
        <div className="image" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="c" id="c0" style={{ display: 'flex', justifyContent: 'center', margin:"auto" }} >
            <div className="cin" id="c0in" style={{ display: 'flex', justifyContent: 'center', margin:"auto" }} >
              <div className="c" id="c1" style={{ display: 'flex', justifyContent: 'center', margin:"auto" }} >
                <div className="cin" id="c1in" style={{ display: 'flex', justifyContent: 'center', margin:"auto" }} >
                  <div className="c" id="c2" style={{ display: 'flex', justifyContent: 'center',margin:"auto" }} >
                    <div className="cin" id="c2in" style={{ display: 'flex', justifyContent: 'center', margin:"auto" }} >
                      <div className="c" id="c3" style={{ display: 'flex', justifyContent: 'center', margin:"auto" }} >
                        <div className="cin" id="c3in" style={{ display: 'flex', justifyContent: 'center', margin:"auto" }} >
                          <div id="one" style={{margin:"auto"}}>
                            <Image src={bell} alt="hello" width={120} height={130} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn" onClick={sendNotification}>Send Notification</button>
        </div>
      </div>
    </div>
    </div>
  );
}
