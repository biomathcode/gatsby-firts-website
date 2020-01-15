import React from 'react'
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
           allContentfulBlogPost(
               sort: {
                   fields: date,
                   order:DESC
               }
           ){
               edges{
                   node{
                       title
                       slug
                       date(formatString:"MMMM Do, YYYY")
                   }
               }
           }
        }
    `);
    const newData = data.allContentfulBlogPost.edges
    return (
        <Layout>
            <Head title="blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    const slug = edge.node.slug
                    const slugID = "/blog/" + slug 
                    return(
                        <li className={blogStyles.post}>
                            <Link to={slugID}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.date}</p>
                            </Link>
                            
                        </li>
                    )

                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;