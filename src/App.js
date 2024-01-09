import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <div className='flex relative'>
        <div className='fixed'>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
