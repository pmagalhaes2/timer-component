import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Container, TimerContent } from "./styles";

export default function Timer({ initial }) {
  const [timer, setTimer] = useState(initial);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (timer > 0) setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      clearInterval(interval);
    }
  });

  const stopTimer = () => {
    setActive(false);
  };

  return (
    <Container>
      <TimerContent>
        <h1>{timer}</h1>
        <button onClick={stopTimer}>Stop Timer</button>
      </TimerContent>
    </Container>
  );
}
