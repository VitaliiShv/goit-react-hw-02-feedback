import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ControlsList,
  ControlButton,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    <ControlsList>
      {options.map(option => {
        return (
          <li key={option}>
            <ControlButton onClick={() => onLeaveFeedback(option)}>
              {option}
            </ControlButton>
          </li>
        );
      })}
    </ControlsList>
  </Container>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
