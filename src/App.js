import './App.css';

function App() {
  return (
    <div className="wrapper">
        <h1 className='heading'>Background Color Changer</h1>
        <input type='color' onChange={
          (e) => {
          document.body.style.background= e.target.value
        }
        }/>
    </div>
  );
}

export default App;
