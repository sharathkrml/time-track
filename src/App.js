import "./App.css";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
        <div className="grid">
          <div className="card profile">
            <ProfileCard />
          </div>
          <div className="card work">
            <Card title="Work" current="32" timeframes="week" previous="36"/>
          </div>
          <div className="card play">
            <Card title="Play" current="10" timeframes="week" previous="7"/>
          </div>
          <div className="card study">
            <Card title="Study" current="4" timeframes="week" previous="7"/>
          </div>
          <div className="card exercise">
            <Card title="Exercise" current="4" timeframes="week" previous="5"/>
          </div>
          <div className="card social">
            <Card title="Social" current="5" timeframes="week" previous="2"/>
          </div>
          <div className="card self-care">
            <Card title="Self Care" current="2" timeframes="week" previous="2"/>
          </div>
        </div>
    </div>
  );
}

export default App;
