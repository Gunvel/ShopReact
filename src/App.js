import './styles/App.css';
import Message from './Message';

function App() {
  const name = 'Sergey';

  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <Message name={name}></Message>
      </header>
    </div>
  );
}

export default App;
