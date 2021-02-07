import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Header />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading> #001 - BULBASAUR </Heading>)

    expect(
      screen.getByRole('heading', { name: /#001 - BULBASAUR/i })
    ).toHaveStyle({
      color: 'rgb(250, 250, 250)'
    })
  })
})
