import './assets/styles/App.css';
import Chat from './Chat';


function App() {
  const login = 'Sergey';

  return (
    <div className="App">
      <main className='App-content'>
        <Chat login={login} />
      </main>
    </div >
  );
}

export default App;
