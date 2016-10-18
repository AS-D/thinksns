import React, { Component } from 'react';
import Svg from './Svg.js';

class MessageIcon extends Component {
  render() {
    return (
      <Svg {...this.props}>
        <g transform="scale(0.0234375, 0.0234375)">
          <path
            d="M511.989333 895.997315c-32.747348 0-85.335109 0-85.335109 0L192.004007 1023.999979 192.004007 789.349762c-116.973101-82.113709-192.003996-199.961495-192.003996-341.361771C1.1e-05 200.580175 229.231448 0 511.989333 0s511.989322 200.580175 511.989322 447.98799C1023.999989 695.438474 794.768552 895.997315 511.989333 895.997315L511.989333 895.997315zM511.989333 63.979998c-247.407816 0-448.030658 171.928912-448.030658 384.007992 0 130.136042 76.524259 250.543881 192.046664 319.985326l0 142.232294 170.627551-78.209628c0 0 47.979665 0 85.335109 0 247.407816 0 448.030658-171.928912 448.030658-384.007992C960.019991 235.887576 759.397149 63.979998 511.989333 63.979998L511.989333 63.979998zM768.015995 511.989322c-35.371403 0-64.022666-28.651263-64.022666-64.022666s28.651263-64.022666 64.022666-64.022666c35.328735 0 63.979998 28.651263 63.979998 64.022666S803.34473 511.989322 768.015995 511.989322L768.015995 511.989322zM511.989333 511.989322c-35.371403 0-64.022666-28.651263-64.022666-64.022666s28.651263-64.022666 64.022666-64.022666c35.371403 0 64.022666 28.651263 64.022666 64.022666S547.360736 511.989322 511.989333 511.989322L511.989333 511.989322zM255.984005 511.989322c-35.328735 0-63.979998-28.651263-63.979998-64.001332s28.651263-64.022666 63.979998-64.022666c35.371403 0 64.022666 28.651263 64.022666 64.022666S291.334074 511.989322 255.984005 511.989322L255.984005 511.989322z"
          />
        </g>
      </Svg>
    );
  }
}

export default MessageIcon;
