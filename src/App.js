import './App.css';
// components
import UseEffecthook from './hooks/UseEffecthook';
import UseRefHook from './hooks/UseRefHook';
import UseStateHook from './hooks/UseStateHook';

function App() {

  const styl = {
    padding: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }

  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline' }}>React Hooks</h1>
      <div style={styl}>
        <div style={{ border: '2px solid #66ffce', margin: '1em', padding: '1.5em' }}>
          {/* 1st hook -> useState */}
          <h4>1st hook -{`>`} useState</h4>
          <UseStateHook />
        </div>
        <div style={{ border: '2px solid #66ffce', margin: '1em', padding: '1.5em' }}>
          {/* 2nd hook -> useRef */}
          <h4>2nd hook -{`>`} useRef</h4>
          <UseRefHook />
        </div>
        <div style={{ border: '2px solid #66ffce', margin: '1em', padding: '1.5em' }}>
          {/* 3rd hook -> useEffect */}
          <h4>3rd hook -{`>`} useEffect</h4>
          <UseEffecthook />
        </div>
      </div>
    </div>
  );
}

export default App;
