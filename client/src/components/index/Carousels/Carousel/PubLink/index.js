import React from 'react'

import {PubLink, Pub, LinkArrow, LinkPrompt} from './Styles'


const ProjectPubLink = ({publication}) => {
    return (
        <PubLink>
            <Pub>{publication}</Pub>
            <LinkPrompt>Explore all</LinkPrompt>
            <LinkArrow>
                <div></div>
                <div></div>
            </LinkArrow>
        </PubLink>
    )
}

export default ProjectPubLink