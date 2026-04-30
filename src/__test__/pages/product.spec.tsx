import { render, screen } from "@testing-library/react";
import ProductPage from "../../pages/produk";

jest.mock('../../utils/db/servicefirebase', () => ({
  retrieveProducts: jest.fn(),
  retrieveProductById: jest.fn(),
}));

// Mock next/router to avoid NextRouter was not mounted error
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
}));

describe('Product Page', () => {
    it('renders product page correctly', async () => {
        const page = render(<ProductPage products={[]} />)
        expect((await screen.findByTestId('title')).textContent).toBe('Dashboard Produk');
        expect(page).toMatchSnapshot();
    })
})
