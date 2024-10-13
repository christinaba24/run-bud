import React from 'react';
import { useNavigate } from 'react-router-dom';
import mic from '../assets/images/mic.png';
import './SetupPage.scss';

interface SetupPageProps {
  onMicPress?: () => void;
}

export default function SetupPage({ onMicPress }: SetupPageProps): JSX.Element {
  const navigate = useNavigate();

  const handleMicClick = () => {
    if (onMicPress) {
      onMicPress();
    }
    navigate('/console');
  };

  return (
    <div className="container" data-component="SetupPage">
      <h1 className="initialText">What workout are we doing today?</h1>
      <img
        className="image"
        src={mic}
        alt="Microphone"
        onClick={handleMicClick}
      />
      <h1 className="caption"> Click on mic to plan your workout!</h1>
      <div className="spacer"></div>
    </div>
  );
}
