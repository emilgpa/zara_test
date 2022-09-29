# Instructions

- `yarn dev`: run app in development mode
- `yarn build`: build the app in production mode
- `yarn preview`: run app (production)

# Notes

`react-query` is used in this app. The cache is not used by the plugin `persistQueryClient` because the feed of a podcast (for get all episodes) is returned in XML and the plugin not give the possbility to serialize/deserealize a query in a custom way (only it allow for `query client` entire).