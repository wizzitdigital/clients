import gql from "graphql-tag";
import { createClient } from "@wizzit-clients/core";
import { name, version } from "../package.json";
import { resolvers } from "./resolvers";

const typeDefs = gql`
  input PayInput {
    msisdn: String!
    ref_id: String
    # ttl: Int
    # callback_url: String
    # progress_url: String
    # wamsisdn: String
    # view_state: JSONObject!
    # amount: Int
    # confirm: Boolean
    # masked_card: String
    # merchant_name: String
    # require_ref: String
    # allow_user_amount: Boolean
    # first_name: String
    # last_name: String
    # email: String
    # run_template_id: String
    # card_number_1: String
    # card_number_2: String
    # client_id: String
    # authorization: String
  }

  type Session {
    error: String
    url: String
  }

  type Query {
    ping: Boolean
  }

  type Mutation {
    createPaySession(operation: PayInput!): Session!
  }
`;

export const client = createClient({
  name,
  version,
  typeDefs,
  resolvers
});
