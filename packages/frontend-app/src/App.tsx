import React from "react";
import "./App.scss";
import { Nav } from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <Button>yay!</Button>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => (
    <div className="nav">
        <Nav />
        <Router history={createBrowserHistory()}>
            <Route path="/map" component={Map} />
            {/* <Route path="/info" component={<ScrollArea>{Card}</ScrollArea>}/> */}
            {/*<Route path="/info" component={Card} />*/}
        </Router>
    </div>
);

export default App;
