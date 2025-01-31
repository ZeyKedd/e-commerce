
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// Tu componente Header
import Header from './components/header/Header.jsx'; 
import Main from './components/main/main.jsx';
import Navbar from './components/NavBar/NavBar.jsx';

  function App() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Main/>
          <Navbar isFooter={false}/>
          
        </BrowserRouter>
      </div>
    );
  }

export default App;


