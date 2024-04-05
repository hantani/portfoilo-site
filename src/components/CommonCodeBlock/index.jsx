import React from "react";
import styled from "styled-components";
import { CodeBlock, atomOneLight, atomOneDark } from "react-code-blocks";
import { ThemeContext } from "../../App";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 15px auto;

  span {
    font-size: 14px;
  }
`;

const CommonCodeBlock = ({ text }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        if (theme === "light") {
          return (
            <Wrapper>
              <CodeBlock
                text={text}
                language={"javascript"}
                theme={atomOneLight}
                showLineNumbers={false}
              />
            </Wrapper>
          );
        } else if (theme === "dark") {
          return (
            <Wrapper>
              <CodeBlock
                text={text}
                language={"javascript"}
                theme={atomOneDark}
                showLineNumbers={false}
              />
            </Wrapper>
          );
        }
      }}
    </ThemeContext.Consumer>
  );
};

export default CommonCodeBlock;
