import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  const authLink = setContext((_, { headers }) => {
    const token = process.env.NEXT_PUBLIC_LITERAL_TOKEN;

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const link = new HttpLink({
    uri: "https://literal.club/graphql/",
    fetchOptions: {
      cache: "no-store",
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink, link]),
  });
});