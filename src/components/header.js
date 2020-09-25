import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: rebeccapurple;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
  color:  white;
`;


const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Title>Header</Title>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
