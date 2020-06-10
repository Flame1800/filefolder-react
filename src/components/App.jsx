
import React from 'react'
import FileList from './FileList.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittingState: 'fillingForm',
      value: '',
      passwords: ["admin", "user"], // список паролей(emails)
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
            <div className="logo" />
            <div className="title">Welcome, Investor!</div>
          </div>
        </div>
        <form className="investors-from" onSubmit={this.submitForm}>
          <div className="title">Enter the password You received</div>
          <div className="subtitle">Contact us at info@stonebush.com to obtain one</div>
          <input type="password" placeholder="Password" className="password-field"
            value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
            {this.state.errorPassword && <div className="fail-pass">Wrong Password!</div>}
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
        return <FileList userRole={this.state.userRole} password={this.state.value} />
      default:
        throw new Error(`'${submittingState}' - unknown state`);
    }
  }
}