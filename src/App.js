import logo from './logo.svg';
import './App.css';
import Navbar from './commponents/Navbar';
import Subnavbar from './commponents/Subnavbar';
import Movies from './commponents/Movies';
import Loading from './commponents/Loading';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Subnavbar></Subnavbar>
    <Movies></Movies>
    <Loading></Loading>
    </>
  );
}

export default App;
