import { FunctionComponent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { CentralContainer, PageContainer, Title, SearchbarLabel, Searchbar, SearchbarWrapper, SubmitButton } from "./styles";

export const Homepage: FunctionComponent = () => {
  const [destination, setDestination] = useState<string>('');
  const navigate: NavigateFunction = useNavigate()

  return (
    <PageContainer>
      <CentralContainer>
        <Title>Welcome to Holiday Searcher</Title>
        <form onSubmit={() => navigate({ pathname: '/search', search: `?query=${destination}` })}>
          <SearchbarLabel htmlFor="destination search">Search for your new getaway...</SearchbarLabel>
          <SearchbarWrapper>
            <Searchbar id="destination search" value={destination} type="text" autoFocus onChange={(e) => setDestination(e.target.value)} />
            <SubmitButton type="submit">Submit</SubmitButton>
          </SearchbarWrapper>
        </form>
      </CentralContainer>
    </PageContainer>
  )
}
