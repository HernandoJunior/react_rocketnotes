import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;

  > li {
    margin-top: 1px;
  }

  > li a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
    font-size: 25px;
  }
`

