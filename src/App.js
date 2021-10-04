import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import TeachOnMastery from "./components/TeachOnMastery/TeachOnMastery";
import Services from "./components/Services/Services";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <div>
        <Header></Header>

        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/Teach-on-mastery">
            <TeachOnMastery></TeachOnMastery>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
