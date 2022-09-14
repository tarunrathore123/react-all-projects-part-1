import './App.css';


function App() {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  return (
    <div >
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
}

export default App;
