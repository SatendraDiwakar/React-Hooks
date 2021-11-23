import './App.css';
import UseRefHook from './hooks/UseRefHook';
// components
import UseStateHook from './hooks/UseStateHook';

function App() {
  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline' }}>React Hooks</h1>
      {/* 1st hook -> useState */}
      <h4>1st hook -{`>`} useState</h4>
      <UseStateHook />
      {/* 2nd hook -> useRef */}
      <br/>
      <h4>2nd hook -{`>`} useRef</h4>
      <UseRefHook />
    </div>
  );
}

export default App;
