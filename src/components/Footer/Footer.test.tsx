import React from 'react'
import { Footer } from './Footer'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
    it('should render with text', () => {
        render(<Footer />)
        expect(screen.getByTestId('footer')).toHaveTextContent(
            'Copyright © 2021 Daria Vasylevska'
        )
    })
})
