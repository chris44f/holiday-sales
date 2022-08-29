import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SALE_SEARCH } from "../../graphql/sale/queries";
import { SearchResultTile } from "../../common/components/search-result-tile/SearchResultTile";
import { Title, ContentContainer } from "./styles";

export const SearchResults = () => {
  let [searchParams] = useSearchParams()
  const query = useMemo(() => searchParams.get("query"), [searchParams])
  const { loading, error, data } = useQuery(GET_SALE_SEARCH, { variables: { query }});

  let content: JSX.Element;

  if (loading) {
    content = <div>Loading results.. please wait</div>
  } else if (error) {
    content = <div>There has been an error, please refresh the page and try again</div>
    console.error(error)
  } else {
    const resultTotal = data.saleSearch.resultCount
    content = (
      <>
        <p>{`There were ${resultTotal} results matching your search criteria. Here are ${resultTotal > 10 ? 10 : resultTotal}:`}</p>
        <p>Click on any result to be taken to more information.</p>
        {data.saleSearch.sales.map((result: any) =>
          <SearchResultTile
            key={result.id}
            id={result.id}
            title={result.editorial.title}
            name={result.editorial.destinationName}
            imgUrl={result.photos[0].url}
          />
        )}
      </>
    )
  }

  return (
    <main>
      <Title>Your search results</Title>
      <ContentContainer>{content}</ContentContainer>
    </main>
  )
}
