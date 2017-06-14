const Main extends Component {

  render() {
    return (
      <div>
        <Header />
      <div className="container">
        { this.props.children }
      </div>
        <Footer />
      </div>
    );
  }

}

const LoginForm extends Component {

  render() {
    return (
      <form>
        { showError && <p>Error logging in</p> }
        <input type="email" name="email" value={ this.props.email } />
        <input type="password" name="password" value={ this.props.password } />
        <input type="submit" onClick={ this.props.onClick } />
      </form>
    );
  }

}

class LoginPage extends Component {

  constructor() {
    this.state = {
      email: '',
      password: '',
      showError: false
    }
  }

  handleLogin(user) {
    if (user.email == 'test@example.com' && user.password == '1234') {
      // redirect
    } else {
      this.setState({
        email: user.email,
        password: '',
        showError: true
      })
    }
  }

  render() {
    return (
      <LoginForm
        email={this.state.email}
        password=""
        onClick={ this.handleLogin }
        showError={ this.state.showError } />
    );
  }
}
