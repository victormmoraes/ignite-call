import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  marginLeft: 'auto',

  display: 'flex',
  gap: '$20',
  alignItems: 'center',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`${Heading}`]: {
    '@media(max-width: 680px)': {
      fontSize: '$6xl',
    },
  },

  [`${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 680px)': {
    display: 'none',
  },
})
