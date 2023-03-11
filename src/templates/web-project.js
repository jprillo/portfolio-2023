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
export const WebProjectTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  color1,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div className=" h-pad" style={{background: color1}}>
      <Layout color= "dark-nav">
      {helmet || ""}
     
      
            <div className="flex gap-2 pad-top b-pad">
                <div className="col-9">
                <h1 >
              {title}
            </h1>            

         <div className="web-content">
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
            </Layout>
      
    </div>
  );
};

WebProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  color1: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
<div >
    
      <WebProjectTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        color1={post.frontmatter.color1}
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
        color1
        description
        tags
      }
    }
  }
`;