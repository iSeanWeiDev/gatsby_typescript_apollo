import { useStaticQuery, graphql } from 'gatsby';

export const useAppNavbarQuery = () =>
  useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logos/desktop.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
