// SuccessIcon.jsx
import React from 'react';
import { colors } from '../../constants';

const WarningIcon = () => (
<svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9999 68.64C57.9543 68.64 73.3199 53.2744 73.3199 34.32C73.3199 15.3656 57.9543 0 38.9999 0C20.0455 0 4.67993 15.3656 4.67993 34.32C4.67993 43.2429 8.08512 51.3705 13.6669 57.4741C14.3862 58.2607 14.8199 59.2749 14.8199 60.3408V73.1872C14.8199 76.1365 17.9029 78.0717 20.5589 76.7894L37.4152 68.6519C37.425 68.6472 37.4248 68.6332 37.4149 68.6288C37.402 68.623 37.4066 68.6037 37.4207 68.6043C37.9442 68.628 38.4706 68.64 38.9999 68.64Z" fill={colors['warning']} />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.8696 36.5652C35.8696 38.222 37.2128 39.5652 38.8696 39.5652H39.1305C40.7874 39.5652 42.1305 38.222 42.1305 36.5652L42.1305 23.0869C42.1305 21.4301 40.7874 20.0869 39.1305 20.0869H38.8696C37.2128 20.0869 35.8696 21.4301 35.8696 23.0869V36.5652ZM39.0001 47.913C40.729 47.913 42.1305 46.5115 42.1305 44.7826C42.1305 43.0537 40.729 41.6521 39.0001 41.6521C37.2712 41.6521 35.8696 43.0537 35.8696 44.7826C35.8696 46.5115 37.2712 47.913 39.0001 47.913Z" fill="white" />
  </svg>
);

export default WarningIcon;
