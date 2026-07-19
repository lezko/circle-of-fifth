import styled from "styled-components";

const HEIGHT_TO_MAIN_BLOCK_HEIGHT_RATIO = 0.25;
const HEIGHT_TO_MAIN_BLOCK_WIDTH_RATIO = 0.8;
const HEIGHT_TO_SECONDARY_BLOCK_HEIGHT_RATIO = 0.25;
const HEIGHT_TO_SECONDARY_BLOCK_WIDTH_RATIO = 0.35;
const HEIGHT_TO_BLOCK_FONT_SIZE_RATIO = 0.06;

const StyledSegment = styled.div`
  position: absolute;

  height: ${props => props.height * 2}px;
  width: ${props => props.width}px;

  left: ${props => props.height - props.width / 2}px;

  transform: rotate(${props => props.angle}deg);
  transition: 1s;
`;

const VisibleHalf = styled.div`
  position: absolute;
  //border: 2px solid grey;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const Block = styled.div`
  position: absolute;
  height: ${props => props.height}px;
  width: ${props => props.width}px;

  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  // todo ratio
  padding-inline: 20px;

  left: ${props => props.left}px;
  font-size: ${props => props.fontSize}px;
`;

const MainBlock = styled(Block)`

  //border: 2px solid red;


`;


const SecondaryBlock = styled(Block)`

  //border: 2px solid yellow;


  top: ${props => props.top}px;

`;

const Text = styled.div`
  transform: rotate(${props => props.angle}deg);
  transition: transform 1s;

  font-weight: 700;
  color: ${props => props.dimmed ? "#595858" : "#cad3d5"}
`;

export const Segment = ({ isDimmed, angle, width, height, mainContent, secondaryContent }) => {
  const mainBlockHeight = height * HEIGHT_TO_MAIN_BLOCK_HEIGHT_RATIO;
  const mainBlockWidth = width - 30;
  const secondaryBlockHeight = height * HEIGHT_TO_SECONDARY_BLOCK_HEIGHT_RATIO;
  const secondaryBlockWidth = height * HEIGHT_TO_SECONDARY_BLOCK_WIDTH_RATIO;

  return (
    <StyledSegment angle={angle} width={width} height={height}>
      <VisibleHalf width={width} height={height}>
        <MainBlock
          // todo separate font sizes for different blocks
          fontSize={height * HEIGHT_TO_BLOCK_FONT_SIZE_RATIO}
          width={mainBlockWidth}
          height={mainBlockHeight}
          left={(width - mainBlockWidth) / 2}
          justifyContent={mainContent.length > 1 ? "space-between" : "center"}
        >
          {mainContent.map((c, i) =>
            <Text dimmed={isDimmed?.(c, "main", i)} angle={-angle}>{c}</Text>
          )}
        </MainBlock>
        <SecondaryBlock
          angle={-angle}
          fontSize={height * HEIGHT_TO_BLOCK_FONT_SIZE_RATIO}
          left={(width - secondaryBlockWidth) / 2}
          width={secondaryBlockWidth}
          height={secondaryBlockHeight}
          top={mainBlockHeight}
          justifyContent={mainContent.length > 1 ? "space-between" : "center"}
        >
          {secondaryContent.map((c, i) =>
            <Text dimmed={isDimmed?.(c, "secondary", i)} angle={-angle}>{c}</Text>
          )}
        </SecondaryBlock>
      </VisibleHalf>
    </StyledSegment>
  );
};
