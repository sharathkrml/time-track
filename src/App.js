import "./App.css";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
function App() {
  const [active, setActive] = useState("daily");
  const [work, setWork] = useState({
    daily: {
      current: 5,
      previous: 7,
    },
    weekly: {
      current: 32,
      previous: 36,
    },
    monthly: {
      current: 103,
      previous: 128,
    },
  });
  const [play, setPlay] = useState({
    daily: {
      current: 1,
      previous: 2,
    },
    weekly: {
      current: 10,
      previous: 8,
    },
    monthly: {
      current: 23,
      previous: 29,
    },
  });
  const [study, setStudy] = useState({
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 4,
      previous: 7,
    },
    monthly: {
      current: 13,
      previous: 19,
    },
  });
  const [exercise, setExercise] = useState({
    daily: {
      current: 1,
      previous: 1,
    },
    weekly: {
      current: 4,
      previous: 5,
    },
    monthly: {
      current: 11,
      previous: 18,
    },
  });
  const [social, setSocial] = useState({
    daily: {
      current: 1,
      previous: 3,
    },
    weekly: {
      current: 5,
      previous: 10,
    },
    monthly: {
      current: 21,
      previous: 23,
    },
  });
  const [selfcare, setSelfcare] = useState({
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 2,
      previous: 2,
    },
    monthly: {
      current: 7,
      previous: 11,
    },
  });
  return (
    <div className="App">
      <div className="grid">
        <div className="card profile">
          <ProfileCard active={active} setActive={setActive} />
        </div>
        <div className="card small-card work">
          <Card
            title="Work"
            current={work[active].current}
            timeframes={active === "daily" ? "Day" : active.charAt(0).toUpperCase()+active.slice(1, -2)}
            previous={work[active].previous}
          />
        </div>
        <div className="card small-card play">
          <Card
            title="Play"
            current={play[active].current}
            timeframes={active === "daily" ? "Day" : active.charAt(0).toUpperCase()+active.slice(1, -2)}
            previous={play[active].previous}
          />
        </div>
        <div className="card small-card study">
          <Card
            title="Study"
            current={study[active].current}
            timeframes={active === "daily" ? "Day" : active.charAt(0).toUpperCase()+active.slice(1, -2)}
            previous={study[active].previous}
          />
        </div>
        <div className="card small-card exercise">
          <Card
            title="Exercise"
            current={exercise[active].current}
            timeframes={active === "daily" ? "Day" : active.charAt(0).toUpperCase()+active.slice(1, -2)}
            previous={exercise[active].previous}
          />
        </div>
        <div className="card small-card social">
          <Card
            title="Social"
            current={social[active].current}
            timeframes={active === "daily" ? "Day" : active.charAt(0).toUpperCase()+active.slice(1, -2)}
            previous={social[active].previous}
          />
        </div>
        <div className="card small-card self-care">
          <Card
            title="Self Care"
            current={selfcare[active].current}
            timeframes={active === "daily" ? "Day" : active.charAt(0).toUpperCase()+active.slice(1, -2)}
            previous={selfcare[active].previous}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
