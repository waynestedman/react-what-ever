import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from './Card'

describe('Card', () => {
  it('renders the card title', () => {
    render(<Card />)
    expect(screen.getByText('Cool Card')).toBeInTheDocument()
  })

  it('renders the badge', () => {
    render(<Card />)
    expect(screen.getByText('Buy Now')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<Card />)
    const image = screen.getByAltText('placeholder image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://placehold.co/400x300')
  })

  it('renders the card body text', () => {
    render(<Card />)
    expect(screen.getByText(/Prow scuttle parrel/i)).toBeInTheDocument()
  })
});
