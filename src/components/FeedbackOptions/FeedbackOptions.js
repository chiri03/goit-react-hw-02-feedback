import "./FeedbackStyle.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    options.map(option => (
        <div className="feedbackElement" key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}</div>))
);