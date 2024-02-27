import './App.css'
import Navigation from "./components/Navigation"
import BodyElements from "./components/BodyElements"
import TailElements from './components/TailElements';
function App() {
  return (
    <div>
      <Navigation/>
      <BodyElements/>
      <TailElements/>
    </div>
  );
};

export default App;
