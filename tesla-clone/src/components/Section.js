import styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <>
      <SectionWrap bgImage={backgroundImg}>
        <MainText>
          <h1>{title}</h1>
          <p>{description}</p>
        </MainText>

        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>

            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>

          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </SectionWrap>
    </>
  );
}

export default Section;

const SectionWrap = styled.section`
  width: 100%;
  height: 100vh;
  /* background-image: url("/images/model-s.jpg"); */
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MainText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const LeftButton = styled.button`
  background-color: var(--color__dark);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 256px;
  color: #e2e2e2;
  border: none;
  border-radius: 100px;
  font-size: 14px;
  opacity: 0.8;
  text-transform: uppercase;
  margin: 10px;
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    background-color: #e2e2e2;
    color: var(--color__light-grey);
    font-weight: 600;
    opacity: 0.65;
    transform: scale(1.02);
    letter-spacing: 1.2px;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #e2e2e2;
  opacity: 0.65;
  color: var(--color__light-grey);
  font-weight: 600;

  &:hover {
    background-color: var(--color__dark);
    color: #e2e2e2;
    font-weight: 600;
    opacity: 0.65;
    transform: scale(1.02);
    letter-spacing: 1.2px;
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow: hidden;
  animation: bounceDown infinite 2s;
`;
