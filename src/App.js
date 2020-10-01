import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Profile from "./components/Profile";
import Friends from "./components/Friends";

const Messages = ()=>{
  return (
      <h1>Это страница с сообщениями</h1>
  )
}
const Settings = ()=>{
  return (
      <h1>Это страница с настройками</h1>
  )
}


const Menu = ()=>{
  return <div className="nav flex-column nav-pills" aria-orientation="vertical">
        <NavLink className="nav-link" to="profile">Профиль</NavLink>
        <NavLink className="nav-link" to="messages">Сообщения</NavLink>
        <NavLink className="nav-link" to="settings">Настройки</NavLink>
        <NavLink className="nav-link" to="friends">Мои друзья</NavLink>
      </div>
}
function App(props) {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row my-5">
          <div className="col-sm-3">
            <Menu/>
          </div>
          <div className="col-sm-9">
              <Route path="/profile" render={()=><Profile function={props.functions.getUser}/>}/>
              <Route path="/messages" component={Messages}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/friends"  render={()=><Friends function={props.functions.getUsers}/>}/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
