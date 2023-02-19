import './App.css';
import Listing from './components/Listing'
import { data } from './data/etsy';

function App() {
  return (
    <>
       <div className="App">
         <Listing items={data}></Listing>
      </div>
    </>
  );
}

export default App;
