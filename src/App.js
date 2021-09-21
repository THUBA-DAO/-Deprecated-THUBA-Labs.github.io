import logo from './logo.svg';
import './App.css';
import bg from './assets/head_bg.svg';
import bg_pic from './assets/bg_pic.svg';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={{ fontSize: 800 }}>12345678</p>
      </header> */}
      <div>
        <img src={bg} className="head_bg1" alt=""  />
        <img src={bg_pic} className="head_bg2" alt=""  />
        <div className="head_words">
        <div className="head_font">THUBA旨在构建学生和区块链行业之间的链接桥梁</div>
      </div>
      </div>
    </div>
  );
}

export default App;
