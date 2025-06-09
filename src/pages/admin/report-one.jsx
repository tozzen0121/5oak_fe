import { useParams, useNavigate } from "react-router";
import ReactApexChart from 'react-apexcharts';
import { Grid, Stack, Typography, Box, TextField, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';

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

    const tableColumn = useMemo(
        () => [
            {
                header: '',
                accessorKey: 'day',
                dataType: 'text', 
                cell: ({ getValue }) => {
                    return <div style={{ textWrap: "nowrap" }}>{getValue()}</div>
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

                const sortData = [...reportData].filter((item) => new Date(item.summary) >= new Date(gameData?.launchDate));
                sortData.sort((a, b) => new Date(a.summary) - new Date(b.summary));

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

                const tableData = sortData?.map((item, index) => {

                    totalGGR += item.ggrEuro;
                    totalCoins += item.betsEuro;
                    totalCoinsWagered += item.betsEuro;
                    const spinsPerUser = item.spins / item.uniquePlayers;
                    const coinsWageredPerUser = item.betsEuro / item.uniquePlayers;

                    return {
                        day: `Day ${ index + 1 }`, 
                        totalGGR, 
                        totalCoins, 
                        spinsPerUser, 
                        coinsWageredPerUser, 
                        totalCoinsWagered, 
                        ...item
                    }
                })

                console.log(tableData)

                setReports(tableData);
            }
        }

        fetchGameData()
    }, [])



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