import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
const cache = new InMemoryCache();
const query = gql`
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

const client = new ApolloClient({
  cache,
  uri: `https://graph.qa.f1.flexdrive.com/`
});
cache.writeData({
  data: {
    count: 0,
  }
});
client
  .query({
    query
  })
  .then(result => {
    console.log(result);
    cache.writeData({
      data: {
        count: result.data.vehicles.totalCount
      }
    });
  });
export {client}