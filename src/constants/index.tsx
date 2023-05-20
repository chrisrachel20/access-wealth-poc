import DashboardIcon from "@mui/icons-material/Dashboard";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import LogoutIcon from "@mui/icons-material/Logout";

export const SIGN_IN = " Sign In";
export const LOGIN_ERROR = "Unauthorized User. Please enter valid credentials";
export const NET_QTY = "Net Quantity";
export const MARKET_PRICE = "Market Price";
export const MARKET_VALUE = "Market Value";
export const PORTFOLIO_VALUE = "Portfolio Valuation";
export const INVESTOR_NAME = "Investor Name:";
export const INVESTOR_ACCOUNT_CURRENCY = "Investor Account Currency:";
export const VALUATION_CURRENCY = "Valuation Currency:";
export const INVESTOR_PORTFOLIO_VALUE = "Portfolio Value:";
export const ACCESS_WEALTH = "Access Wealth";
export const SIDEBAR = [
  {
    title: "Dashboard",
    route: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Transactions",
    route: "/transactions",
    icon: <LineAxisIcon />,
  },
  {
    title: "Sign Out",
    route: "/login",
    icon: <LogoutIcon />,
  },
];
export const PIE_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export const LINE_COLORS = [
  "#0d6efd",
  "#6f42c1",
  "#20c997",
  "#0dcaf0",
  "#198754",
];
export const CURRENT_STOCKS = "Available Stocks";
