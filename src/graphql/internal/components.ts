import { useStaticQuery, graphql } from 'gatsby';

const useAppComponentQuery = () =>
  useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logos/desktop.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      mobLogo: file(relativePath: { eq: "event-placeholder.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

export default useAppComponentQuery;
