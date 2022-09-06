import styled from 'styled-components'
import { PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_POSITION, GAME_WIDTH } from '../../gameHelper';

type Props = {
    type: string;
    position: number;
}

const StyledPaddle = styled.div<Props>`
    width: ${PADDLE_WIDTH}px;
    height: ${PADDLE_HEIGHT}px;
    background-color: white;
    position: absolute;
    top: ${(Props) => Props.position}px;
    transform: translateY(-50%); // to get it to middle
    left: ${(Props) => Props.type === "left" ? 0 : (GAME_WIDTH - PADDLE_WIDTH)}px;
`;

export default StyledPaddle;
