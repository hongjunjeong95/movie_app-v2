import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #0008fc;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Header = () => {
  return (
    <Container>
      <SLink to="/">Home</SLink>
      <SLink to="/about">About</SLink>
    </Container>
  );
};

export default Header;
