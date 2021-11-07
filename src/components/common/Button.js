import styled from "styled-components";

const accentColor = "rgb(30, 100, 18)";

const Button = styled.button`
  display: inline-flex;
  border-style: solid;
  cursor: pointer;
  font-weight: bold;
  align-items: center;
  font: inherit;
  justify-content: center;
  border-width: 1px;
  outline-style: none;
  min-width: 70px;
  min-height: 30px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  transition: background-color 0.2s;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-color: ${accentColor};
  color: ${(props) => (props.variant === "primary" ? "white" : accentColor)};
  background-color: ${(props) =>
    props.variant === "primary" ? accentColor : "white"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "rgb(42, 132, 123)"
        : "rgba(51, 160, 130, 0.1)"};
  }
`;

export default Button;