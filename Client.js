import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
const client = new ApolloClient({
  uri: `https://graph.qa.f1.flexdrive.com/`
});
client
  .query({
    query: gql`
      query Vehicles($skip: Int! = 0, $take: Int! = 10) {
        vehicles(query: { skip: $skip, take: $take }) {
          edges {
            node {
              id
              year
              make
              trim
              model
              rideshareEligible
              pricing {
                value
                duration
                durationUnit
              }
              location {
                id
                name
              }
              featureImage {
                url
              }
            }
          }
          totalCount
          pageInfo {
            hasNextPage
          }
        }
      }
    `
  })
  .then(result => console.log(result));
export {client}