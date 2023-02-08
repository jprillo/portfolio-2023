import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout2";
import Content, { HTMLContent } from "../components/Content";

import ad from '../images/ad.png'
import adtwo from '../images/ad-two.png'

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div className="pad-top blog-wrap" >
      {helmet || ""}
     
      
            <div className="flex gap-2">
                <div className="col-9">
                <h1 >
              {title}
            </h1>            
         <p>{description}</p>
         <div className="blog-content">
         <PostContent content={content} />
         </div>
         {tags && tags.length ? (
           <div style={{ marginTop: `4rem` }}>
             <h4>Tags</h4>
             <ul className="taglist">
               {tags.map((tag) => (
                 <li key={tag + `tag`}>
                   <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                 </li>
               ))}
             </ul>
           </div>
         ) : null}
     
                </div>

                <div className="col-3">
                <img className="v-pad-10" width="100%" src= {ad} alt="Sauronana is a rotten banana cursed by a dark lord." />
                <img className="v-pad-10" width="100%" src= {adtwo} alt="Jason weather is the worlds most point less app. " />
                </div>
            </div>
       
      
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
<div className="h-pad" style={{background: "yellow"}}>
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;