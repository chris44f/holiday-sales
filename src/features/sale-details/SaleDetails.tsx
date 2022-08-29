import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { sanitize } from 'dompurify'
import { GET_SALE_INFO } from "../../graphql/sale/queries";
import { ContentContainer, PageTitle, SubHeading, Image, Quote, Price, MarkupContainer } from "./styles";


export const SaleDetails = () => {
  let params = useParams()
  const { error, data } = useQuery(GET_SALE_INFO, { variables: { saleId: params.id }});

  let content: JSX.Element

  if (data) {
    const { editorial, photos, prices } = data?.sale;
    const sanitisedHotelDetails = sanitize(editorial.hotelDetails)

    const markUpHotelDetails = () => ({__html: sanitisedHotelDetails})

    content = (
      <>
        <PageTitle>{editorial.title}</PageTitle>
        <Image src={photos[0].url} alt={''}/>
        <SubHeading>{editorial.destinationName}</SubHeading>
        <Quote>{`What we love about it: ${editorial.reasonToLove}`}</Quote>
        <MarkupContainer dangerouslySetInnerHTML={markUpHotelDetails()} />
        <Price>{`${prices.leadRate.forDisplay} per night - click here to book now`}</Price>
      </>
    )
  } else if (error) {
    content = <p>There has been an error, please refresh the page...</p>
  } else {
    content = <p>Loading, please wait...</p>
  }

  return (
    <ContentContainer>
      {content}
    </ContentContainer>
  )
}
