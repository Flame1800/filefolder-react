
import React from 'react'
import FileList from './FileList.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittingState: 'fillingForm',
      value: '',
      passwords: ["admin", "user"],
      errorPassword: false,
      currentPassword: '',
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    const { value, passwords } = this.state;

    passwords.forEach((password) => {
      if (value === password) {
        this.setState({ 
          submittingState: 'submitted',
          currentPassword: value,
          errorPassword: false 
        });
      } 
      else {
        this.setState({ errorPassword: true });
      }
    });
  }

  renderForm = () => {
    return (
      <div className="content-investors">
        <div className="logo-container">
          <div className="logo-background">
            <img src="../img/logo.png" alt="" className="logo" />
          </div>
        </div>
        <form className="investors-from" onSubmit={this.submitForm}>
          <div className="title">Welcome, Investor!</div>
          <input type="password" placeholder="Password" className="password-field"
            value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
            {this.state.errorPassword && <div className="fail-pass">Uncorected Password!</div>}
          <input type="submit" value="Enter" className="button" />
        </form>
      </div>
    )
  }


  render() {
    const { submittingState } = this.state;
    switch (submittingState) {
      case 'fillingForm':
        return this.renderForm();
      case 'submitted':
        return <FileList email={this.state.currentPassword} />
      default:
        throw new Error(`'${submittingState}' - unknown state`);
    }
  }
}