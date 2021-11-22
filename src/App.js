import './App.css';
// components
import UseStateHook from './hooks/UseStateHook';

function App() {
  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline' }}>React Hooks</h1>
      {/* 1st hook -> useState */}
      <UseStateHook />
    </div>
  );
}

export default App;
