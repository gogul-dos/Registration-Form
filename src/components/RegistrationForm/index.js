import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {firstName: '', lastName: ''}

  usernameChanged = event => {
    this.setState({firstName: event.target.value})
  }

  passwordChanged = event => {
    this.setState({lastName: event.target.value})
  }

  formSubmitted = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName && lastName) {
      this.setState({formSubmitted: true})
    } else if (!firstName && !lastName) {
      document.getElementById('first-para').classList.remove('display-or-not')
      document.getElementById('last-para').classList.remove('display-or-not')
    } else if (!firstName) {
      document.getElementById('first-para').classList.remove('display-or-not')
      document.getElementById('last-para').classList.add('display-or-not')
    } else if (!lastName) {
      document.getElementById('last-para').classList.remove('display-or-not')
      document.getElementById('first-para').classList.add('display-or-not')
    }
  }

  registrationOfNewForm = () => {
    this.setState({firstName: '', lastName: '', formSubmitted: false})
    document.getElementById('first-para').classList.add('display-or-not')
    document.getElementById('last-para').classList.add('display-or-not')
  }

  blurFunction = () => {
    const {firstName, lastName} = this.state

    if (firstName === '') {
      document.getElementById('first-para').classList.remove('display-or-not')
    } else {
      document.getElementById('first-para').classList.add('display-or-not')
    }

    if (lastName === '') {
      document.getElementById('last-para').classList.remove('display-or-not')
    } else {
      document.getElementById('last-para').classList.add('display-or-not')
    }
  }

  render() {
    const {firstName, lastName, formSubmitted} = this.state
    return (
      <div className="overall-container">
        {!formSubmitted && (
          <div id="form-container" className="main-form-container">
            <h1 className="heading-element">Registration</h1>
            <form className="form-element" onSubmit={this.formSubmitted}>
              <label className="margin-container" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                className="margin-container"
                onBlur={this.blurFunction}
                onChange={this.usernameChanged}
                placeholder="First Name"
                type="text"
                value={firstName}
                id="firstName"
              />
              <p
                id="first-para"
                className="margin-container display-or-not required-para"
              >
                Required
              </p>
              <label className="margin-container" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                className="margin-container"
                onBlur={this.blurFunction}
                onChange={this.passwordChanged}
                id="lastName"
                value={lastName}
                type="text"
                placeholder="Last Name"
              />
              <p
                id="last-para"
                className=" display-or-not margin-container required-para"
              >
                Required
              </p>
              <button type="submit" className="submit-button margin-container">
                Submit
              </button>
            </form>
          </div>
        )}
        {formSubmitted && (
          <div id="submitted">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
              alt="success"
              className="success-image"
            />
            <p>Submitted Successfully</p>
            <button
              className="submit-button"
              onClick={this.registrationOfNewForm}
              type="button"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
