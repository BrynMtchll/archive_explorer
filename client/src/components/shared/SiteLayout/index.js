import React, {Fragment} from "react"

import SiteNavbar from "components/shared/SiteNavbar"
import BaseStyles from "global/BaseStyles"
import {SiteRoot} from "./Styles"

import 'global/fontStyles.css'

const SiteLayout = ({children}) => {
    return (
        <Fragment>
            <BaseStyles/>
            <SiteRoot>
                <SiteNavbar/>
                {children}
            </SiteRoot>
        </Fragment>
    )
}

export default SiteLayout