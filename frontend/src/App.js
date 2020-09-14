import React from 'react';
import './App.css';
import{BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
function App() {
  let openMenu=()=>{document.querySelector(".sidebar").classList.add("open")};
  let closeMenu=()=>{document.querySelector(".sidebar").classList.remove("open")};
  return (
      <BrowserRouter>
<div className="grid-contain">
            <header className="header">
                <div className="siteLogo">
                    <button onClick= {openMenu} >&#9776;</button>
                    <Link to="/">New World Bounty's</Link>
                </div>

                <div className="headerLinks">
                    <Link to="/signIn">Sign In</Link>
                    <Link to="/cart">cart</Link>
                </div>
            </header>
            <aside className="sidebar">
                <h3>shopping catagories</h3>
                <button className="sidebarCloseButton" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <Link href="/">Pirates</Link>
                    </li>
                    <li>
                        <a href="/">Marines</a>
                    </li>
                </ul>
                
            </aside>
            <main className="main">
                <div className="Content">
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/cart/:id?" component={CartScreen} />
                <Route path="/" exact={true} component={HomeScreen} />

                </div>
            </main>
            <footer className="footer">ALL RIGHTS RESEVED</footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
