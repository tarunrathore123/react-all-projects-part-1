import "./App.css";
import Menu from "./components/menu/menu.component";
import HomePage from "./pages/homepage/homepage.component";
import DetailPage from "./pages/detailpage/detailpage.component";
import Footer from "./components/footer/footer.component";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import React from "react";
import Visited from "./pages/visited/visited.component";

class App extends React.Component {
  componentDidMount() {
    // this.props.setCurrentUser({
    //           name: 'tarun2'
    //         });
  }
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/visited" component={Visited} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
