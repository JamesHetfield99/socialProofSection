import './App.css';

import BottomElement from './components/BottomElement/BottomElement';
import TopElement from './components/TopElement/TopElement';

function App() {
  return (
    <div className="App">
        <main>
          <TopElement />
          <BottomElement />
        </main>
    </div>
  );
}

export default App;
