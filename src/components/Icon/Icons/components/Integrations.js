/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Integrations = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.74671 2.32679C7.0396 2.03389 7.51448 2.03389 7.80737 2.32679L10.6482 5.16761L11.0899 4.72593L12.1505 3.66527L12.157 3.6717L12.9305 2.89822C13.2234 2.60532 13.6982 2.60532 13.9911 2.89822C14.284 3.19111 14.284 3.66598 13.9911 3.95888L13.2176 4.73236L16.4942 8.00894C17.6658 9.18052 17.6658 11.08 16.4942 12.2516L14.9032 13.8426L17.6732 16.6125C17.9661 16.9054 17.9661 17.3803 17.6732 17.6732C17.3803 17.9661 16.9054 17.9661 16.6125 17.6732L13.8426 14.9032L12.6556 16.0902C11.484 17.2618 9.58454 17.2618 8.41297 16.0902L5.13639 12.8136L4.46099 13.489C4.16809 13.7819 3.69322 13.7819 3.40033 13.489C3.10743 13.1961 3.10743 12.7212 3.40033 12.4283L4.07573 11.7529L4.0693 11.7465L5.01609 10.7997L2.17527 7.95889C1.88237 7.666 1.88237 7.19112 2.17527 6.89823C2.46816 6.60534 2.94303 6.60534 3.23593 6.89823L6.07675 9.73905L9.58753 6.22827L6.74671 3.38745C6.45382 3.09455 6.45382 2.61968 6.74671 2.32679ZM6.19705 11.7529L9.47363 15.0295C10.0594 15.6153 11.0092 15.6153 11.5949 15.0295L15.4336 11.1909C16.0193 10.6051 16.0193 9.65539 15.4336 9.0696L12.157 5.79302L6.19705 11.7529Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Integrations.displayName = 'Integrations';
Integrations.propTypes = {
  size: PropTypes.string
}
export default Integrations;
/* tslint:enable */
/* eslint-enable */
