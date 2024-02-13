import PropTypes from 'prop-types';
import '../FeedbackOptions/FeedbackOptions.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className='feedback__container'> 
    {Object.keys(options).map(option => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
      className='feedback__btn'
    >
        {option}
    </button>
  ))}
  </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}