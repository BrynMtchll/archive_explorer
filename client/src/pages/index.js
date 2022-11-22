import React from 'react'
import {graphql} from 'gatsby'

// import Header from 'components/index/Header'
// import Carousels from 'components/index/Carousels'
import SiteLayout from 'components/shared/SiteLayout'

const IndexPage = ({data}) => {
   return (
      <SiteLayout>
         {/* <Header/>
         <Carousels/> */}
      </SiteLayout>
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
