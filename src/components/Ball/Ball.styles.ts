import styled from "styled-components";
import { BALL_SIZE } from "../../gameHelper";

type Props = {
    x: number;
    y: number;
};

const StyledBall = styled.div<Props>`
    position: absolute; // to GameBox
    transform: translateY(-50%);
    left: ${(Props) => Props.x}px; // works like x
    top: ${(Props) => Props.y}px; // works like y
    width: ${BALL_SIZE}px;
    height: ${BALL_SIZE}px;
    border-radius: 50%;
    background-color: red;
`
export default StyledBall

