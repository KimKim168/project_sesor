import React from 'react';
import styled from 'styled-components';

const VideoPlay = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick} aria-label="Play Video">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor" /></svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2); /* Semi-transparent glass effect */
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px); /* Frosted glass blur */
    -webkit-backdrop-filter: blur(10px);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    animation: pulse 1.2s cubic-bezier(0.8, 0, 0, 1) infinite;
    box-shadow: 0 0 0 0 rgba(193, 244, 246, 0.5);
  }

  .button:is(:hover, :focus) {
    transform: scale(1.2);
    background: rgba(255, 255, 255, 0.3);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(193,244,246,0.5);
    }
    70% {
      box-shadow: 0 0 0 25px rgba(193,244,246,0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(193,244,246,0);
    }
  }
`;

export default VideoPlay;
