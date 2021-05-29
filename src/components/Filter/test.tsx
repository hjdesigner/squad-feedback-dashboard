import { render, screen } from '@testing-library/react'
import Filter from './index'

describe('<User />', () => {
  it('Should render the component with the number of positive feedbacks equal to 10', () => {
    const values = {
      positive: 10,
      develop: 2
    }
    render(<Filter item={values} />)
    expect(screen.getByText(/10/i))
  })

  it('Should render the component with the number of feedbacks to develop equal to 2', () => {
    const values = {
      positive: 10,
      develop: 2
    }
    render(<Filter item={values} />)
    expect(screen.getByText(/2/i))
  })

  it('Should render the component with the number of positive feedbacks equal to 50', () => {
    const values = {
      positive: 50,
      develop: 10
    }
    render(<Filter item={values} />)
    expect(screen.getByText(/50/i))
  })

  it('Should render the component with the number of feedbacks to develop equal to 10', () => {
    const values = {
      positive: 50,
      develop: 10
    }
    render(<Filter item={values} />)
    expect(screen.getByText(/10/i))
  })
})
