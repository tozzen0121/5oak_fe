import * as React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { TableVirtuoso } from 'react-virtuoso';
import MainCard from './MainCard';
import ScrollX from './ScrollX';

export function ReactFixedHeaderTable({ 
  columns, 
  data, 
  setData,
  height = '80vh',
  enableEditing = false,
  onSave,
  meta = {}
}) {
  const [originalData, setOriginalData] = React.useState(() => [...data]);
  const [selectedRow, setSelectedRow] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      selectedRow,
      setSelectedRow,
      revertData: (rowIndex, revert) => {
        if (revert) {
          setData((old) => old.map((row, index) => (index === rowIndex ? originalData[rowIndex] : row)));
        } else {
          setOriginalData((old) => old.map((row, index) => (index === rowIndex ? data[rowIndex] : row)));
        }
      },
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value
              };
            }
            return row;
          })
        );
      },
      saveData: async (rowIndex) => {
        if (onSave) {
          try {
            await onSave(data[rowIndex]);
            setSelectedRow((prev) => ({ ...prev, [rowIndex]: false }));
          } catch (error) {
            console.error('Error saving data:', error);
          }
        }
      },
      ...meta
    },
    debugTable: true
  });

  const VirtuosoTableComponents = {
    Scroller: forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow,
    TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  };

  const fixedHeaderContent = () => {
    return (
      <TableRow>
        {table.getHeaderGroups().map((headerGroup) => (
          headerGroup.headers.map((header) => (
            <TableCell
              key={header.id}
              variant="head"
              {...header.column.columnDef.meta}
              sx={{ 
                backgroundColor: '#f0f0f0',
                width: header.column.columnDef.meta?.width || 'auto',
                padding: '8px 16px',
                fontWeight: 'bold'
              }}
            >
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </TableCell>
          ))
        ))}
      </TableRow>
    );
  };

  const rowContent = (_index, row) => {
    return (
      <React.Fragment>
        {row.getVisibleCells().map((cell) => (
          <TableCell 
            key={cell.id} 
            {...cell.column.columnDef.meta}
            sx={{ 
              width: cell.column.columnDef.meta?.width || 'auto',
              padding: '8px 16px'
            }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </React.Fragment>
    );
  };

  return (
    <MainCard content={false}>
      <ScrollX>
        <Paper style={{ height, width: '100%' }}>
          <TableVirtuoso
            data={table.getRowModel().rows}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
      </ScrollX>
    </MainCard>
  );
}

ReactFixedHeaderTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  height: PropTypes.string,
  enableEditing: PropTypes.bool,
  onSave: PropTypes.func,
  meta: PropTypes.object
};

export default ReactFixedHeaderTable; 