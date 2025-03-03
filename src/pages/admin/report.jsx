// material-ui
import { Grid, Stack, Typography, Box, TextField, Slider, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';

// project import
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

import MainCard from 'components/MainCard';
import LoadingButton from 'components/@extended/LoadingButton';
import axios, { fetcher } from 'utils/axios';
import { openSnackbar } from 'api/snackbar';

import ReactApexChart from 'react-apexcharts';

import useAuth from 'hooks/useAuth';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { CSVExport, RowEditable } from 'components/third-party/react-table';
import ScrollX from 'components/ScrollX';
import IconButton from 'components/@extended/IconButton';
import { useLocation, Link } from "react-router-dom";

// assets
import { CloseOutlined, EditTwoTone, SendOutlined, PlusOutlined } from '@ant-design/icons';
import { filter, set } from 'lodash';

const EditAction = ({ row, table }) => {
  const meta = table?.options?.meta;
  const setSelectedRow = (e) => {
    meta?.setSelectedRow((old) => ({
      ...old,
      [row.id]: !old[row.id]
    }));

    // @ts-ignore
    meta?.revertData(row.index, e?.currentTarget.name === 'cancel');
  };

  const handleSave = () => {
    meta?.saveData(row.index); // Call save function
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {meta?.selectedRow[row.id] && (
        <Tooltip title="Cancel">
          <IconButton color="error" name="cancel" onClick={setSelectedRow}>
            <CloseOutlined />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title={meta?.selectedRow[row.id] ? 'Save' : 'Edit'}>
        <IconButton color={meta?.selectedRow[row.id] ? 'success' : 'primary'} onClick={meta?.selectedRow[row.id] ? handleSave: setSelectedRow}>
          {meta?.selectedRow[row.id] ? <SendOutlined /> : <EditTwoTone />}
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

EditAction.propTypes = {
  row: PropTypes.object,
  table: PropTypes.object,
  options: PropTypes.array,
  id: PropTypes.number,
  index: PropTypes.number
};


// ==============================|| TAB PANEL ||============================== //

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Input = styled('input')({
  display: 'none'
});
Input.displayName = 'Input';


const trimArrayEdges = (arr) => {
  let start = 0, end = arr.length - 1;

  while (start < arr.length && Number(arr[start]) === 0) {
    start++;
  }
  while (end >= 0 && Number(arr[end]) === 0) {
    end--;
  }

  return arr.slice(start, end + 1);
};


const getNext14Items = (gamesData, games, uniqueDates) => {
  // const next14Items = gamesData.map((game) => ({ ...game, data: (startIndex < 0 ? []: game.data.slice(startIndex, startIndex + 14)) }));
  const next14Items = gamesData.map((game) => {
    const filterData = trimArrayEdges(game.data);
    return ({ ...game, data: filterData.slice(0, 14) });
  });

  return next14Items;
};

export const separateByComma = ({ getValue }) => {
  const data = getValue();
  return `${Number((data || 0).toFixed(2)).toLocaleString()}`;
};

// ==============================|| REACT TABLE ||============================== //

export function ReactTable({ columns, data, setData }) {
  const [originalData, setOriginalData] = useState(() => [...data]);
  const [selectedRow, setSelectedRow] = useState({});

  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      cell: RowEditable
    },
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
        try {
          const updatedRow = data[rowIndex];

          const result = await axios.put(`/api/launchGames/${updatedRow._id}`, updatedRow);

          openSnackbar({
            open: true,
            message: 'Saved successfully!',
            variant: 'alert',
            alert: {
              color: 'success'
            }
          });

          setSelectedRow((prev) => ({ ...prev, [rowIndex]: false })); // Exit edit mode
        } catch (error) {
          openSnackbar({
            open: true,
            message: 'Error!',
            variant: 'alert',
            alert: {
              color: 'error'
            }
          });
        }

        
      },
    },
    debugTable: true
  });

  let headers = [];
  table.getAllColumns().map(
    (columns) =>
      // @ts-ignore
      columns.columnDef.accessorKey &&
      headers.push({
        label: typeof columns.columnDef.header === 'string' ? columns.columnDef.header : '#',
        // @ts-ignore
        key: columns.columnDef.accessorKey
      })
  );

  return (
    <MainCard
      content={false}
    >
      <ScrollX>
        <TableContainer>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id} {...header.column.columnDef.meta}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ScrollX>
    </MainCard>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  setData: PropTypes.func
};


