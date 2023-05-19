import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { getTransactions } from "../../store/actionCreators/transactions";
import { useDispatch, useSelector } from "react-redux";

const Transactions = () => {
  const {
    transactionReducer: { transactions },
  } = useSelector((state: any) => state);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch<any>(getTransactions());
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      const filteredData = transactions?.map((item: any) => {
        return {
          id: item.id,
          tradeDate: item.tradeDate,
          trxType: item.trxType,
          name: item.security.name,
          qty: item.qty,
          securityCurrencyCode: item.securityCurrencyCode,
          price: item.price.toFixed(2),
          netAmount: item.netAmount.toFixed(2),
        };
      });
      setData(filteredData);
    }
  }, [transactions]);

  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "#", width: 20 },
    { field: "tradeDate", headerName: "Trade Date", width: 150 },
    { field: "trxType", headerName: "Trx. Type", width: 150 },
    { field: "name", headerName: "Security Name", width: 250 },
    { field: "qty", headerName: "Qty", width: 150 },
    { field: "securityCurrencyCode", headerName: "Sec. Currency", width: 200 },
    { field: "price", headerName: "Price (Sec. Cur)", width: 200 },
    { field: "netAmount", headerName: "Net Amount (Sec. Cur)", width: 250 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        ml: 53,
        padding: "24px",
        mt: 20,
        mr: 20,
        borderRadius: "0.75rem",
        backgroundColor: "#EBF4FA",
        mb: 20,
      }}
    >
      <DataGrid
        rows={data}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
        hideFooterPagination={true}
        hideFooterSelectedRowCount={true}
        sx={{
          m: 2,
          p: 2,
          "&, & .MuiDataGrid-root": {
            borderColor: "#282c34",
            borderWidth: 2,
          },
          "& .MuiDataGrid-columnHeader": {
            fontSize: 22,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 900,
          },
          "& .MuiDataGrid-cellContent": {
            fontSize: 20,
          },
          "& .MuiDataGrid-withBorderColor": {
            borderColor: "#282c34",
            borderWidth: 2,
          },
          "& .MuiInputBase-root, & .MuiSvgIcon-root": {
            fontSize: 24,
          },
        }}
      />
    </Box>
  );
};
export default Transactions;
