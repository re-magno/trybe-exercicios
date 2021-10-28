import './App.css';
import Image from './Image';
import Cat from './images/cat.jpg';

function App() {
  return (
    <>
     <Image source={Cat} alternativeText="Cute cat staring" />
    </>
  );
}

export default App;
