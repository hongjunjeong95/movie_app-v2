import styled from "styled-components";

const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

const Loader = () => {
  return <Loading className="loader">Loading...</Loading>;
};

export default Loader;
