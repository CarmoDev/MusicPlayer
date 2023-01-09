import {
  Container,
  PrevButton,
  PauseButton,
  PlayButton,
  NextButton,
  ButtonsContainer,
} from "./styles";

import back from "../../assets/back.svg";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import next from "../../assets/next.svg";

export function Controls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) {

  return (
    <Container>
      <ButtonsContainer>
        <PrevButton
          type="button"
          className="prev"
          aria-label="Previous"
          onClick={onPrevClick}
        >
          <img src={back} alt="Previous" />
        </PrevButton>

        {isPlaying ? (
          <PauseButton
            type="button"
            className="pause"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
          >
            <img src={pause} alt="Pause" />
          </PauseButton>
        ) : (
          <PlayButton
            type="button"
            className="play"
            onClick={() => onPlayPauseClick(true)}
            aria-label="Play"
          >
            <img src={play} alt="Play" />
          </PlayButton>
        )}

        <NextButton
          type="button"
          className="next"
          aria-label="Next"
          onClick={onNextClick}
        >
          <img src={next} alt="Next" />
        </NextButton>
      </ButtonsContainer>
    </Container>
  );
}
