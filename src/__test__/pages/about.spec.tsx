import { render, screen } from '@testing-library/react'
import About from '@/pages/about'

describe('About Page', () => {
    it('renders about page correctly', () => {
        const page = render(<About />)
        expect(screen.getByTestId('title').textContent).toBe('Halaman About')
        expect(page).toMatchSnapshot();
    })
})