import React, { useState, useEffect } from "react";
import "./Animation.css";

const fieldWidth = 700;
const fieldHeight = 500;
const ballSize = 110; 
const minSpinSpeed = 1;
const maxSpinSpeed = 10;
const xVelocity = 5;
const yVelocity = 5;

const Animation = () => {
  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [angle, setAngle] = useState(0);
  const [angleSpeed, setAngleSpeed] = useState(10);
  const [ballType, setBallType] = useState("none");

  const xMax = fieldWidth - ballSize - 2;
  const yMax = fieldHeight - ballSize - 2;

  const toggleRunning = () => {
    setRunning(!running);
  };

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        // คำนวณตำแหน่ง x
        if (goRight) {
          setX((prevX) => Math.min(prevX + xVelocity, xMax));
          if (x >= xMax) {
            setGoRight(false);
          }
        } else {
          setX((prevX) => Math.max(prevX - xVelocity, 0));
          if (x <= 0) {
            setGoRight(true);
          }
        }

        // คำนวณตำแหน่ง y
        if (goDown) {
          setY((prevY) => Math.min(prevY + yVelocity, yMax));
          if (y >= yMax) {
            setGoDown(false);
          }
        } else {
          setY((prevY) => Math.max(prevY - yVelocity, 0));
          if (y <= 0) {
            setGoDown(true);
          }
        }

        // คำนวณมุมการหมุน
        setAngle((prevAngle) => prevAngle + angleSpeed);
        if (x >= xMax || x <= 0 || y >= yMax || y <= 0) {
          const newAngleSpeed =
            Math.random() * (maxSpinSpeed - minSpinSpeed + 1) + minSpinSpeed;
          setAngleSpeed((prevSpeed) =>
            prevSpeed > 0 ? newAngleSpeed : newAngleSpeed * -1
          );
          setAngleSpeed((prevSpeed) => prevSpeed * -1);
        }
      }, 40);
    }

    return () => clearInterval(intervalId);
  }, [
    x,
    y,
    angle,
    running,
    goRight,
    goDown,
    angleSpeed,
    ballType,
    xMax,
    yMax,
  ]);

  const getBallStyle = () => {
    const baseStyle = {
      width: `${ballSize}px`,
      height: `${ballSize}px`,
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      transform: `rotate(${angle}deg)`,
      backgroundSize: "cover",
      borderRadius: `${ballSize / 2}px`,
    };

    switch (ballType) {
      case "basketball":
        return {
          ...baseStyle,
          backgroundImage: "url('https://i.ibb.co/LdZ9xpn/Basketball.png')",
        };
      case "football":
        return {
          ...baseStyle,
          backgroundImage: "url('https://i.ibb.co/ZxQ2TqD/Football.png')",
        };
      case "volleyball":
        return {
          ...baseStyle,
          backgroundImage: "url('https://i.ibb.co/9rtWyFq/Volleyball.png')",
          backgroundSize: "100%",
        };
      case "human":
        return {
          ...baseStyle,
          backgroundImage: "url('https://i.ibb.co/GdSNhNb/Humen.jpg')",
        };
      case "cartoon":
        return {
          ...baseStyle,
          backgroundImage: "url('https://i.ibb.co/JC1Dv2R/cartoon.jpg')",
        };
      case "logo":
        return {
          ...baseStyle,
          backgroundImage: "url('https://i.ibb.co/LNF8QC8/logo.jpg')",
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: "brown",
        };
    }
  };

  // เพิ่ม Event Listener สำหรับ Keydown
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "0") {
        setBallType("none");
      } else if (event.key === "1") {
        setBallType("basketball");
      } else if (event.key === "2") {
        setBallType("football");
      } else if (event.key === "3") {
        setBallType("volleyball");
      } else if (event.key === "4") {
        setBallType("human");
      } else if (event.key === "5") {
        setBallType("cartoon");
      } else if (event.key === "6") {
        setBallType("logo");
      } else if (event.code === "Space") {
        toggleRunning();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="Animation-container">
      <div
        id="Animation-field"
        style={{
          width: fieldWidth,
          height: fieldHeight,
          position: "relative",
        }}
      >
        <div id="Animation-ball" style={getBallStyle()}></div>
      </div>
      <div id="Animation-control">
        <button
          onClick={toggleRunning}
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
        >
          {running ? (
            <span className="bi bi-pause">PAUSE</span>
          ) : (
            <span className="bi bi-play">&nbsp;RUN</span>
          )}
        </button>
        <button
          onClick={() => setBallType("none")}
          className="btn btn-primary"
        >
          None
        </button>
        <button
          onClick={() => setBallType("basketball")}
          className="btn btn-primary"
        >
          Basketball
        </button>
        <button
          onClick={() => setBallType("football")}
          className="btn btn-primary"
        >
          Football
        </button>
        <button
          onClick={() => setBallType("volleyball")}
          className="btn btn-primary"
        >
          Volleyball
        </button>
        <button
          onClick={() => setBallType("human")}
          className="btn btn-primary"
        >
          Human
        </button>
        <button
          onClick={() => setBallType("cartoon")}
          className="btn btn-primary"
        >
          Cartoon
        </button>
        <button
          onClick={() => setBallType("logo")}
          className="btn btn-primary"
        >
          Logo
        </button>
      </div>
    </div>
  );
};

export default Animation;