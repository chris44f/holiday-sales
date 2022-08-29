import styled from "styled-components";
import { SPACING } from "../../common/styles/constants";
import { theme } from "../../common/styles/theme";

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PageTitle = styled.h1`
  color: ${theme.darkBlue};
`

export const Image = styled.img`
  object-fit: contain;
  width: 60vw;
`

export const SubHeading = styled.h2`
`

export const Quote = styled.p`
  font-style: italic;
  color: ${theme.grey};
`

export const MarkupContainer = styled.div`
  padding: ${SPACING.small};
  background-color: ${theme.lightYellow};
`

export const Price = styled.p`
  font-size: 2em;
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
