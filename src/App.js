import './App.css';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <div className="grid">
        <div className="card profile">
          <ProfileCard/>
        </div>
        <div className="card work"><Card/></div>
        <div className="card play"><Card/></div>
        <div className="card study"><Card/></div>
        <div className="card exercise"><Card/></div>
        <div className="card social"><Card/></div>
        <div className="card self-care"><Card/></div>
      </div>
    </div>
  );
}


export default App;
