import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key : '372697a5c9c5c6a9c378da7e86cb94a2'
}

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Content />
    </div>
  )
};



export default App; // #export the function