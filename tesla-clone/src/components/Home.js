import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <>
      <Container>
        <Section
          title="Model S"
          description="Order Online"
          backgroundImg="model-s.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description="Order Online"
          backgroundImg="model-x.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Order Online"
          backgroundImg="model-3.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          description="Order Online"
          backgroundImg="model-y.jpg"
          leftBtnText="Customer Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-Back Guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Show Now"
        />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.main`
  max-width: 100%;
  width: 1100px;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  overflow: hidden;
`;
