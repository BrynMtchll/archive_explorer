import React from 'react'

import {ArticleCardS, CreditsS, AuthorS, PubS, TitleS, SubtitleS, DetailsS, DateS, ClapsS} from './Styles'

const ArticleCard = () => {
    return (
        <ArticleCardS>
            <CreditsS>
                <AuthorS></AuthorS>
                <PubS></PubS>
            </CreditsS>
            <TitleS></TitleS>
            <SubtitleS></SubtitleS>
            <DetailsS>
                <DateS></DateS>
                <ClapsS></ClapsS>
            </DetailsS>
        </ArticleCardS>
    )
}

export default ArticleCard