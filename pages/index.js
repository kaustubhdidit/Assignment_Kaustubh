import React, {useEffect, useState } from 'react';
import Image from "next/image";

import bell from "../public/images/bell1.png"

export default function Home() {
  const [notificationGranted, setNotificationGranted] = useState(false);

  useEffect(() => {
    // Check the notification permission when the component mounts
    if (Notification.permission === 'granted') {
      setNotificationGranted(true);
    }
  }, []);

  const requestNotificationPermission = () => {
    if (Notification.permission === 'granted') {
      setNotificationGranted(true);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setNotificationGranted(true);
        }
      });
    }
  };

  const sendNotification = () => {
    if (notificationGranted) {
      new Notification('Hello!', {
        body: 'This is a notification from your Next.js app!',
      });
    } else {
      alert('Please grant permission to receive notifications.');
    }
  };

  return (
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
        {notificationGranted ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn" onClick={sendNotification}>Send Notification</button>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn" onClick={requestNotificationPermission}>Grant Notification Permission</button>
          </div>
        )}
      </div>
    </div>
  );
}
