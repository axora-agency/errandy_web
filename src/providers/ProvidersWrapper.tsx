import type { PropsWithChildren } from "react";
import { LayoutProvider, MenusProvider } from "@/providers";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/apolloClient";

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ApolloProvider client={client}>
        <LayoutProvider>
          <MenusProvider>{children}</MenusProvider>
        </LayoutProvider>
    </ApolloProvider>
  );
};

export { ProvidersWrapper };
