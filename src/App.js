import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='container-principal'>
      <Sidebar/>
      <Header/> 
      <Footer/>
    </div>


  );
}

export default App;
