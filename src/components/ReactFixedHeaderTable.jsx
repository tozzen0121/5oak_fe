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
  Paper,
  useTheme,
  useMediaQuery
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Debug logging to check if breakpoints are working
  React.useEffect(() => {
    console.log('Mobile breakpoints:', { isMobile, isSmallMobile });
  }, [isMobile, isSmallMobile]);

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
      <Table 
        {...props} 
        sx={{ 
          borderCollapse: 'separate', 
          borderSpacing: 0,
          tableLayout: 'auto',
          minWidth: '100%',
          width: '100%'
        }} 
      />
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
                padding: isMobile ? (isSmallMobile ? '16px 8px' : '20px 12px') : '24px 16px',
                fontWeight: 'bold',
                fontSize: isMobile ? (isSmallMobile ? '0.7rem' : '0.75rem') : '0.875rem',
                minWidth: isMobile ? '100px' : '120px',
                maxWidth: '200px',
                textAlign: isMobile ? 'center' : 'left',
                whiteSpace: 'normal',
                height: isMobile ? '80px' : '88px',
                verticalAlign: 'middle',
                lineHeight: '1.2',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                boxSizing: 'border-box'
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
              padding: isMobile ? (isSmallMobile ? '8px 6px' : '10px 8px') : '12px 16px',
              fontSize: isMobile ? (isSmallMobile ? '0.7rem' : '0.75rem') : '0.875rem',
              minWidth: isMobile ? '100px' : '120px',
              maxWidth: '200px',
              textAlign: isMobile ? 'center' : 'left',
              whiteSpace: isMobile ? 'nowrap' : 'normal',
              backgroundColor: 'white',
              boxSizing: 'border-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
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
        <Paper style={{ 
          height: isMobile ? (height === '80vh' ? '50vh' : height) : height, 
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden'
        }}
        sx={{
          borderRadius: isMobile ? '8px' : '12px',
          boxShadow: isMobile ? 1 : 2
        }}
        >
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