import React from 'react'
import {Link} from 'gatsby'

import {Navbar, Item} from './Styles'

const ProjectNavbar = () => {
    return (
        <Navbar>
            <Item logo>
                <div>Archive Explorer</div>
            </Item>
            <Item>
                <div>Explore</div>
            </Item>
        </Navbar>
    )
}

export default ProjectNavbar