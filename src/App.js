import React from "react";
import { Link, Route } from "react-router-dom";
import ClickDemo from "./ClickDemo";
import Counter from "./Counter";
import Account from "./Account";
import "./App.css";
import "./Layout.css";
// import Login from "./Login";
// import LoginClass from "./LoginClass";
import ContactListContainerHooks from "./ContactListContainerHooks";
// import Presidents from "./Presidents";

// function makeLoggingFunc(WrappedComponent) {
//   return function({ n }) {
//     return <div>
//         <WrappedComponent />;

//       </div>
//   };
// }

// function LayoutComponent({ main, nav, sidebar, footer }) {
//   return (
//     <div className="three-col-layout">
//       <header>header</header>
//       <main>
//         <div className="col-1">{main}</div>
//         <div className="col-2">{nav && nav()}</div>
//         <div className="col-3">{sidebar && sidebar()}</div>
//       </main>
//       <footer>footer</footer>
//     </div>
//   );
// }

// function Foo(props) {
//   console.log(document.location);
//   if (props.path.test(...)) {
//     return (
//       <div>
//       <props.component />
//     </div>
//   );
// }
// }

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accounts/1252">Account 1252</Link>
        </li>
        <li>
          <Link to="/accounts/54">Account 54</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/click">ClickDemo</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>

      <Route path="/" exact component={Home} />
      <Route path="/accounts/:accountId" component={Account} />
      <Route path="/contacts" component={ContactListContainerHooks} />
      <Route path="/click" component={ClickDemo} />
      <Route path="/counter" render={() => <Counter count={6} />} />

      {/* <Presidents /> */}
      {/* <Login /> */}
      {/* <LoginClass /> */}
      {/* <header className="App-header">
        <LayoutComponent main={main} sidebar={() => <MultiplyBy2 n={23} />} />
      </header> */}
    </div>
  );
}

export default App;
