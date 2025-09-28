import type { PropsWithChildren } from "react";
import { LayoutProvider, MenusProvider } from "@/providers";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/apolloClient";
import { ThemeProvider } from "@/components/theme-provider";

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <LayoutProvider>
          <MenusProvider>{children}</MenusProvider>
        </LayoutProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export { ProvidersWrapper };
