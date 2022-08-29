import styled from "styled-components";
import { SPACING } from "../../common/styles/constants"
import { theme } from "../../common/styles/theme";

export const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('/background-image.jpg');
  background-size: cover;
  object-fit: cover;
`

export const CentralContainer = styled.div`
  background-color: ${theme.white};
  border: 4px solid ${theme.grey};
  border-radius: 5px;
  min-width: 400px;
  width: 40vw;
  padding: ${SPACING.small};
`

export const Title = styled.h1`
  font-size: 1.75em;
`

export const SearchbarLabel = styled.label`
  color: ${theme.grey};
`

export const Searchbar = styled.input`
  height: 100%;
  width: 80%;
  box-sizing: border-box;
  border-radius: 5px 0 0 5px;
  font-size: 2em;
  
  &:focus {
    outline: none;
  }
`

export const SubmitButton = styled.button`
  height: 100%;
  width: 20%;
  border-radius: 0 5px 5px 0;
`

export const SearchbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 46px; 
  
  :focus-within {
    outline: 1px solid ${theme.blue};
  }
`
