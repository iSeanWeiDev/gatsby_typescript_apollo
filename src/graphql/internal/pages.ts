import { useStaticQuery, graphql } from 'gatsby';

const useAppPageQuery = () =>
  useStaticQuery(graphql`
    query {
      defaultLogo: file(relativePath: { eq: "post-default-thumb.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

export default useAppPageQuery;
