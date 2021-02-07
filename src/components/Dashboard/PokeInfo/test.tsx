import { render, screen } from '@testing-library/react'

import PokeInfo from '.'

describe('<PokeInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<PokeInfo pokeName="ivysaur" pokeId="2" />)

    expect(
      screen.getByRole('heading', { name: /PokeInfo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
