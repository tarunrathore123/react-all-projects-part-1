import './App.css';
import Menu from './components/menu/menu.component';
import HomePage from './pages/homepage/homepage.component';
import DetailPage from './pages/detailpage/detailpage.component';
import Footer from './components/footer/footer.component';
import GridPage from './pages/gridpage/gridpage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Menu></Menu> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/detail/:id' component={DetailPage} />
        <Route exact path='/grid' component={GridPage} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
