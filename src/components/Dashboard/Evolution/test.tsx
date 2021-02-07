import { render, screen } from '@testing-library/react'

import Evolution from '.'

describe('<Evolution />', () => {
  it('should render the heading', () => {
    const { container } = render(<Evolution />)

    expect(
      screen.getByRole('heading', { name: /Evolution/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
