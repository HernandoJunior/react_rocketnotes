import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  .tags {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  > main {
    overflow: auto;
  }
`

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 36px;
    
    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      text-decoration: none;
    }
  }
`