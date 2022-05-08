import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
      <Navbar 
        title="Meme Generator"
        subtitle="React Course - Project 3"
      />
      <Form 
        buttonText="Generate new meme image"
      />
    </>
  );
}

export default App;
