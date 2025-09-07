import { useParams, useNavigate } from "react-router";
import ReactApexChart from 'react-apexcharts';
import { Grid, Stack, Typography, Box, TextField, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, ToggleButton, ToggleButtonGroup } from '@mui/material';

import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import MainCard from 'components/MainCard';
import { separateByComma } from "./report";
import ReactFixedHeaderTable from 'components/ReactFixedHeaderTable';

import axios, { fetcher } from 'utils/axios';
import { useEffect, useState, useMemo } from "react";


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

const ReportOnePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ game, setGame ] = useState(null);
    const [ reports, setReports ] = useState([]);
    const [ totalGGR, setTotalGGR ] = useState([]);
    const [ totalGGROptions, setTotalGGROptions ] = useState(lineChartOptions);
    const [ dataView, setDataView ] = useState('all'); // 'all', 'exclusive', 'launch'
    const [ allReportsData, setAllReportsData ] = useState([]); // Store all data for filtering
    const [ allGraphData, setAllGraphData ] = useState([]); // Store all graph data for filtering

    const tableColumn = useMemo(
        () => [
            {
                header: '',
                accessorKey: 'day',
                dataType: 'text', 
                cell: ({ getValue, row }) => {
                    const isSeparator = row.original.isSeparator;
                    return (
                        <div style={{ 
                            textWrap: "nowrap",
                            fontWeight: isSeparator ? 'bold' : 'normal',
                            backgroundColor: isSeparator ? '#f0f0f0' : 'transparent',
                            padding: isSeparator ? '8px' : '0',
                            textAlign: 'center'
                        }}>
                            {getValue()}
                        </div>
                    );
                }
            },
            {
                header: 'Game',
                accessorKey: 'game',
                dataType: 'text', 
                cell: ({ getValue }) => {
                    return <div style={{ textWrap: "nowrap" }}>{getValue()}</div>
                }
            },
            {
                header: 'Bets Euro',
                accessorKey: 'betsEuro',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'Wins Euro',
                accessorKey: 'winsEuro',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'GGR Euro',
                accessorKey: 'ggrEuro',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'Avg Bet',
                accessorKey: 'avgBet',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'Spins',
                accessorKey: 'spins',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'Unique Players',
                accessorKey: 'uniquePlayers',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'Total GGR',
                accessorKey: 'totalGGR',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'Spins Per User',
                accessorKey: 'spinsPerUser',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'Coins Wagered Per User',
                accessorKey: 'coinsWageredPerUser',
                dataType: 'text', 
                cell: separateByComma
            },
            {
                header: 'Total Coins Wagered', 
                accessorKey: 'totalCoinsWagered', 
                dataType: 'text', 
                cell: separateByComma
            },
        ],
        []
    );

    useEffect(() => {
        const fetchGameData = async () => {
            const response = await axios.get(`/api/reports/${id}`);

            if (response.status === 200) {

                const gameData = response.data.game;
                const reportData = response.data.reports;

                // Separate exclusive and launch data
                const exclusiveData = [...reportData].filter((item) => new Date(item.summary) < new Date(gameData?.launchDate));
                const launchData = [...reportData].filter((item) => new Date(item.summary) >= new Date(gameData?.launchDate));
                
                // Sort both datasets
                exclusiveData.sort((a, b) => new Date(a.summary) - new Date(b.summary));
                launchData.sort((a, b) => new Date(a.summary) - new Date(b.summary));

                // Combine data: exclusive first, then launch
                const sortData = [...exclusiveData, ...launchData];

                const totalGGRGroupedData = Object.values(
                    sortData.reduce((acc, { game, ggrEuro, summary, uniquePlayers}) => {
                      if (!acc[game]) {
                        acc[game] = { name: game, data: [], totalGGR: 0, dataSum: [] }; // Added `totalGGR`
                      }
                      acc[game].totalGGR += ggrEuro;
                      acc[game].dataSum.push(acc[game].totalGGR.toFixed(2));
                      acc[game].data.push(uniquePlayers);
                      return acc;
                    }, {})
                );

                if(  totalGGRGroupedData.length > 0 ) {
                    setTotalGGR(totalGGRGroupedData);
                    setAllGraphData(totalGGRGroupedData); // Store original graph data
        
                    const dateCounts = totalGGRGroupedData[0].data.length;
                    setTotalGGROptions({
                        ...totalGGROptions,
                        xaxis: {
                            categories: Array.from({ length: dateCounts }, (_, i) => `Day ${i + 1}`), 
                            labels: {show: false}
                        }
                    });
                }

                setGame(gameData);

                let totalGGR = 0;
                let totalCoins = 0;
                let totalCoinsWagered = 0;
                let dayCounter = 1;

                const tableData = [];

                // Process exclusive data
                exclusiveData.forEach((item, index) => {
                    totalGGR += item.ggrEuro;
                    totalCoins += item.betsEuro;
                    totalCoinsWagered += item.betsEuro;
                    const spinsPerUser = item.spins / item.uniquePlayers;
                    const coinsWageredPerUser = item.betsEuro / item.uniquePlayers;

                    tableData.push({
                        day: `Exclusive Day ${ index + 1 }`, 
                        totalGGR, 
                        totalCoins, 
                        spinsPerUser, 
                        coinsWageredPerUser, 
                        totalCoinsWagered, 
                        ...item
                    });
                });

                // Add separator row if there's exclusive data
                if (exclusiveData.length > 0) {
                    tableData.push({
                        day: "--- LAUNCH DATA ---",
                        game: "",
                        betsEuro: "",
                        winsEuro: "",
                        ggrEuro: "",
                        avgBet: "",
                        spins: "",
                        uniquePlayers: "",
                        totalGGR: "",
                        spinsPerUser: "",
                        coinsWageredPerUser: "",
                        totalCoinsWagered: "",
                        isSeparator: true
                    });
                }

                // Process launch data with Day 1, Day 2, etc.
                launchData.forEach((item, index) => {
                    totalGGR += item.ggrEuro;
                    totalCoins += item.betsEuro;
                    totalCoinsWagered += item.betsEuro;
                    const spinsPerUser = item.spins / item.uniquePlayers;
                    const coinsWageredPerUser = item.betsEuro / item.uniquePlayers;

                    tableData.push({
                        day: `Day ${ dayCounter }`, 
                        totalGGR, 
                        totalCoins, 
                        spinsPerUser, 
                        coinsWageredPerUser, 
                        totalCoinsWagered, 
                        ...item
                    });
                    dayCounter++;
                });

                console.log(tableData)

                setAllReportsData(tableData);
                setReports(tableData);
            }
        }

        fetchGameData()
    }, [])

    // Function to filter data based on selected view
    const filterDataByView = (view) => {
        if (!allReportsData.length) return;

        if (view === 'all') {
            setReports(allReportsData);
            setTotalGGR(allGraphData);
        } else if (view === 'exclusive') {
            const exclusiveData = allReportsData.filter(item => 
                item.day.includes('Exclusive Day') || item.isSeparator
            );
            setReports(exclusiveData);
            
            // Filter graph data for exclusive only
            const exclusiveCount = allReportsData.filter(item => item.day.includes('Exclusive Day')).length;
            if (allGraphData.length > 0) {
                const filteredGraphData = [{
                    ...allGraphData[0],
                    data: allGraphData[0].data.slice(0, exclusiveCount),
                    dataSum: allGraphData[0].dataSum.slice(0, exclusiveCount)
                }];
                setTotalGGR(filteredGraphData);
                
                // Update x-axis categories for exclusive data
                setTotalGGROptions({
                    ...totalGGROptions,
                    xaxis: {
                        categories: Array.from({ length: exclusiveCount }, (_, i) => `Exclusive Day ${i + 1}`), 
                        labels: {show: false}
                    }
                });
            }
        } else if (view === 'launch') {
            const launchData = allReportsData.filter(item => 
                item.day.includes('Day ') && !item.day.includes('Exclusive Day') && !item.isSeparator
            );
            setReports(launchData);
            
            // Filter graph data for launch only
            const exclusiveCount = allReportsData.filter(item => item.day.includes('Exclusive Day')).length;
            if (allGraphData.length > 0) {
                const filteredGraphData = [{
                    ...allGraphData[0],
                    data: allGraphData[0].data.slice(exclusiveCount),
                    dataSum: allGraphData[0].dataSum.slice(exclusiveCount)
                }];
                setTotalGGR(filteredGraphData);
                
                // Update x-axis categories for launch data
                const launchCount = allGraphData[0].data.length - exclusiveCount;
                setTotalGGROptions({
                    ...totalGGROptions,
                    xaxis: {
                        categories: Array.from({ length: launchCount }, (_, i) => `Day ${i + 1}`), 
                        labels: {show: false}
                    }
                });
            }
        }
    };

    // Handle data view change
    const handleDataViewChange = (event, newView) => {
        if (newView !== null) {
            setDataView(newView);
            filterDataByView(newView);
        }
    };



    return (
    <ComponentSkeleton>
        <MainCard title="">
            <Grid item xs={12} lg={12}>

                <Stack mb={3} spacing={1}>
                    <Grid item>
                        <Button variant="contained" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                    </Grid>
                </Stack>

                <Stack mb={3} spacing={2} alignItems="center">
                    <Typography variant="h6" textAlign={'center'}>Data View Options</Typography>
                    <ToggleButtonGroup
                        value={dataView}
                        exclusive
                        onChange={handleDataViewChange}
                        aria-label="data view selection"
                        sx={{ 
                            '& .MuiToggleButton-root': {
                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                padding: { xs: '6px 12px', sm: '8px 16px' }
                            }
                        }}
                    >
                        <ToggleButton value="all" aria-label="all data">
                            All Data
                        </ToggleButton>
                        <ToggleButton value="exclusive" aria-label="exclusive data">
                            Exclusive Data
                        </ToggleButton>
                        <ToggleButton value="launch" aria-label="launch data">
                            Launch Data
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <Stack mb={5}>
                    <Typography variant="h2" textAlign={'center'}>User Per Day Graph</Typography>
                    <ReactApexChart options={totalGGROptions} series={[{ name: totalGGR?.[0]?.name, data: totalGGR?.[0]?.data }]} type="line" height={500} />
                </Stack>

                <Stack mb={5}>
                    <Typography variant="h2" textAlign={'center'}>Total GGR Graph</Typography>
                    <ReactApexChart options={totalGGROptions} series={[{ name: totalGGR?.[0]?.name, data: totalGGR?.[0]?.dataSum }]} type="line" height={500} />
                </Stack>

                <Stack mb={5} spacing={3}>
                    <Typography variant="h2" textAlign={'center'}>Game Data</Typography>
                    <ReactFixedHeaderTable 
                        data={reports} 
                        columns={tableColumn} 
                        setData={() => {}} 
                        height="600px"
                    />
                </Stack>

            </Grid>
        </MainCard>
    </ComponentSkeleton>
    )
}

export default ReportOnePage;