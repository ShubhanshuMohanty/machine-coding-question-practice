import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const intervalRef = useRef();
  const secRef = useRef(sec);
  const minRef = useRef(min);
  const hourRef = useRef(hour);

  const onChangeSec = (e) => {
    e.target.value.length > 2
      ? setSec((prev) => {
          secRef.current = e.target.value.slice(0, 2);
          return secRef.current;
        })
      : setSec((prev) => {
          secRef.current = e.target.value;
          return secRef.current;
        });

    // e.target.value.length > 2
    //   ? secRef.value=e.target.value.slice(0, 2)
    //   : secRef.value = e.target.value;
    // setSec(secRef.current)
  };

  const onChangeMin = (e) => {
    e.target.value.length > 2
      ? setMin((prev) => {
          minRef.current = e.target.value.slice(0, 2);
          return minRef.current;
        })
      : setMin((prev) => {
          minRef.current = e.target.value;
          return minRef.current;
        });
  };

  const onChangeHour = (e) => {
    e.target.value.length > 2
      ? setHour((prev) => {
          hourRef.current = e.target.value.slice(0, 2);
          return hourRef.current;
        })
      : setHour((prev) => {
          hourRef.current = e.target.value;
          return hourRef.current;
        });
  };

  const intervel = () => {
    // if (!intervalRef.current) {
      console.log("sssm");
      
      intervalRef.current = setInterval(() => {
        timer();
      }, 1000);
    // }
  };

  const onStart = () => {
    intervel();
  };

  const onStop = () => {
    clearInterval(intervalRef.current);
  };
  const timer = () => {
    console.log("sec=" + sec, "hour=" + hour, "min=" + min);

    if (secRef.current === 0 && minRef.current === 0 && hourRef.current === 0) {
      console.log("hh");
      clearInterval(intervalRef.current);
      return;
    }

    if (secRef.current > 60) {
      setMin((prev) => {
        minRef.current = prev + 1;
        return minRef.current;
      });
      setSec((prev) => {
        secRef.current = prev - 60;
        return prev - 60;
      });
    }
    if (minRef.current > 60) {
      setHour((prev) => {
        hourRef.current = prev + 1;
        return prev + 1;
      });
      setMin((prev) => {
        minRef.current = prev - 60;
        return prev - 60;
      });
    }
    if (secRef.current != 0) {
      setSec((prev) => {
        secRef.current = prev - 1;
        return secRef.current;
      });
      console.log("secRef.current=" + secRef.current);
    }
    if(minRef.current != 0 && secRef.current == 0) {
      setSec((prev)=>{
        secRef.current = 59;
        return 59;
      })
      setMin((prev) => {
        minRef.current = prev - 1;
        return prev - 1;
      })

    }
    if(hourRef.current !=0 && minRef.current==0)
    {
      setMin((prev)=>{
        minRef.current = 59;
        return 59;
      })
      setHour((prev)=>{
        hourRef.current = prev - 1;
        return prev - 1;
      })
    }
  };

  return (
    <>
      <input type="number" value={hour} maxLength={2} onChange={onChangeHour} />
      <input type="number" value={min} maxLength={2} onChange={onChangeMin} />
      <input type="number" value={sec} maxLength={2} onChange={onChangeSec} />
      <div>
        <div>
          <button onClick={onStart}>Start</button>
          <button>Continue</button>
        </div>
        <div>
          <button onClick={onStop}>Stop</button>
        </div>
      </div>
    </>
  );
}

export default App;
