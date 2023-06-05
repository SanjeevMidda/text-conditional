import './index.css';
import Number from './components/Number';

function App() {

  let newNumbers = [];
  let status = [true, false];

  for (let index = 0; index < 100; index++) {
    newNumbers.push(index)
  }

  function randomBoolean(){
    return status[Math.floor(Math.random() * status.length)];
  }

  return (
    <div className="App">
     {
      newNumbers.map((number) => {
        return <Number number = {number} status = {randomBoolean()}/>
      })
     }
    </div>
  );
}

export default App;
