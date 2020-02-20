/**
 * Global definitions for basic files that you might import using webpack.
 *
 * When it comes to csv files you could specify the exact structure on a file per file basis but
 * that is up to you to decide if it is worth it.
 */
declare module '*.csv' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}
