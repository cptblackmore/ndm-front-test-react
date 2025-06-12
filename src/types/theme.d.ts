import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      grey: {
        100: string,
        200: string,
        300: string,
      },
      background: string,
      text: string,
    },
    font: {
      family: string,
    },
  }
}