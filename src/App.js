import './App.css';
import Container from './components/Container/Container';

function App() {
  return (
    <div>
      <header>
        <h1>Task manager</h1>
      </header>
      <main>
        <Container />
      </main>
    </div>
  );
};

export default App;

/* <Task name="buy food" isImmidiate="true" />
        <Task name="make homework" isImmidiate="false" />
        <Task name="go to bed" isImmidiate="false" /> */