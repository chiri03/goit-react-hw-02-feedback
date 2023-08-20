import { Component } from "react"
import { Statistics } from "./Statistics/Statistics"
import { Section } from "./Section/Section"
import { Notification } from "./Notifications/Notification"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
    onLeaveFeedback = (type) => this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state
    const totalFeedback = good + bad + neutral
    return totalFeedback
  }
  feedbackPercentage = () => {
    const { good } = this.state
    const positiveFeedbackPercentage = Math.round((good / (this.countTotalFeedback()) * 100))
    return positiveFeedbackPercentage
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback()
    const countPositiveFeedbackPercentage = this.feedbackPercentage()

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}>
        </FeedbackOptions>
      </Section>
      {totalFeedback === 0
      ? <Notification message="There is no feedback" />
      : <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
      </Section>}
    </>)}
  }

