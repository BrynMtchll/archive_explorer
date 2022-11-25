import React from 'react'

import {ArrowBtn, Arrow} from './Styles'

const ProjectArrowBtn = ({btnHidden, isLeftBtn, handleArrowClick}) => {
    return (
        <ArrowBtn isLeftBtn={isLeftBtn}  btnHidden={btnHidden} onClick={() => handleArrowClick(isLeftBtn)}>
            <Arrow>
                <div></div>
                <div></div>
            </Arrow>
        </ArrowBtn>
    )
}

export default ProjectArrowBtn