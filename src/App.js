import "./App.css";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    const fetchData = () => {
      fetch("data.json").then((response) =>
        response.json().then((myJson) => {
          console.log(myJson);
        })
      );
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="grid">
        <div className="card profile">
          <ProfileCard />
        </div>
        <div className="card small-card work">
          <Card title="Work" current="36" timeframes="week" previous="32" />
        </div>
        <div className="card small-card play">
          <Card title="Play" current="10" timeframes="week" previous="7" />
        </div>
        <div className="card small-card study">
          <Card title="Study" current="4" timeframes="week" previous="7" />
        </div>
        <div className="card small-card exercise">
          <Card title="Exercise" current="4" timeframes="week" previous="5" />
        </div>
        <div className="card small-card social">
          <Card title="Social" current="5" timeframes="week" previous="2" />
        </div>
        <div className="card small-card self-care">
          <Card title="Self Care" current="2" timeframes="week" previous="2" />
        </div>
      </div>
    </div>
  );
}

export default App;
