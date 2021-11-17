import styled from 'styled-components';

type GridProps = {
  children: JSX.Element[];
};

export default function Grid({ children }: GridProps): JSX.Element {
  return <Container>{children}</Container>;
}

const Container = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`;
