import './styles/App.css';
import Message from './Message';

function App() {
  const name = 'Sergey';

  return (
    <div className="App">
      <main className='App-content'>
        <div className='b-chat'>
          <div className='b-chat__header'>
            <div className='b-chat__title'>CHAT</div>
            <div className='b-chat__login'>Login: {name}</div>
          </div>

          <div className='b-chat__window'>

          </div>

          <div className='b-chat__form'>
            <input />
            <button >Отправить</button>
          </div>
        </div>
      </main>
    </div >
  );
}

export default App;
