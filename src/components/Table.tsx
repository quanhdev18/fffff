import * as React from "react";
import axios from "axios";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableSelectionCell,
  useTableFeatures,
  TableColumnDefinition,
  useTableSelection,
  useTableSort,
  createTableColumn,
  makeStyles,
  Avatar,
  PresenceBadgeStatus,
  TableCellLayout,
  Spinner,
} from "@fluentui/react-components";

import UpdateForm from './UpdateForm'; // Import form cập nhật của bạn

import { Calendar28Filled } from "@fluentui/react-icons";
import { formatDate } from "./formatDate";
import { getAllDataWithPagination, getItemById } from "@/service/WorkGroupservice";
import { IItem, ResponseData } from "@/interfaces/WorkGroupinterfaces"; // Đảm bảo import các interface đúng cách

const useStyles = makeStyles({

  // tableContainer: {
  //  width: 'fit-content',
  //  height: '100%',

  // },
  tableContainer: {
    width: '100%',
    height: '100%',
    overflowX: 'auto', // Cho phép cuộn ngang
    overflowY: 'auto', // Cho phép cuộn dọc
    maxHeight: '800px', // Đặt chiều cao tối đa cho bảng (có thể tùy chỉnh)
  },
  table: {
    width: '100%', // Đảm bảo bảng chiếm hết chiều rộng của vùng chứa
    minWidth: '1200px', // Đặt chiều rộng tối thiểu để kích hoạt cuộn ngang nếu cần
  },
  headerTable: {
    height: '100%',
    width: '100%',
  },
  tableHeaderCell: {
    height: "33px",
    paddingTop: "20px",
    paddingBottom: "0px",
  },
  checkColumn: {
    width: "46px",
    height: "33px",
    paddingTop: "20px",
  },
  numberColumn: {
    width: "76px",
    height: "33px",
    paddingTop: "20px",
  },
  titleColumn: {
    width: "420px",
    height: "33px",
    paddingTop: "20px",
  },
  workGroupColumn: {
    width: "190px",
    height: "33px",
    paddingTop: "20px",
  },
  createdAtColumn: {
    width: "180px",
    height: "33px",
    paddingTop: "20px",
  },
  editedByColumn: {
    width: "264px",
    height: "33px",
    paddingTop: "20px",
  },
  lastUpdatedColumn: {
    width: "180px",
    height: "33px",
    paddingTop: "20px",
  },
  bodyTable: {
    overflowX: 'scroll',
    overflowY: 'scroll',
  },
  spinnerContainer: {
    maxHeight: '1200px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyItems: 'center',
    alignContent: 'center',
    paddingTop: '400px',
    paddingBottom: '500px',
  },
});

