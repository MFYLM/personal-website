import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src="/asset/github-icon.png"/>
        <div className="bio">
          <p>Hi! I'm Feiyang Ma. I am a third year Computer Science student at UC Irvine</p>
          <p>I'm interested in building useful websites and apps for other people and enjoy solving real-life problems</p>
        </div>
      </div>
      <MainContent />
      <div className='contact'>
        
      </div>
    </div>
  );
}

export default App;
