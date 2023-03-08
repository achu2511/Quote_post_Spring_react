import { Component } from "react";
import {Link} from 'react-router-dom';

export class EntryPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "logIn"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
    
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend className="log">Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  {/* <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a> */}
                </li>
              </ul>
            </fieldset>
            <Link to='/Home'><button>Login</button></Link>
            {/* <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button> */}
          </form>
        )


    }
  }

  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

