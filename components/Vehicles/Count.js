import { gql } from "apollo-boost";
import React from "react";
import { Query } from "react-apollo";
import { Text } from "react-native";
const GET_TOTAL = gql`
  {
    count @client
  }
`;
const Count = () => (
  <>
    <Query query={GET_TOTAL}>
      {({ loading, error, data }) => {
        if (loading) return;
        if (error) return;
        return (
          <>
            <Text></Text>
          </>
        );
      }}
    </Query>
  </>
);
export default Count;
