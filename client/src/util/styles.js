export const fontSize = {
    t: 'font-size: 0.85rem;',
    s: 'font-size: 1rem;',
    m: 'font-size: 1.25rem;',
    l: 'font-size: 1.563rem;',
    xl: 'font-size: 1.953rem;',
    xxl: 'font-size: 2.441rem;',
}

export const baseFontSize = {
    s: 'font-size: 14px;',
    m: 'font-size: 16px;',
    l: 'font-size: 20px;',
}

export const fontFamily = 'font-family: "Fira Sans", sans-serif;'

export const color = {
    lightPrimary: '#E8E8E8',
    lightSecondary: '#c2c2c2',
    darkPrimary: '#0D1213',
    darkSecondary: '#031B1A',
    medium: '#5c5c5c',
    colorPrimary: '#00A7AF',
    backgroundLightSecondary: '#c0cfc6',
    backgroundLightPrimary: '#e1ede6',
    backgroundColorDarkSecondary: '#809188',
    backgroundColorMedium: '#96a899',
    colorSecondary: '#5c5504',
    highlight: '#e8335e',
}

export const carousel = {
    numVisItems: 4,
    itemMargin: '1.5rem',
}

export const sitePadding = '5rem';

// article width calculated such that 
// the desired number of carousel items 
// fit neatly within the site padding

export const article = {
    width: `calc((100vw 
            - (2 * ${sitePadding}) 
            - ((${carousel.numVisItems} - 1) * ${carousel.itemMargin})) 
            / ${carousel.numVisItems})`,
    height: '20rem',
    borderRadius: '0.8rem',
}

carousel.itemWidth = `calc(${article.width} + ${carousel.itemMargin})`