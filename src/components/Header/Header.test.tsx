import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import React from 'react'

describe('Header', () => {
    render(<Header />)
    it('renders header with text', () => {
        expect(screen.getByRole('heading')).toHaveTextContent(
            'List of Star Wars Planets'
        )
    })
})
