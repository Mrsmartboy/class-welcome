import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onClick = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {isSubscribe ? (
          <button type="button" onClick={this.onClick} className="button">
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.onClick} className="button">
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
