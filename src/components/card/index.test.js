import { render, screen } from "@testing-library/react";
import { PortfolioCard } from "./index";
import * as Strings from "../../constants/index";
import { useSelector } from "react-redux";

const masterData = {
  portfolio: {
    name: "Test Investor",
    investor: {
      currencyCode: 'USD'
    }
  },
  currencyCode: "USD",
  marketValue: 10000,
};
const props = { masterData };

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(() => mockDispatch),
  useSelector: jest.fn(),
}));

describe("PortfolioCard", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(masterData);
    });
  });

  it("Should render component properly", () => {
    const { container } = render(<PortfolioCard {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render the investor's name", () => {
    render(<PortfolioCard {...props} />);
    expect(screen.getByText(Strings.INVESTOR_NAME)).toBeTruthy();
    expect(screen.getByText(masterData.portfolio.name)).toBeInTheDocument();
  });

  it("should render the investor's account currency", () => {
    render(<PortfolioCard {...props} />);
    expect(screen.getByText(Strings.INVESTOR_ACCOUNT_CURRENCY)).toBeTruthy();
  });

  it("should render the valuation currency", () => {
    render(<PortfolioCard {...props} />);
    expect(screen.getByText(Strings.VALUATION_CURRENCY)).toBeTruthy();
  });

  it("should render the investor's portfolio value", () => {
   render(<PortfolioCard {...props} />);
    expect(screen.getByText(Strings.INVESTOR_PORTFOLIO_VALUE)).toBeTruthy();
    expect(screen.getAllByText(masterData.marketValue)).toBeInTheDocument();
  });
});
