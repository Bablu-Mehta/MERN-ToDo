import { render, screen } from "@testing-library/react";

const Home = () => <h1>Hello Next.js</h1>;

test("renders the heading", () => {
  render(<Home />);
  expect(screen.getByText("Hello Next.js")).toBeInTheDocument();
});
