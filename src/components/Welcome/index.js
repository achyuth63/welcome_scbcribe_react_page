// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onClickSubscribeButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    const {isSubscribed} = this.state
    let authButton
    if (isSubscribed) {
      authButton = <p>thanks for subscribing</p>
    } else {
      authButton = <p>subscribe for more updates</p>
    }

    return (
      <div className="app-container">
        <h1 className="heading">Welcome to my Learning portal</h1>
        <p className="description">{authButton}</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.onClickSubscribeButton}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