const DataGrid = () => {
  const classes = useStyles();
  const [items, setItems] = React.useState<Item[]>([]); // Sử dụng kiểu dữ liệu Item
  const [loading, setLoading] = React.useState(true);
  const [selectedItem, setSelectedItem] = React.useState<IItem | null>(null); // Sử dụng kiểu dữ liệu IItem
  const [isUpdateFormVisible, setIsUpdateFormVisible] = React.useState(false);

  // Lấy dữ liệu từ getAllDataWithPagination
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ResponseData = await getAllDataWithPagination(); // Sử dụng kiểu dữ liệu ResponseData
        console.log("Response from API:", response); // Kiểm tra dữ liệu trả về
        if (response && response.Data && response.Data.Items) {
          setItems(response.Data.Items);
        } else {
          console.error("No data or wrong structure:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = async (itemId: number) => {
    try {
      const itemDetail = await getItemById({ id: itemId }); // Fetch item details using the ID
      if (itemDetail) {
        setSelectedItem(itemDetail); // Update the state with the item detail
        setIsUpdateFormVisible(true); // Show the update form
      }
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };



  const columns: TableColumnDefinition<Item>[] = [ // Sử dụng kiểu dữ liệu Item
    createTableColumn<Item>({
      columnId: "id",
      compare: (a, b) => a.ID - b.ID, // Cập nhật theo thuộc tính ID
    }),
    createTableColumn<Item>({
      columnId: "title",
      compare: (a, b) => a.Title.localeCompare(b.Title), // Cập nhật theo thuộc tính Title
    }),
    createTableColumn<Item>({
      columnId: "workGroupValue",
      compare: (a, b) => a.WorkGroupValue.localeCompare(b.WorkGroupValue), // Cập nhật theo thuộc tính WorkGroupValue
    }),
    createTableColumn<Item>({
      columnId: "createdAt",
      compare: (a, b) => new Date(a.Created).getTime() - new Date(b.Created).getTime(), // Cập nhật theo thuộc tính Created
    }),
    createTableColumn<Item>({
      columnId: "editedBy",
      compare: (a, b) => a.Editor.LookupValue.localeCompare(b.Editor.LookupValue), // Cập nhật theo thuộc tính Editor.LookupValue
      renderCell: (item) => (
        <TableCellLayout
          media={
            <Avatar
              name={item.Editor.LookupValue} // Sử dụng Editor.LookupValue cho tên
              badge={{ status: item.Editor.TypeId === "someCondition" ? "available" : "offline" }} // Thay đổi trạng thái theo yêu cầu

            />
          }
        >
          {item.Editor.LookupValue} // Sử dụng Editor.LookupValue
        </TableCellLayout>
      ),
    }),
    createTableColumn<Item>({
      columnId: "lastUpdated",
      compare: (a, b) => new Date(a.Modified).getTime() - new Date(b.Modified).getTime(), // Cập nhật theo thuộc tính Modified
    }),
  ];

  const {
    getRows,
    selection: {
      allRowsSelected,
      someRowsSelected,
      toggleAllRows,
      toggleRow,
      isRowSelected,
    },
    sort: { getSortDirection, toggleColumnSort, sort },
  } = useTableFeatures(
    {
      columns,
      items,
    },
    [
      useTableSelection({
        selectionMode: "multiselect",
        defaultSelectedItems: new Set(),
      }),
      useTableSort({
        defaultSortState: { sortColumn: "id", sortDirection: "ascending" },
      }),
    ]
  );

  const rows = sort(
    getRows((row) => {
      const selected = isRowSelected(row.rowId);
      return {
        ...row,
        onClick: (e: React.MouseEvent) => toggleRow(e, row.rowId),
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === " ") {
            e.preventDefault();
            toggleRow(e, row.rowId);
          }
        },
        selected,
        appearance: selected ? ("brand" as const) : ("none" as const),
      };
    })
  );

  const headerSortProps = (columnId: string) => ({
    onClick: (e: React.MouseEvent) => {
      toggleColumnSort(e, columnId);
    },
    sortDirection: getSortDirection(columnId),
  });



  return (
    <div className={classes.tableContainer}>
      {loading ? (
        <div className={classes.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <Table
          aria-label="Table with scroll"
          className={classes.table}
        >
          <TableHeader className={classes.headerTable}>
            <TableRow>

              <TableSelectionCell
                checked={allRowsSelected ? true : someRowsSelected ? "mixed" : false}
                aria-checked={allRowsSelected ? true : someRowsSelected ? "mixed" : false}
                role="checkbox"
                onClick={toggleAllRows}
                checkboxIndicator={{ "aria-label": "Select all rows" }}
                className={classes.checkColumn}
              />
              <TableHeaderCell {...headerSortProps("id")} className={classes.numberColumn}>
                ID
              </TableHeaderCell>
              <TableHeaderCell {...headerSortProps("title")} className={classes.titleColumn}>
                Tiêu đề
              </TableHeaderCell>
              <TableHeaderCell {...headerSortProps("workGroupValue")} className={classes.workGroupColumn}>
                WorkGroupValue
              </TableHeaderCell>
              <TableHeaderCell {...headerSortProps("createdAt")} className={classes.createdAtColumn}>
                Ngày tạo
              </TableHeaderCell>
              <TableHeaderCell {...headerSortProps("editedBy")} className={classes.editedByColumn}>
                Người chỉnh sửa
              </TableHeaderCell>
              <TableHeaderCell {...headerSortProps("lastUpdated")} className={classes.lastUpdatedColumn}>
                Ngày cập nhật gần nhất
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody className={classes.bodyTable}>
            {rows.map((row) => (
              <TableRow
                {...row}
                key={row.rowId}
                onClick={() => handleRowClick(row.item.ID)} // Call handleRowClick with the item ID
              >
                <TableSelectionCell checked={row.selected} />
                <TableCell>{row.item.ID}</TableCell>
                <TableCell>{row.item.Title}</TableCell>
                <TableCell>{row.item.WorkGroupValue}</TableCell>
                <TableCell>
                  <Calendar28Filled style={{ width: "16px", height: "16px", color: "#6264A7", marginRight: "5px" }} />
                  {formatDate(row.item.Created)}
                </TableCell>
                <TableCell>
                  <TableCellLayout
                    media={
                      <Avatar
                        name={row.item.Editor.LookupValue}
                        badge={{ status: row.item.Editor.status as PresenceBadgeStatus }}
                      />
                    }
                  >
                    {row.item.Editor.LookupValue}
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <span style={{ marginRight: "5px" }}>
                    <Calendar28Filled style={{ width: "16px", height: "16px", color: "#6264A7" }} />
                  </span>
                  {formatDate(row.item.Modified)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>

      )}
      {isUpdateFormVisible && selectedItem && (
        <UpdateForm item={selectedItem} onClose={() => setIsUpdateFormVisible(false)} />
      )}
    </div>
  );
};

export default DataGrid;
