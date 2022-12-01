import React from 'react'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

import {ArticleCard, Text, Credits, PubLogo, Author, Pub, Title, Subtitle, Details, Date, ClapsLogo, Claps, Thumbnail, ConnectorWord} from './Styles'

const ProjectArticleCard = ({articleData}) => {
    const image = getImage(articleData.thumbnail);
    return (
        <ArticleCard>
            <Text>
                {/* <Credits>
                    <PubLogo/>
                    <Author>{articleData.author}</Author>
                    <ConnectorWord> In </ConnectorWord>
                    <Pub>{articleData.publication}</Pub>
                </Credits> */}
                <Title>{articleData.title}</Title>
                <Subtitle>{articleData.subtitle}</Subtitle>
                <Details>
                    <Date>{articleData.date}</Date>
                    {/* <Claps><ClapsLogo/>{articleData.claps}</Claps> */}
                </Details>
            </Text>
            <Thumbnail>
                <GatsbyImage as={"div"} image={image} alt={"thumbnail"} objectFit={'cover'}/>
            </Thumbnail>
        
        </ArticleCard>
    )
}

export default ProjectArticleCard