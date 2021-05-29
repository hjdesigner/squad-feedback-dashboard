import { render, screen } from '@testing-library/react'
import User from './index'

describe('<User />', () => {
  it('Should render with name Henrique Melanda', () => {
    const user = {
      name: 'Henrique',
      lastname: 'Melanda',
      position: 'Software Engineer'
    }
    render(<User item={user} />)
    expect(screen.getByText(/Henrique Melanda/i))
  })
  it('Should render with position Software Engineer', () => {
    const user = {
      name: 'Henrique',
      lastname: 'Melanda',
      position: 'Software Engineer'
    }
    render(<User item={user} />)
    expect(screen.getByText(/Software Engineer/i))
  })
  it('Should render with name Enzo Duarte', () => {
    const user = {
      name: 'Enzo',
      lastname: 'Duarte',
      position: 'UX'
    }
    render(<User item={user} />)
    expect(screen.getByText(/enzo duarte/i))
  })
  it('Should render with position UX', () => {
    const user = {
      name: 'Henrique',
      lastname: 'Melanda',
      position: 'UX'
    }
    render(<User item={user} />)
    expect(screen.getByText(/ux/i))
  })
})
