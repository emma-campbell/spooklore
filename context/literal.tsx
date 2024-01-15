"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

export const getClient = () => {
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

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink,
            link,
          ])
        : ApolloLink.from([authLink, link]),
  });
};

export function LiteralWrapper({
  children,
}: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={getClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
