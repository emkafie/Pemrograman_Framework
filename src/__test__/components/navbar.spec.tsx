import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/layouts/navbar";
import { useSession, signIn, signOut } from "next-auth/react";

// Mock next-auth
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

// Mock next/router
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

describe("Navbar Component", () => {
  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });
  });

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("displays Sign In button when unauthenticated", () => {
    render(<Navbar />);
    const signInButton = screen.getByText("Sign In");
    expect(signInButton).toBeInTheDocument();
    
    fireEvent.click(signInButton);
    expect(signIn).toHaveBeenCalled();
  });

  it("displays user info and Sign Out button when authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: { fullname: "John Doe", email: "john@example.com", image: "" },
      },
      status: "authenticated",
    });

    render(<Navbar />);
    expect(screen.getByText("Hai, John Doe!")).toBeInTheDocument();
    
    const signOutButton = screen.getByText("Sign Out");
    expect(signOutButton).toBeInTheDocument();
    
    fireEvent.click(signOutButton);
    expect(signOut).toHaveBeenCalled();
  });
});
