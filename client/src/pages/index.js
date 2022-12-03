import React from 'react'
import {graphql} from 'gatsby'

import Header from 'components/index/Header'
import Carousels from 'components/index/Carousels'
import Layout from 'components/shared/Layout'

const IndexPage = ({data}) => {
   const articlesData = data.allContentfulArticleComponent.nodes.map(node => node);
   return (
      <Layout>
         <Header/>
         <Carousels articlesData={articlesData}/>
      </Layout>
   )
}

export const Head = () => {
   <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"/> 
   </>
}



export const query = graphql`
query topTenArticles {
   allContentfulArticleComponent(
     limit: 10
     filter: {publication: {eq: "The_Startup"}}
     sort: {claps: DESC}
   ) {
     nodes {
       author
       claps
       date
       id
       publication
       subtitle
       title
       thumbnail {
         gatsbyImageData(placeholder: BLURRED)
       }
       month
       year
     }
   }
 }
`

export default IndexPage
