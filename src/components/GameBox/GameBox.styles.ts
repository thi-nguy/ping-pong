import styled from "styled-components";
import { GAME_WIDTH, GAME_HEIGHT } from "../../gameHelper";

const StyledGameBox = styled.div`
    width: ${GAME_WIDTH}px;
    height: ${GAME_HEIGHT}px;
    background-color: black;
    border-style: double;
    border-color: white;
    position: relative;
    left: 10px;
    top: 20px;
    
    
`
export default StyledGameBox