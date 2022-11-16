import React from 'react'
import {graphql} from 'gatsby'

import Header from '../components/index/Header'
import Carousels from '../components/index/Carousels'
import Layout from '../components/shared/Layout'

const IndexPage = ({data}) => {
   return (
      <Layout>
         <Header/>
         <Carousels/>
      </Layout>
   )
}

export const query = graphql`
   query {
      allContentfulArticleComponent {
         edges {
            node {
              title
              subtitle
              url
              author
              date
              thumbnail {
               contentful_id
               file {
                  url
               }
              }
              publication
            }
          }
        }
   }
`

export default IndexPage
