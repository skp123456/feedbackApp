import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isResultShown: false,
  }

  onClickEmoji = () => {
    this.setState({
      isResultShown: true,
    })
  }

  feedBackCard = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="emoji-container">
          <div className="content-container">
            <h1 className="main-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-item-container">
              {emojis.map(emoji => (
                <li key={emoji.id}>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onClickEmoji}
                  >
                    <img
                      src={emoji.imageUrl}
                      alt={emoji.name}
                      className="sad-image"
                    />
                    <br />
                    <span className="emoji-title">{emoji.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  showThankYouResults = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="thankyou-container">
          <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
          <h1 className="title">Thank You!</h1>
          <p className="descreption">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isResultShown} = this.state
    return isResultShown ? this.showThankYouResults() : this.feedBackCard()
  }
}

export default Feedback
