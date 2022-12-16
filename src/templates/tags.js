import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout2";

import BlogArticle from '../components/blogArticleOne';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
   
<BlogArticle
     width = "nnn"
      type = "feature"
      slug = {post.node.fields.slug}
      tag = {post.node.frontmatter.tags[0]}
      title = {post.node.frontmatter.title}
      description = {post.node.frontmatter.description}
      featuredImage = {post.node.frontmatter.featuredImage.publicURL}
      />
  
    ));
    
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="pad-top"
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <div className="col-8">{postLinks}</div>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            description
            featuredImage{
              publicURL
            }
          }
        }
      }
    }
  }
`;