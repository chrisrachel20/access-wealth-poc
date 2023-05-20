import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { getTransactions } from "../../store/actionCreators/transactions";
import { useDispatch, useSelector } from "react-redux";
import { tableColumns } from "../utils";
import * as styles from "./styles";

const Transactions = () => {
  const dispatch = useDispatch();

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

  return (
    <Box sx={styles.tableBox}>
      <DataGrid
        rows={data}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={tableColumns}
        slots={{ toolbar: GridToolbar }}
        rowHeight={70}
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
        sx={styles.tableStyles}
      />
    </Box>
  );
};
export default Transactions;
