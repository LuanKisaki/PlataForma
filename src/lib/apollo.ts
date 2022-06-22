import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ow0max1aot01z402b3fh4x/master',
    cache: new InMemoryCache()
})