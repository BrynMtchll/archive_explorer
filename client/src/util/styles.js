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
    lightSecondary: '#dbdbdb',
    darkPrimary: '#0D1213',
    darkSecondary: '#031B1A',
    medium: '#5c5c5c',
    colorPrimary: '#00A7AF',

//     $light-primary: hsl(350, 5%, 93%);
// $light-secondary: hsl(350, 0%, 55%);
// $light-half-secondary: mix($light-primary, $light-secondary, 50%);
// $dark-primary: hsl(350, 5%, 5%);
// $dark-secondary: hsl(350, 5%, 10%);
}
const carouselItemMarginVal = '1.5rem';
const numVisCarouselItems = 2;

// article width calculated such that the desired number of 
// carousel items fit perfectly within the site padding
const articleCardWidthExp = `(100vw - (2 * 4rem) - ((${numVisCarouselItems} - 1) * ${carouselItemMarginVal})) / ${numVisCarouselItems}`

export const sitePadding = `padding: 0 4rem;`

export const articleCardWidth = `width: calc(${articleCardWidthExp});`
// article width + margin 
export const carouselItemWidthExp = `${articleCardWidthExp} + 1.5rem`;

