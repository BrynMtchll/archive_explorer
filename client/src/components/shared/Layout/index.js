import React, {Fragment} from "react"

import Navbar from "components/shared/Navbar"
import BaseStyles from "global/BaseStyles"
import {SiteRoot} from "./Styles"

import 'global/fontStyles.css'

const projectLayout = ({children}) => {
    return (
        <Fragment>
            <BaseStyles/>
            <SiteRoot>
                <Navbar/>
                {children}
            </SiteRoot>
        </Fragment>
    )
}

export default projectLayout