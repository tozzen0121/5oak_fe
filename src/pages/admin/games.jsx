import PropTypes from 'prop-types';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import axios, { fetcher } from 'utils/axios';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';

// third-party
import { PatternFormat } from 'react-number-format';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';

// project-import
import ScrollX from 'components/ScrollX';
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import EmptyReactTable from 'pages/tables/react-table/empty';
import { ImagePath, getImageUrl } from 'utils/getImageUrl';

import {
  CSVExport,
  DebouncedInput,
  HeaderSort,
  IndeterminateCheckbox,
  RowSelection,
  SelectColumnSorting,
  TablePagination
} from 'components/third-party/react-table';

import CustomerModal from 'sections/apps/customer/CustomerModal';
import AlertCustomerDelete from 'sections/apps/customer/AlertCustomerDelete';
import ExpandingUserDetail from 'sections/apps/customer/ExpandingUserDetail';

import { useGetCustomer } from 'api/customer';

// assets
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

export const fuzzyFilter = (row, columnId, value, addMeta) => {
  // rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the ranking info
  addMeta(itemRank);

  // return if the item should be filtered in/out
  return itemRank.passed;
};

// ==============================|| REACT TABLE - LIST ||============================== //

function ReactTable({ data, columns, modalToggler }) {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [sorting, setSorting] = useState([
    {
      id: 'id',
      desc: true
    }
  ]);
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
      globalFilter
    },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getRowCanExpand: () => true,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    globalFilterFn: fuzzyFilter,
    debugTable: true
  });

  const backColor = alpha(theme.palette.primary.lighter, 0.1);
  let headers = [];
  columns.map(
    (columns) =>
      // @ts-ignore
      columns.accessorKey &&
      headers.push({
        label: typeof columns.header === 'string' ? columns.header : '#',
        // @ts-ignore
        key: columns.accessorKey
      })
  );

  return (
    <MainCard content={false}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: 2, ...(matchDownSM && { '& .MuiOutlinedInput-root, & .MuiFormControl-root': { width: '100%' } }) }}
      >
        <DebouncedInput
          value={globalFilter ?? ''}
          onFilterChange={(value) => setGlobalFilter(String(value))}
          placeholder={`Search ${data.length} records...`}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" sx={{ width: { xs: '100%', sm: 'auto' } }}>
          <SelectColumnSorting {...{ getState: table.getState, getAllColumns: table.getAllColumns, setSorting }} />
          <Stack direction="row" spacing={2} alignItems="center">
            <Link to={'/admin/games-create'}>
              <Button variant="contained" startIcon={<PlusOutlined />} onClick={modalToggler}>
                Add Game
              </Button>
            </Link>
            {/* <CSVExport
              {...{
                data:
                  table.getSelectedRowModel().flatRows.map((row) => row.original).length === 0
                    ? data
                    : table.getSelectedRowModel().flatRows.map((row) => row.original),
                headers,
                filename: 'customer-list.csv'
              }}
            /> */}
          </Stack>
        </Stack>
      </Stack>
      <ScrollX>
        <Stack>
          <RowSelection selected={Object.keys(rowSelection).length} />
          <TableContainer>
            <Table>
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      if (header.column.columnDef.meta !== undefined && header.column.getCanSort()) {
                        Object.assign(header.column.columnDef.meta, {
                          className: header.column.columnDef.meta.className + ' cursor-pointer prevent-select'
                        });
                      }

                      return (
                        <TableCell
                          key={header.id}
                          {...header.column.columnDef.meta}
                          onClick={header.column.getToggleSortingHandler()}
                          {...(header.column.getCanSort() &&
                            header.column.columnDef.meta === undefined && {
                              className: 'cursor-pointer prevent-select'
                            })}
                        >
                          {header.isPlaceholder ? null : (
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Box>{flexRender(header.column.columnDef.header, header.getContext())}</Box>
                              {header.column.getCanSort() && <HeaderSort column={header.column} />}
                            </Stack>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <Fragment key={row.id}>
                    <TableRow>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                    {row.getIsExpanded() && (
                      <TableRow sx={{ bgcolor: backColor, '&:hover': { bgcolor: `${backColor} !important` } }}>
                        <TableCell colSpan={row.getVisibleCells().length}>
                          <ExpandingUserDetail data={row.original} />
                        </TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <>
            <Divider />
            <Box sx={{ p: 2 }}>
              <TablePagination
                {...{
                  setPageSize: table.setPageSize,
                  setPageIndex: table.setPageIndex,
                  getState: table.getState,
                  getPageCount: table.getPageCount
                }}
              />
            </Box>
          </>
        </Stack>
      </ScrollX>
    </MainCard>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  getHeaderProps: PropTypes.func,
  handleAdd: PropTypes.func,
  modalToggler: PropTypes.func,
  renderRowSubComponent: PropTypes.any
};

// ==============================|| CUSTOMER LIST ||============================== //

const GameList = () => {
  const theme = useTheme();

  const [ lists, setLists ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [open, setOpen] = useState(false);

  const [gameDeleteId, setGameDeleteId] = useState('');

  const handleClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetcher('/api/game');
        setLists(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchGames();
  }, [])

  const columns = useMemo(
    () => [
      {
        header: 'Title',
        accessorKey: 'name',
        cell: ({ row, getValue }) => (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar
              alt="Avatar 1"
              size="sm"
              src={getImageUrl(`${row.original.imagePath}`, ImagePath.USERS)}
            />
            <Stack spacing={0}>
              <Typography variant="subtitle1">{getValue()}</Typography>
              <Typography color="text.secondary">{row.original.email}</Typography>
            </Stack>
          </Stack>
        )
      },
      {
        header: 'Date Applied',
        accessorKey: 'created_at', 
        cell: ({ row, getValue }) => (
          <Typography color="text.secondary">{format(new Date(row.original.created_at), 'dd/MM/yyyy')}</Typography>
        )
      },
      {
        header: 'Actions',
        meta: {
          className: 'cell-center'
        },
        disableSortBy: true,
        cell: ({ row }) => {
          return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
              <Link to={`/admin/games-edit/${row.original._id}`}>
                <Tooltip title="Edit">
                  <IconButton
                    color="primary"
                  >
                    <EditOutlined />
                  </IconButton>
                </Tooltip>
              </Link>
              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                    setOpen(true);
                    setGameDeleteId(row.original._id);
                  }}
                >
                  <DeleteOutlined />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        }
      }
    ],
    // eslint-disable-next-line
    [theme]
  );

  if (isLoading) return <EmptyReactTable />;

  return (
    <>
      <ReactTable
        {...{
          data: lists,
          columns,
          modalToggler: () => {

          }
        }}
      />
      <AlertCustomerDelete id={gameDeleteId} title={gameDeleteId} open={open} handleClose={handleClose} deletehandler={ async () => {
        try {
          await axios.delete(`/api/game/${gameDeleteId}`);
          setLists(lists.filter(item => item._id !== gameDeleteId));
          setOpen(false);
          setGameDeleteId('');
        } catch (error) {
          
        }
      }} />
    </>
  );
};

export default GameList;
