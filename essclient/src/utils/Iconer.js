import React from 'react';
import { withStyles } from '@material-ui/core/styles'


const icons = {
    menu: `<path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"/>`,
    lease: `<path d="M18,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M9,4h2v5l-1-0.75L9,9V4z M18,20H6V4h1v9l3-2.25L13,13V4h5V20z"/>`,
    lessor: `<path d="M 16.5 13 c -1.2 0 -3.07 0.34 -4.5 1 c -1.43 -0.67 -3.3 -1 -4.5 -1 C 5.33 13 1 14.08 1 16.25 V 19 h 22 v -2.75 c 0 -2.17 -4.33 -3.25 -6.5 -3.25 Z m -4 4.5 h -10 v -1.25 c 0 -0.54 2.56 -1.75 5 -1.75 s 5 1.21 5 1.75 v 1.25 Z m 9 0 H 14 v -1.25 c 0 -0.46 -0.2 -0.86 -0.52 -1.22 c 0.88 -0.3 1.96 -0.53 3.02 -0.53 c 2.44 0 5 1.21 5 1.75 v 1.25 Z M 7.5 12 c 1.93 0 3.5 -1.57 3.5 -3.5 S 9.43 5 7.5 5 S 4 6.57 4 8.5 S 5.57 12 7.5 12 Z m 0 -5.5 c 1.1 0 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 s 0.9 -2 2 -2 Z m 9 5.5 c 1.93 0 3.5 -1.57 3.5 -3.5 S 18.43 5 16.5 5 S 13 6.57 13 8.5 s 1.57 3.5 3.5 3.5 Z m 0 -5.5 c 1.1 0 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 s 0.9 -2 2 -2 Z"/>`,
    report: `<path d="M 22 6.92 l -1.41 -1.41 l -2.85 3.21 C 15.68 6.4 12.83 5 9.61 5 C 6.72 5 4.07 6.16 2 8 l 1.42 1.42 C 5.12 7.93 7.27 7 9.61 7 c 2.74 0 5.09 1.26 6.77 3.24 l -2.88 3.24 l -4 -4 L 2 16.99 l 1.5 1.5 l 6 -6.01 l 4 4 l 4.05 -4.55 c 0.75 1.35 1.25 2.9 1.44 4.55 H 21 c -0.22 -2.3 -0.95 -4.39 -2.04 -6.14 L 22 6.92 Z"/>`,
    currency: `<path d="M11.8,10.9c-2.27-0.59-3-1.2-3-2.15c0-1.09,1.01-1.85,2.7-1.85c1.78,0,2.44,0.85,2.5,2.1h2.21C16.14,7.28,15.09,5.7,13,5.19V3h-3v2.16C8.06,5.58,6.5,6.84,6.5,8.77c0,2.31,1.91,3.46,4.7,4.13c2.5,0.6,3,1.48,3,2.41c0,0.69-0.49,1.79-2.7,1.79c-2.06,0-2.87-0.92-2.98-2.1h-2.2c0.12,2.19,1.76,3.42,3.68,3.83V21h3v-2.15c1.95-0.37,3.5-1.5,3.5-3.55C16.5,12.46,14.07,11.49,11.8,10.9z"/>`,
    document: `<path d="M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H8V4h12V16zM4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6zM16,12V9c0-0.55-0.45-1-1-1h-2v5h2C15.55,13,16,12.55,16,12z M14,9h1v3h-1V9zM10,11h1c0.55,0,1-0.45,1-1V9c0-0.55-0.45-1-1-1h-1H9v5h1V11z M10,9h1v1h-1V9z"/>`,
    save: `<path d="M17,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V7L17,3z M19,19H5V5h11.17L19,7.83V19zM12,12c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3C15,13.34,13.66,12,12,12z"/><rect x="6" y="6" width="9" height="4"/>`,
    undo: `<path d="M12.5,8c-2.65,0-5.05,0.99-6.9,2.6L2,7v9h9l-3.62-3.62c1.39-1.16,3.16-1.88,5.12-1.88c3.54,0,6.55,2.31,7.6,5.5l2.37-0.78C21.08,11.03,17.15,8,12.5,8z"/>`,
    down: `<path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"/>`,
    plus: `<path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/>`,
    clear: `<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z"/>`,
}

const styles = () => ({
})


function createMarkup(icon) {
    return {__html:icons[icon]};
};

const Iconer = (props) => {
    return (
        <svg fill={props.theme.palette[props.color].main} focusable="false" width="24" height="24"
             dangerouslySetInnerHTML={createMarkup(props.name)}>
        </svg>
        )
}
export default withStyles(styles, { withTheme: true })(Iconer);