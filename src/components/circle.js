import styled from "styled-components";
import { Fragment, useState } from "react";
import { Segment } from "components/segment";

const RADIUS_TO_SEGMENT_WIDTH_RATIO = 0.5;

const C = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  //background-color: green;
  border: 3px solid #969696;
  border-radius: 50%;

  position: relative;
`;

const SegmentSeparator = styled.div`
  position: absolute;

  width: 3px;
  height: ${props => props.length * 2}px;
  //background-color: black;

  top: -3px;
  left: ${props => props.length}px;

  transform: rotate(${props => props.angle}deg);

  transition: 1s;
  background: linear-gradient(
    to top,
    transparent 0%,
    transparent 2%,
    #969696 2%,
    #969696 50%,
    transparent 50%,
    transparent 100%
  );
`;


export const Circle = ({ segments, rotationStep = 0, isDimmed }) => {

  const radius = 400;

  const segmentAngle = 360 / segments.length;

  const angleOffset = rotationStep * segmentAngle;

  return (
    <C size={radius * 2}>
      {segments.map((segment, i) =>
        <Fragment key={i}>
          {/* todo width calculation */}
          <Segment
            isDimmed={isDimmed}
            width={radius * RADIUS_TO_SEGMENT_WIDTH_RATIO}
            height={radius}
            mainContent={segment.main}
            secondaryContent={segment.secondary}
            angle={segmentAngle * i + angleOffset}

          />
          <SegmentSeparator
            length={radius}
            angle={segmentAngle * i + segmentAngle / 2 + angleOffset}

          />
        </Fragment>
      )}
    </C>
  );
};
