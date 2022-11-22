import {createGlobalStyle} from 'styled-components'

import {color, fontSize, fontFamily, baseFontSize} from 'util/styles'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        line-height: 1.4;
        ${baseFontSize.l}
        ${fontFamily}

    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td, input, button {
        margin: 0;
        padding: 0;
        background: none;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        font-size: 100%;
        vertical-align: baseline;
    }

    :focus {
        outline: 0;
    }

    body, select {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`