import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const AudioPlayerStyled = styled(AudioPlayer)`
  box-shadow: none;
  border-radius: 5px;
  .rhap_controls-section {
    max-width: 45px;
  }
  .rhap_play-pause-button {
    font-size: 30px;
    width: 30px;
    height: 30px;
  }
  .rhap_progress-indicator {
    width: 16px;
    height: 16px;
    top: -5px;
    background-color: ${theme.backgroundSecondary};
  }
  .rhap_progress-filled {
    background-color: ${theme.backgroundSecondary};
  }
`

interface PlayerProps {
  src: any
}

export const Player : React.FC<PlayerProps> = ({src}) => {
    return (
      <AudioPlayerStyled
        autoPlay
        src={src}
        layout="horizontal-reverse"
        customVolumeControls={[]}
        customAdditionalControls={[]}
        showJumpControls={false}
        // other props here
      />
    )
}
