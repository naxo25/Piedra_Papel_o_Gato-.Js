import logo from './logo.svg';
import './App.css';
import My from './js-components/my';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       	<My/>
      </header>
    </div>
  );
};

export default App;
