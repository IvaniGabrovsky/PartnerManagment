import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { AlliumProvider } from '@telus-uds/ds-allium'
import Home from './'
import theme from '@/styles/theme'

ThemeProvider.defaultProps = { theme }

const AppProvider = ({ children }) => (
  <AlliumProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </AlliumProvider>
)

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />, { wrapper: AppProvider })

    const heading = screen.getByRole('heading', {
      name: /(Insert Homepage Here)/i
    })

    expect(heading).toBeInTheDocument()
  })
})
