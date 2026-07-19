import segments from "segments.json";
import { Circle } from "components/circle";
import { useMemo, useState } from "react";
import { rotateArray } from "helpers/rotate-array";
import styled from "styled-components";
import { Button, Flex, Select } from "antd";

const StyledPanel = styled.div`
  display: flex;
`;

export const Panel = () => {
  const [rotateStep, setRotateStep] = useState(0);
  const [harmony, setHarmony] = useState("");
  const [accidental, setAccidental] = useState("");

  return (
    <Flex gap={30} vertical>
      <Flex gap={10}>
        <Button onClick={() => setRotateStep(s => s - 1)}>left</Button>
        <Button onClick={() => setRotateStep(s => s + 1)}>right</Button>

        <Select
          value={harmony}
          style={{ width: 200 }}
          options={[
            { value: "", label: "-" },
            { label: "Мажор", value: "major" },
            { label: "Минор", value: "minor" },
          ]}
          onChange={setHarmony}
        />

        <Select
          value={accidental}
          style={{ width: 200 }}
          options={[
            { value: "", label: "-" },
            { label: "♯", value: "sharp" },
            { label: "♭", value: "flat" },
          ]}
          onChange={setAccidental}
        />
      </Flex>

      <Circle segments={segments} rotationStep={rotateStep} isDimmed={(s, type, i) => {
        let r = false;
        if (harmony) {
          r = r || (type === (harmony === "major" ? "secondary" : "main"))
        }

        if (accidental) {
          r = r || (i === (accidental === "sharp" ? 1 : 0))
        }

        return r;
      }}/>
    </Flex>
  );
};
