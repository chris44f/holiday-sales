import styled from "styled-components";
import { BREAKPOINTS, SPACING } from "../../styles/constants"
import { theme } from "../../styles/theme";

export const TileContainer = styled.div`
  cursor: pointer;
  border: solid 1px ${theme.darkBlue};
  border-radius: 5px;
  margin-bottom: ${SPACING.small};
  padding: ${SPACING.small};
  display: flex;
  flex-direction: row;
  
  &:hover {
    border-color: ${theme.blue};
    box-shadow: 5px 5px 5px 5px ${theme.grey};
  }

  @media screen and (max-width: ${BREAKPOINTS.mediumScreen}) {
    flex-direction: column;
  }
`

export const Title = styled.h3`
  font-size: 1.25em;
`

export const Image = styled.img`
  width: 30vw;

  @media screen and (max-width: ${BREAKPOINTS.mediumScreen}) {
    width: 50vw;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${SPACING.small};

  @media screen and (max-width: ${BREAKPOINTS.mediumScreen}) {
    padding: 0;
  }
`
