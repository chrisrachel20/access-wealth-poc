import { render } from "@testing-library/react";
import { PortfolioCard } from "./index";
import * as Strings from "../../constants/index";
import { useSelector } from "react-redux";

const masterData = {
  portfolio: {
    name: "Test Investor",
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
    const { container, toJSON } = render(<PortfolioCard {...props} />);
    expect(toJSON(container)).toMatchSnapshot();
  });

  it("should render the investor's name", () => {
    const { getByText } = render(<PortfolioCard {...props} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(Strings.INVESTOR_NAME)).toBeInTheDocument();
    expect(getByText(masterData.portfolio.name)).toBeInTheDocument();
  });

  it("should render the investor's account currency", () => {
    const { getByText } = render(<PortfolioCard {...props} />);
    expect(getByText(Strings.INVESTOR_ACCOUNT_CURRENCY)).toBeInTheDocument();
    expect(
      getByText(masterData.portfolio.investor.currencyCode)
    ).toBeInTheDocument();
  });

  it("should render the valuation currency", () => {
    const { getByText } = render(<PortfolioCard {...props} />);
    expect(getByText(Strings.VALUATION_CURRENCY)).toBeInTheDocument();
    expect(getByText(masterData.currencyCode)).toBeInTheDocument();
  });

  it("should render the investor's portfolio value", () => {
    const { getByText } = render(<PortfolioCard {...props} />);
    expect(getByText(Strings.INVESTOR_PORTFOLIO_VALUE)).toBeInTheDocument();
    expect(getByText(masterData.marketValue)).toBeInTheDocument();
  });
});
