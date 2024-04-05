import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 50px;

  .react-tabs__tab-list {
    display: flex;
  }
  .react-tabs__tab--selected {
    color: red;
  }
`;

const Blog = () => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </Wrapper>
  );
};

export default Blog;
