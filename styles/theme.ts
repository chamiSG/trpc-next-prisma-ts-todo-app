import { extendTheme } from '@chakra-ui/react'
const breakpoints = {
  base: '0',
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1440px',
  '2xl': '1536px',
}


export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `"Inter", sans-serif`,
    body: `"Inter", sans-serif`,
  },
})