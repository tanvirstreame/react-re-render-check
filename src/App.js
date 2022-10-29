import logo from './logo.svg';
import './App.css';
import Rerender from './components/Rerender/Rerender';
import DontRerender from './components/DontRerender/DontRerender';

function App() {
  return (
    <>
      <h2 className='title'>React Re render check</h2>
      <hr />
      <div className='App'>
        <Rerender />
        <DontRerender />
      </div>
    </>
  );
}

export default App;
