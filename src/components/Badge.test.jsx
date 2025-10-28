import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from './Badge';

describe('Badge', () => {
  it('renders the badge text', () => {
    render(<Badge text="Test text"/>)
    expect(screen.getByText('Test text'))
    .toBeInTheDocument()
  })
});
