import { gql } from "@apollo/client";

export const GET_SALE_SEARCH = gql`
  query SaleSearch($query: String) {
    saleSearch(travelTypes: ["HOTEL_ONLY"], query: $query) {
      resultCount
      sales(limit: 10, offset: 0) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
        }
      }
    }
  }
`

export const GET_SALE_INFO = gql`
  query SaleInformation($saleId: String!) {
  sale(saleId: $saleId) {
    editorial {
      title
      destinationName
      hotelDetails
      reasonToLove
    }
    prices {
      leadRate {
        forDisplay
      }
    }
    photos {
      url
    }
  }
}
`
