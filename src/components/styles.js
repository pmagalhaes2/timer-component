import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #212226;
`;

export const TimerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid var(--bg-dark);
  background-color: var(--bg-dark);
  border-radius: 10px;
  gap: 1rem;

  h1 {
    color: #ffffff;
    font-size: 4rem;
  }

  button {
    width: 12rem;
    height: 3rem;
    border-radius: 0.3rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2em;
    cursor: pointer;
    background-color: #5280e2;
  }
`;