function GameCards ({ data, games }) {
  const location = useLocation();

  const [ onlyPassword, setOnlyPassword ] = useState(location.pathname === "/admin/report")
  const [ gamesData, setGamesData ] = useState([]);
  const [ years, setYears ] = useState([]);

  useEffect(() => {

    const uniqueYears = [...new Set(data.map((item) => item.summary.split('-')[0]))];
    setYears(uniqueYears);

    const gameData = Object.values(
      data.reduce((acc, { game, summary, betsEuro, winsEuro, ggrEuro, avgBet, spins, uniquePlayers }) => {
        if( !acc[game] ) {
          acc[game] = { 
            _id: "", 
            name: game, 
            maxDate: summary, 
            years: {}, 
            totalGGR: 0, 
            latestWeekStart: '', 
            secLatestWeekStart: '',
            latestWeekGGR: [], 
            secLatestWeekGGR: [], 
            remainDays: 0, 
            weekAverage: 0, 
            weekChange: 0, 
            weekChangeColor: '',
            dailyTotalGGR: 0, 
            projectedTotalGGR: 0
          }
        }

        const gameData = games.find((g) => g.name === game)
        acc[game].launchDate = gameData.launchDate
        acc[game]._id = gameData._id

        if( new Date(gameData.launchDate) <= new Date(summary) ) {
          const isMaxDate = new Date(acc[game].maxDate) < new Date(summary)
          acc[game].maxDate = isMaxDate ? summary: acc[game].maxDate
          acc[game].dailyTotalGGR = isMaxDate ? ggrEuro : acc[game].dailyTotalGGR
          acc[game].totalGGR += ggrEuro
          
          const year = summary.split("-")[0]
          if( !acc[game].years[year] ) acc[game].years[year] = 0
          acc[game].years[year] += ggrEuro
          if( !acc[game][`totalGGR_${year}`] ) acc[game][`totalGGR_${year}`] = 0;
          acc[game][`totalGGR_${year}`] += ggrEuro

          const today = new Date(acc[game].maxDate);
          const endOfYear = new Date(today.getFullYear(), 11, 31);
          acc[game].remainDays = Math.ceil((endOfYear - today) / (1000 * 60 * 60 * 24));


          // Calculate latest week and second latest week GGR
          const maxDateObj = new Date(acc[game].maxDate);
          const latestWeekStart = new Date(maxDateObj);
          latestWeekStart.setDate(latestWeekStart.getDate() - 6); // 7-day range

          const secLatestWeekStart = new Date(latestWeekStart);
          secLatestWeekStart.setDate(secLatestWeekStart.getDate() - 7); // Another 7-day range

          const secLatestWeekEnd = new Date(latestWeekStart);
          secLatestWeekEnd.setDate(secLatestWeekEnd.getDate() - 1); // Day before latest week starts

          acc[game].latestWeekStart = latestWeekStart.toISOString().split('T')[0];
          acc[game].secLatestWeekStart = secLatestWeekStart.toISOString().split('T')[0];

          acc[game].latestWeekGGR = data
            .filter(d => d.game === game && new Date(d.summary) >= latestWeekStart && new Date(d.summary) <= maxDateObj)
            .map((d) => d.ggrEuro);

          acc[game].secLatestWeekGGR = data
            .filter(d => d.game === game && new Date(d.summary) >= secLatestWeekStart && new Date(d.summary) <= secLatestWeekEnd)
            .map((d) => d.ggrEuro);

          acc[game].weekAverage = acc[game].latestWeekGGR.reduce((a, b) => a + b, 0) / acc[game].latestWeekGGR.length;
          acc[game].weekChange = (acc[game].latestWeekGGR.reduce((a, b) => a + b, 0) - acc[game].secLatestWeekGGR.reduce((a, b) => a + b, 0)) / acc[game].secLatestWeekGGR.reduce((a, b) => a + b, 0) * 100;
          acc[game].weekChangeColor = <span style={{ color: acc[game].weekChange > 0 ? "green": "red" }}>{`${Number(acc[game].weekChange.toFixed(2)).toLocaleString()} %`}</span>
          acc[game].projectedTotalGGR = acc[game].totalGGR + acc[game].weekAverage * acc[game].remainDays
        }

        return acc;
      }, {})
    )

    setGamesData(gameData)

  }, [ data, games ])

  const gamesColumns = useMemo(
    () => [
      {
        header: 'Game',
        accessorKey: 'name',
        dataType: 'text', 
        cell: ({ getValue, row }) => {
          const data = getValue();
          return <Link style={{ textDecoration: "none" }} to={onlyPassword ? `/admin/report-one/${row.original._id}`: `/report-one/${row.original._id}`}>{data}</Link>
        }
      },
      {
        header: 'Launch Date',
        accessorKey: 'launchDate',
        dataType: 'text', 
        cell: ({ getValue, row, table }) => {
          const data = getValue();
          return `${data?.split("T")?.[0]}`;
        }
      },
      {
        header: 'Daily Total GGR',
        accessorKey: 'dailyTotalGGR',
        dataType: 'text', 
        cell: separateByComma
      },
      {
        header: 'Projected Total GGR',
        accessorKey: 'projectedTotalGGR',
        dataType: 'text', 
        cell: separateByComma
      },
      ...(years?.map((y) => ({
        header: `Total GGR ${y}`,
        accessorKey: `totalGGR_${y}`, // 👈 Unique accessorKey for each year
        dataType: 'text',
        cell: separateByComma
      }))) || [], 
      {
        header: 'Lifetime GGR',
        accessorKey: 'totalGGR',
        dataType: 'text', 
        cell: separateByComma
      },
      {
        header: '7 Day Average',
        accessorKey: 'weekAverage',
        dataType: 'text', 
        cell: separateByComma
      },
      {
        header: '7 Day Change',
        accessorKey: 'weekChangeColor',
        dataType: 'text', 
      },
      {
        header: 'Latest Report Date',
        accessorKey: 'maxDate',
        dataType: 'text', 
        cell: ({ getValue, row, table }) => {
          const data = getValue();
          return `${data?.split("T")?.[0]}`;
        }
      },
    ],
    [years]
  );

  return (
    <Grid item xs={12} lg={12}>
      <Grid container spacing={2} mb={5}>
        <Grid item xs={6} lg={3}>
          <MainCard sx={{ height: "100%", display: "flex", alignItems: "center" }} >
            <Stack direction="row" spacing={1} alignItems="end" justifyContent="center">
              <Typography variant="h5" textAlign={'center'}>Lifetime GGR - </Typography>
              <Typography variant="h6" textAlign={'center'}>
                {
                  Number(gamesData.reduce((acc, game) => acc + game.totalGGR, 0)).toLocaleString()
                }
              </Typography>
            </Stack>
          </MainCard>
        </Grid>

        <Grid item xs={6} lg={3}>
          <MainCard sx={{ height: "100%", display: "flex", alignItems: "center" }} >
            <Stack direction="row" spacing={1} alignItems="end" justifyContent="center">
              <Typography variant="h5" textAlign={'center'}>Daily Total GGR -</Typography>
              <Typography variant="h6" textAlign={'center'}>
                {
                  Number(gamesData.reduce((acc, game) => acc + game.dailyTotalGGR, 0)).toLocaleString()
                }
              </Typography>
            </Stack>
          </MainCard>
        </Grid>

        <Grid item xs={6} lg={3}>
          <MainCard sx={{ height: "100%", display: "flex", alignItems: "center" }} >
            <Stack direction="row" spacing={1} alignItems="end" justifyContent="center">
              <Typography variant="h5" textAlign={'center'}>{`Projected GGR ${ years.reduce((max, num) => Math.max(max, (num)), -Infinity) } -`}</Typography>
              <Typography variant="h6" textAlign={'center'}>
                {
                  Number(gamesData.reduce((acc, game) => acc + game.projectedTotalGGR, 0)).toLocaleString()
                }
              </Typography>
            </Stack>
          </MainCard>
        </Grid>

        <Grid item xs={6} lg={3}>
          <MainCard sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            {
              years?.map((y, index) => 
                <Stack direction="row" spacing={1} alignItems="end" justifyContent="start" key={index} >
                  <Typography variant="h5" textAlign={'center'}>{`Total GGR ${y} - `}</Typography>
                  <Typography variant="h6" textAlign={'center'}>
                    {
                      Number(gamesData.reduce((acc, game) => acc + (game[`totalGGR_${y}`] || 0), 0)).toLocaleString()
                    }
                  </Typography>
                </Stack>
              )
            }
          </MainCard>
        </Grid>

      </Grid>
      <Stack mb={5} spacing={3}>
        <Typography variant="h2" textAlign={'center'}>Games Data</Typography>
        <ReactTable {...{ data: gamesData, columns: gamesColumns }} />
      </Stack>
    </Grid>
  );
}



