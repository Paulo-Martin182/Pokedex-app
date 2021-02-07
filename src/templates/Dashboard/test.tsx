import { render, screen } from '@testing-library/react'

import Dashboard from '.'

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    const { container } = render(<Dashboard />)

    expect(
      screen.getByRole('heading', { name: /Dashboard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
