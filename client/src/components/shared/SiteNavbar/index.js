import React from 'react'
import {Link} from 'gatsby'

import {Navbar, Item} from './Styles'

const SiteNavbar = () => {
    return (
        <Navbar>
            <Item logo>
                <Link>Archive Explorer</Link>
            </Item>
            <Item>
                <Link>Explore</Link>
            </Item>
        </Navbar>
    )
}

export default SiteNavbar