const lineChartOptions = {
  chart: {
    height: 100,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight', 
    width: 3
  },
  xaxis: {
    categories: []
  }
};



// ==============================|| COMPONENTS - TABS ||============================== //

const ReportPage = () => {
  const location = useLocation();

  const [ onlyPassword, setOnlyPassword ] = useState(location.pathname === "/admin/report")
  
  const { user } = useAuth();

  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [ data, setData ] = useState([]);
  const [ reorderData, setReorderData ] = useState([]);
  const [ games, setGames ] = useState([]);
  const [ open, setOpen ] = useState(true)
  const [ password, setPassword ] = useState("")
  const [ email, setEmail ] = useState("")

  const [ wrongPassword, setWrongPassword ] = useState(false)
  const [ dates, setDates ] = useState([])
  const [ uniqueDays, setUniqueDays ] = useState([]);

  const [ weekAveragesData, setWeekAveragesData ] = useState([]);
  const [ weekChangeData, setWeekChangeData ] = useState([]);

  const [totalGGR, setTotalGGR] = useState([]);
  const [totalGGROptions, setTotalGGROptions] = useState(lineChartOptions);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
  const [dayLaunch14, setDayLaunch14] = useState([]);
  const [dayLaunch14Options, setDayLaunch14Options] = useState(lineChartOptions);
  const [users, setUsers] = useState([]);
  const [userChanges, setUserChanges] = useState([]);
  const [spins, setSpins] = useState([]);
  const [spinsPerUser, setSpinsPerUser] = useState([]);

  const [range, setRange] = useState([1, 37]);
  const [maxRange, setMaxRange] = useState(0);
  const handleRangeChange = (event, newRange) => {
    console.log('newRange', newRange)
    setRange(newRange);
  };

  const launchColumns = useMemo(
    () => [
      {
        header: 'Game',
        accessorKey: 'name',
        dataType: 'text'
      },
      {
        header: 'Launch Date',
        accessorKey: 'launchDate',
        dataType: 'date', 
        cell: ({ getValue, row, table }) => {
          const meta = table?.options?.meta;
          const isEditing = meta?.selectedRow?.[row.id]; // Check if row is in edit mode
  
          // Ensure date is properly formatted for input type="date"
          const rawValue = getValue();
          const formattedValue = rawValue ? new Date(rawValue).toISOString().split("T")[0] : "";
  
          return isEditing ? (
            <input
              type="date"
              value={formattedValue}
              onChange={(e) =>
                meta?.updateData(row.index, "launchDate", e.target.value)
              }
            />
          ) : (
            formattedValue
          );
        },
      },
      {
        header: 'Actions',
        id: 'edit',
        cell: EditAction,
        meta: {
          className: 'cell-center'
        }
      }
    ],
    []
  );


  const totalRevenueColumns = useMemo(
    () => [
      {
        header: 'Game',
        accessorKey: 'name',
        dataType: 'text'
      },
      {
        header: 'TOTAL GGR',
        accessorKey: 'data',
        dataType: 'text', 
        cell: ({ getValue, row, table }) => {
          const data = getValue();
          return `${(Number(data[data.length - 1]) || 0).toLocaleString()}`;
        }
      }
    ],
    []
  );

  const weekAverages = useMemo(
    () => [
      {
        header: 'Game',
        accessorKey: 'name',
        dataType: 'text'
      },
      {
        header: 'GGR',
        accessorKey: 'ggrEuro',
        dataType: 'text'
      },
      {
        header: 'SPINS',
        accessorKey: 'spins',
        dataType: 'text'
      },
      {
        header: 'USERS',
        accessorKey: 'uniquePlayers',
        dataType: 'text'
      },
      {
        header: 'SPU',
        accessorKey: 'SPU',
        dataType: 'text'
      },
      {
        header: 'CWPP',
        accessorKey: 'CWPP',
        dataType: 'text'
      },
    ],
    []
  );

  useEffect(() => {

    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dates.push(date.toISOString().split("T")[0]); // Format: YYYY-MM-DD
    }

    const gamesObj = reorderData.reduce((acc, { game, summary }) => {
      if (!acc[game]) {
        const gameItem = games.find((g) => g.name === game);

        acc[game] = { ...gameItem, maxDate: summary };
      }

      const isMaxDate = new Date(acc[game].maxDate) < new Date(summary)
      acc[game].maxDate = isMaxDate ? summary: acc[game].maxDate

      return acc;
    }, {})


    const maxDates = {};

    const oneWeekData = Object.values(
      reorderData.reduce((acc, { game, summary, ggrEuro, spins, uniquePlayers, betsEuro }) => {
        if (!acc[game]) {
          acc[game] = { name: game, ggrEuro: [], spins: [], uniquePlayers: [], SPU: [], CWPP: [] }; // Added `totalGGR`
        }

        const gameItem = games.find((g) => g.name === game);
        const isStarted = new Date(gameItem?.launchDate) < new Date(summary)

        if( maxDates[game] && new Date(maxDates[game]) < new Date(summary.split("T")[0]) ) {
          maxDates[game] = summary.split("T")[0];
        } else if ( !maxDates[game] ) {
          maxDates[game] = summary.split("T")[0];
        }

        const maxDateObj = new Date(gamesObj[game].maxDate) || new Date();
        const latestWeekStart = new Date(maxDateObj);
        latestWeekStart.setDate(latestWeekStart.getDate() - 6);

        if( new Date(summary) >= latestWeekStart && new Date(summary) <= maxDateObj ) {
          acc[game].ggrEuro.push(ggrEuro);
          acc[game].spins.push(spins);
          acc[game].uniquePlayers.push(uniquePlayers);
          acc[game].SPU.push(spins / uniquePlayers);
          acc[game].CWPP.push(betsEuro / uniquePlayers);
        }

        return acc;
      }, {})
    );

    const avg = oneWeekData.map((data) => {
      const ggrEuros = data.ggrEuro;
      const spins = data.spins;
      const uniquePlayers = data.uniquePlayers;
      const SPU = data.SPU;
      const CWPP = data.CWPP;

      return {
        name: data.name, 
        ggrEuro: Number((ggrEuros.length > 0 ? ggrEuros.reduce((sum, num) => sum + num, 0) / ggrEuros.length : 0).toFixed(2)).toLocaleString(), 
        spins: Number((spins.length > 0 ? spins.reduce((sum, num) => sum + num, 0) / spins.length : 0).toFixed(2)).toLocaleString(), 
        uniquePlayers: Number((uniquePlayers.length > 0 ? uniquePlayers.reduce((sum, num) => sum + num, 0) / uniquePlayers.length : 0).toFixed(2)).toLocaleString(), 
        SPU: Number((SPU.length > 0 ? SPU.reduce((sum, num) => sum + num, 0) / SPU.length : 0).toFixed(2)).toLocaleString(), 
        CWPP: Number((CWPP.length > 0 ? CWPP.reduce((sum, num) => sum + num, 0) / CWPP.length : 0).toFixed(2)).toLocaleString(), 
      };
    });
    setWeekAveragesData(avg)

    const oneWeekTwoDayData = Object.values(
      reorderData.reduce((acc, { game, summary, ggrEuro, spins, uniquePlayers, betsEuro }) => {
        if (!acc[game]) {
          acc[game] = { 
            name: game, 
            ggrEuros: [], 
            ggrEuro: 0, 
            ggrEuro2: 0, 
            spins: 0, 
            spins2: 0, 
            uniquePlayers: 0,
            uniquePlayers2: 0,  
            SPU: 0,
            SPU2: 0, 
            CWPP: 0, 
            CWPP2: 0,
            arrSpins: [], 
            arrSpins2: [],
          };
        }

        const oneWeekAgo = new Date(maxDates[game]);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const twoWeekAgo = new Date(maxDates[game]);
        twoWeekAgo.setDate(twoWeekAgo.getDate() - 14);

        
        if( oneWeekAgo < new Date(summary) ) {
          acc[game].ggrEuros.push(ggrEuro);
          acc[game].arrSpins.push(spins);
          acc[game].ggrEuro += ggrEuro;
          acc[game].spins += spins;
          acc[game].uniquePlayers += uniquePlayers;
          acc[game].SPU += spins / uniquePlayers;
          acc[game].CWPP += betsEuro / uniquePlayers;
        } else if ( twoWeekAgo < new Date(summary) && new Date(summary) <= oneWeekAgo ) {
          acc[game].arrSpins2.push(spins);
          acc[game].ggrEuro2 += ggrEuro;
          acc[game].spins2 += spins;
          acc[game].uniquePlayers2 += uniquePlayers;
          acc[game].SPU2 += spins / uniquePlayers;
          acc[game].CWPP2 += betsEuro / uniquePlayers;
        }

        return acc;
      }, {})
    );

    const change = oneWeekTwoDayData.map((data) => {
      const ggrEuros = (data.ggrEuro - data.ggrEuro2) / (data.ggrEuro2 || 1);
      const spins = (data.spins - data.spins2) / (data.spins2 || 1);
      const uniquePlayers = (data.uniquePlayers - data.uniquePlayers2) / (data.uniquePlayers2 || 1);
      const SPU = (data.SPU - data.SPU2) / (data.SPU2 || 1);
      const CWPP = (data.CWPP - data.CWPP2) / (data.CWPP2 || 1);

      return {
        name: data.name, 
        ggrEuro: <span style={{ color: ggrEuros >= 0 ? "green": 'red' }}>{`${(ggrEuros * 100).toFixed(2)} %`}</span>,
        spins: <span style={{ color: spins >= 0 ? "green": 'red' }}>{`${(spins * 100).toFixed(2)} %`}</span>,
        uniquePlayers: <span style={{ color: uniquePlayers >= 0 ? "green": 'red' }}>{`${(uniquePlayers * 100).toFixed(2)} %`}</span>,
        SPU: <span style={{ color: SPU >= 0 ? "green": 'red' }}>{`${(SPU * 100).toFixed(2)} %`}</span>,
        CWPP: <span style={{ color: CWPP >= 0 ? "green": 'red' }}>{`${(CWPP * 100).toFixed(2)} %`}</span>,
      }
    })

    setWeekChangeData(change)
  }, [ uniqueDays, reorderData, games ])

  const fetchData = async () => {
    try {
      const response = await axios.get(`api/reports`);
      console.log('response.data.data', response.data.data)
      console.log('response.data.setGames', response.data.games)
      setData(response.data.data)
      setGames(response.data.games)
      if( response.data.games.length > 0 ) {
        const minLaunchDate = response.data.games.length > 0 ? response.data.games?.reduce((min, item) => 
            new Date(item.launchDate) < new Date(min.launchDate) ? item : min
        ).launchDate?.split('T')[0] : new Date().toISOString().split('T')[0];
  
        const sortData = [...response.data.data].filter((item) => new Date(item.summary) >= new Date(minLaunchDate));
        sortData.sort((a, b) => new Date(a.summary) - new Date(b.summary));
    
        const totalGGRDates = [];
        const totalGGRGroupedData = Object.values(
          sortData.reduce((acc, { game, ggrEuro, summary }) => {
            if (!acc[game]) {
              acc[game] = { name: game, data: [], totalGGR: 0 }; // Added `totalGGR`
            }
    
            const gameItem = response.data.games.find((g) => g.name === game);
  
            acc[game].totalGGR += new Date(gameItem?.launchDate) > new Date(summary) ? 0: ggrEuro;
            acc[game].data.push(acc[game].totalGGR.toFixed(2));
    
            totalGGRDates.push(summary.slice(0, 10));
            return acc;
          }, {})
        );
        let maxDateLength = 0;
        const filterData = totalGGRGroupedData.map((item) => {
          maxDateLength = Math.max(maxDateLength, item.data.length);
          return {...item, data: trimArrayEdges(item.data)}
        });
        console.log('min, max', maxDateLength)
        setMaxRange(maxDateLength)
        setRange([1, maxDateLength])
      }

    } catch (error) {
      
    }
  }

  const checkLogin = async () => {
    const status = localStorage.getItem("reportToken");
    if( status !== "true" ) {
      setOpen(true)
    } else {
      setOpen(false)
    }
    fetchData();
  }

  useEffect(() => {
    checkLogin();
    // fetchData();
  }, [])

  // Handle file selection
  const handleFileChange = async (event) => {
    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      if (!file) {
        alert("Please select a file first.");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(`api/reports/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        openSnackbar({
          open: true,
          message: 'Excel uploaded successfully!',
          variant: 'alert',
          alert: {
            color: 'success'
          }
        });

        // setData(response.data.data)
        fetchData();
        setLoading(true);
      } catch (error) {
        console.error("Upload Error:", error);
        alert("Error uploading file.");
      } finally {
        setLoading(false);
        event.target.value = "";
      }
    }
  };

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const response = await axios.get(`api/reports/download`, {
        responseType: "blob", // Important for handling file downloads
      });
  
      // Create a URL for the blob object
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "report.xlsx"); // Set the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download Error:", error);
      openSnackbar({
        open: true,
        message: 'Excel not exists!',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
    } finally {
      setDownloading(false)
    }
  };

  useEffect(() => {

    if( games.length > 0 ) {
      const minLaunchDate = games.length > 0 ? games?.reduce((min, item) => 
          new Date(item.launchDate) < new Date(min.launchDate) ? item : min
      ).launchDate?.split('T')[0] : new Date().toISOString().split('T')[0];

      const sortData = [...data].filter((item) => new Date(item.summary) >= new Date(minLaunchDate));
      sortData.sort((a, b) => new Date(a.summary) - new Date(b.summary));
  
      const totalGGRDates = [];
      const totalGGRGroupedData = Object.values(
        sortData.reduce((acc, { game, ggrEuro, summary }) => {
          if (!acc[game]) {
            acc[game] = { name: game, data: [], totalGGR: 0 }; // Added `totalGGR`
          }
  
          const gameItem = games.find((g) => g.name === game);

          acc[game].totalGGR += new Date(gameItem?.launchDate) > new Date(summary) ? 0: ggrEuro;
          acc[game].data.push(acc[game].totalGGR.toFixed(2));
  
          totalGGRDates.push(summary.slice(0, 10));
          return acc;
        }, {})
      );
      let maxDateLength = 0;
      const filterData = totalGGRGroupedData.map((item) => {
        maxDateLength = Math.max(maxDateLength, item.data.length);
        return {...item, data: trimArrayEdges(item.data)}
      });

      // Filter data based on selected range
      const filteredData = filterData.map((item) => {
        const startIdx = range[0] - 1;  // Adjust for zero indexing
        const endIdx = range[1] - 1;  // Adjust for zero indexing
        item.data = item.data.slice(startIdx, endIdx + 1); // Slice the data based on selected range
        return item;
      });

      setTotalGGR(filteredData)
      const uniqueDates = [... new Set(totalGGRDates)];
      setUniqueDays(uniqueDates)
      const days = [];
      for (let index = range[0]; index <= range[1]; index++) {
        days.push(`Day ${index}`);
      }
      setDates(days);
      setTotalGGROptions((pre) => ({...pre, xaxis: {categories: days, labels: {show: false}}}))



      // Add SPU and CWPP for table data
      const reorderTemp = data?.map((item) => {
        return {
          ...item, 
          SPU: item.spins / item.uniquePlayers,
          CWPP: item.betsEuro / item.uniquePlayers,
        }
      })
  
      setReorderData(reorderTemp)
  
  
      const dateList = [];
      for (let i = 0; i < 14; i++) {
        dateList.push(`Day ${i + 1}`);
      }
      setDayLaunch14Options((pre) => ({...pre, xaxis: {categories: dateList, labels: {show: false}}}))
      setDayLaunch14(getNext14Items(totalGGRGroupedData, games, uniqueDates))
  
      const usersData = Object.values(
        sortData.reduce((acc, { game, summary, uniquePlayers }) => {
          if (!acc[game]) {
            acc[game] = { name: game, data: []}; // Added `totalGGR`
          }
          const gameItem = games.find((g) => g.name === game);

          acc[game].data.push(new Date(gameItem?.launchDate) > new Date(summary) ? 0: uniquePlayers);
          return acc;
        }, {})
      );
      // Apply the selected range to filter the users' data
      const filterUsersData = usersData.map((item) => {
        // Calculate the start and end indices based on the range
        const startIdx = range[0] - 1;  // Adjust for zero indexing
        const endIdx = range[1] - 1;  // Adjust for zero indexing
        item.data = item.data.slice(startIdx, endIdx + 1);  // Slice the data based on the selected range
        return { ...item, data: trimArrayEdges(item.data) };
      });

      setUsers(filterUsersData)
      // Function to calculate 5-day rolling sum and percentage change
      const calculateRollingChange = (data) => {
        if (data.length < 6) return []; // We need at least 6 days for the first comparison
        
        let rollingChanges = new Array(5).fill(0); // Fill the first 5 values with 0
        for (let i = 5; i < data.length; i++) {
          let firstSum = data.slice(i - 4, i + 1).reduce((sum, num) => sum + num, 0);  // Days 2-6
          let secondSum = data.slice(i - 5, i).reduce((sum, num) => sum + num, 0);  // Days 1-5
          
          let percentageChange = (((firstSum - secondSum) / (secondSum || 1)) * 100).toFixed(2);
          
          rollingChanges.push(percentageChange);
        }
        
        return rollingChanges;
      };

      const filterUserChangesData = usersData.map((item) => {
        // Calculate the start and end indices based on the range
        const startIdx = range[0] - 1;  // Adjust for zero indexing
        const endIdx = range[1] - 1;  // Adjust for zero indexing
        item.data = item.data.slice(startIdx, endIdx + 1);  // Slice the data based on the selected range
        return { ...item, data: calculateRollingChange(item.data) };
      });
      console.log('filterUserChangesData', filterUserChangesData)
      setUserChanges(filterUserChangesData)

      console.log('usersData', usersData)

      const spinsData = Object.values(
        sortData.reduce((acc, { game, spins, summary }) => {
          if (!acc[game]) {
            acc[game] = { name: game, data: [] }; // Added `totalGGR`
          }
          const gameItem = games.find((g) => g.name === game);
      
          // Check if the summary is within the selected range
          acc[game].data.push(new Date(gameItem?.launchDate) > new Date(summary) ? 0 : spins);
          return acc;
        }, {})
      );
      
      // Apply the selected range to filter the spins' data
      const filterSpinData = spinsData.map((item) => {
        // Calculate the start and end indices based on the range
        const startIdx = range[0] - 1;  // Adjust for zero indexing
        const endIdx = range[1] - 1;  // Adjust for zero indexing
        item.data = item.data.slice(startIdx, endIdx + 1);  // Slice the data based on the selected range
        return { ...item, data: trimArrayEdges(item.data) };
      });
      
      setSpins(filterSpinData);
  
  
      const spinsPerUserData = Object.values(
        sortData.reduce((acc, { game, spins, uniquePlayers, summary }) => {
          if (!acc[game]) {
            acc[game] = { name: game, data: [] }; // Added `totalGGR`
          }
          const gameItem = games.find((g) => g.name === game);
          acc[game].data.push(
            new Date(gameItem?.launchDate) > new Date(summary) ? 0 : (spins / uniquePlayers).toFixed(2)
          );
          return acc;
        }, {})
      );
      
      // Apply the selected range to filter the spins per user data
      const filterSpinPerUserData = spinsPerUserData.map((item) => {
        // Calculate the start and end indices based on the range
        const startIdx = range[0] - 1;  // Adjust for zero indexing
        const endIdx = range[1] - 1;  // Adjust for zero indexing
        item.data = item.data.slice(startIdx, endIdx + 1);  // Slice the data based on the selected range
        return { ...item, data: trimArrayEdges(item.data) };
      });
      
      setSpinsPerUser(filterSpinPerUserData);
    }
  }, [ data, startDate, games, range ])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.post(`api/account/check`, {
        email: ( onlyPassword ? user.email: email), password
      });

      localStorage.setItem("reportToken", "true")

      setWrongPassword(false)
      setOpen(false)
    } catch (error) {
      setWrongPassword(true)
    }
  }


  return (
    <ComponentSkeleton>
      <MainCard>
        {
          !open && 
          <Grid item xs={12} lg={12}>
            <Stack mb={3} spacing={1} display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2} justifyContent={"space-between"}>
              <Grid item>
                <label htmlFor="contained-button-file">
                  <Input accept=".xls,.xlsx" id="contained-button-file" type="file" onChange={handleFileChange} />
                  <LoadingButton loading={loading} variant="contained" component="span">
                    Upload Excel
                  </LoadingButton>
                </label>
                  <LoadingButton sx={{ marginLeft: '10px' }} loading={downloading} variant="contained" component="span" onClick={handleDownload}>
                    Download Excel
                  </LoadingButton>
              </Grid>

              <Grid sx={{ marginTop: '0px !important' }} gap={2} display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Typography variant="h5" textAlign={'right'}>LAUNCH</Typography>
                <Link Link to={onlyPassword ? `/admin/report-type/users/launch` : `/report-type/users/launch`}>
                  <Button loading={loading} variant="contained" component="span">Users</Button>
                </Link>
                <Link to={onlyPassword ? `/admin/report-type/totalGGR/launch`: `/report-type/totalGGR/launch`}>
                  <Button loading={loading} variant="contained" component="span">Total GGR</Button>
                </Link>
                <Link to={onlyPassword ? `/admin/report-type/spinsPerUser/launch`: `/report-type/spinsPerUser/launch`}>
                  <Button loading={loading} variant="contained" component="span">Spins Per User</Button>
                </Link>
                <Link to={ onlyPassword ? `/admin/report-type/totalCoins/launch`: `/report-type/totalCoins/launch`}>
                  <Button loading={loading} variant="contained" component="span">Total Coins</Button>
                </Link>
              </Grid>
            </Stack>

            <Stack mb={3} spacing={1} display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2} justifyContent={"end"}>

              <Grid sx={{ marginTop: '0px !important' }} gap={2} display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Typography variant="h5" textAlign={'right'}>EXCLUSIVE</Typography>
                <Link to={onlyPassword ? `/admin/report-type/users/exclusive`: `/report-type/users/exclusive`}> 
                  <Button loading={loading} variant="contained" component="span">Users</Button>
                </Link>
                <Link to={onlyPassword ? `/admin/report-type/totalGGR/exclusive`: `/report-type/totalGGR/exclusive`}>
                  <Button loading={loading} variant="contained" component="span">Total GGR</Button>
                </Link>
                <Link to={onlyPassword ? `/admin/report-type/spinsPerUser/exclusive`: `/report-type/spinsPerUser/exclusive`}>
                  <Button loading={loading} variant="contained" component="span">Spins Per User</Button>
                </Link>
                <Link to={ onlyPassword ? `/admin/report-type/totalCoins/exclusive`: `/report-type/totalCoins/exclusive`}>
                  <Button loading={loading} variant="contained" component="span">Total Coins</Button>
                </Link>
              </Grid>
            </Stack>

            <Stack mb={5} spacing={3}>
              <GameCards data={data} games={games} />
            </Stack>

            <Stack mb={5} spacing={3}>
              <Typography variant="h2" textAlign={'center'}>Launch Information</Typography>
              <ReactTable {...{ data: games, columns: launchColumns, setData: setGames }} />
            </Stack>

            <Stack mb={5} spacing={3}>
              <Typography variant="h2" textAlign={'center'}>TOTAL REVENUE</Typography>
              <ReactTable {...{ data: totalGGR, columns: totalRevenueColumns, setData: setGames }} />
            </Stack>

            <Stack mb={5} spacing={3}>
              <Typography variant="h2" textAlign={'center'}>7 Day Averages</Typography>
              <ReactTable {...{ data: weekAveragesData, columns: weekAverages, setData: setGames }} />
            </Stack>

            <Stack mb={5} spacing={3}>
              <Typography variant="h2" textAlign={'center'}>7 Day Change (%) </Typography>
              <ReactTable {...{ data: weekChangeData, columns: weekAverages, setData: setGames }} />
            </Stack>

            <Stack mb={5} direction="row" spacing={3} alignItems="end" justifyContent="center">
              <Typography variant="h2" textAlign={'right'} sx={{ width: '80%' }}>Day Setting</Typography>
              <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={range}
                  max={maxRange}
                  min={1}
                  onChange={handleRangeChange}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `Day ${value}`}
                  sx={{ width: '20%' }}
                />
            </Stack>

            <Stack mb={5}>
              <Typography variant="h2" textAlign={'center'}>Total GGR</Typography>
              <ReactApexChart options={totalGGROptions} series={totalGGR} type="line" height={500} />
            </Stack>

            <Stack mb={5}>
              <Typography variant="h2" textAlign={'center'}>USERS</Typography>
              <ReactApexChart options={totalGGROptions} series={users} type="line" height={500} />
            </Stack>

            <Stack mb={5}>
              <Typography variant="h2" textAlign={'center'}>USER 5 Day Change (%)</Typography>
              <ReactApexChart options={totalGGROptions} series={userChanges} type="line" height={500} />
            </Stack>

            <Stack mb={5}>
              <Typography variant="h2" textAlign={'center'}>SPINS PER DAY</Typography>
              <ReactApexChart options={totalGGROptions} series={spins} type="line" height={500} />
            </Stack>

            <Stack mb={5}>
              <Typography variant="h2" textAlign={'center'}>SPINS PER PLAYER</Typography>
              <ReactApexChart options={totalGGROptions} series={spinsPerUser} type="line" height={500} />
            </Stack>

            <Stack>
              <Typography variant="h2" textAlign={'center'}>14 DAY LAUNCH</Typography>
              <ReactApexChart options={dayLaunch14Options} series={dayLaunch14} type="line" height={500} />
            </Stack>
          </Grid>
        }
      </MainCard>


      <Dialog open={open} maxWidth="xs">
        <Box sx={{ p: 1, py: 1.5 }}>
          {
            onlyPassword ? 
            <DialogTitle>Confirm Password</DialogTitle>
            :
            <DialogTitle>Login</DialogTitle>
          }
          <DialogContent>
            <Stack spacing={1} mb={2} >
              {
                !onlyPassword && 
                <TextField name="email" placeholder="Email" type="email" fullWidth variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
              }
              <TextField name="password" placeholder="Password" type="password" fullWidth variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Stack>
            {
              wrongPassword && onlyPassword && 
              <Typography variant="h6" color={"red"}>Password is wrong.</Typography>
            }
            {
              wrongPassword && !onlyPassword && 
              <Typography variant="h6" color={"red"}>Credentials is wrong.</Typography>
            }          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleConfirm}>
              Confirm
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </ComponentSkeleton>
  )
}

export default ReportPage;
