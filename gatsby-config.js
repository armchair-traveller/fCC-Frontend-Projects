{
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] }
    }
  ];
}
