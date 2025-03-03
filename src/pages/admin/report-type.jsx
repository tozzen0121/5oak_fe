import { useParams, useNavigate } from "react-router";
import { Grid, Stack, Typography, Box, TextField, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { useState, useMemo, useEffect } from "react";

import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import MainCard from 'components/MainCard';
import { ReactTable, separateByComma } from "./report";
import axios, { fetcher } from 'utils/axios';


const ReportTypePage = () => {
    const { type, tab } = useParams();
    const navigate = useNavigate();

    const [ reports, setReports ] = useState([]);
    const [ games, setGames ] = useState([]);
    const [ title, setTitle ] = useState('')

    const tableColumn = useMemo(
        () => [
            {
                header: '',
                accessorKey: 'day',
                dataType: 'text'
            },
            ...games.map((game) => ({
                header: game.name,
                accessorKey: game.name,
                dataType: 'text', 
                cell: separateByComma
            }))
        ],
        [games]
    );

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/api/reports`);

            if (res.status === 200) {
                setGames(res.data.games);

                const gameData = res.data.games.reduce((acc, g) => {
                    acc[g.name] = g.launchDate;
                    return acc;
                }, {});

                const reportData = res.data.data;
                // If the tab is 'EXCLUSIVE', filter out data before launch date
                const filteredData = reportData.filter((item) => {
                    const launchDate = gameData[item.game];
                    return tab == 'exclusive' ? new Date(item.summary) < new Date(launchDate) : true;
                });
                // Sort by summary date
                filteredData.sort((a, b) => new Date(a.summary) - new Date(b.summary));
                const calculatedData = 
                    filteredData.reduce((acc, { game, ggrEuro, uniquePlayers, spins, betsEuro }) => {
                      if (!acc[game]) {
                        acc[game] = { name: game, users: [], totalGGR: [], spinsPerUser: [], totalCoins: [], totalGGRValue: 0, totalCoinValue: 0 }; // Added `totalGGR`
                      }

            
                      acc[game].totalGGRValue += ggrEuro;
                      acc[game].totalCoinValue += betsEuro;
                      acc[game].users.push(uniquePlayers.toFixed(2));
                      acc[game].totalGGR.push(acc[game].totalGGRValue.toFixed(2));
                      acc[game].spinsPerUser.push((spins / uniquePlayers).toFixed(2));
                      acc[game].totalCoins.push(acc[game].totalCoinValue.toFixed(2));
                      return acc;
                    }, {})

                const maxArrayLength = Math.max(...Object.values(calculatedData).map(game => game.users.length));

                const reportsArr = []
                const gameNames = Object.keys(gameData);

                for (let i = 0; i < maxArrayLength; i++) {
                    const obj = { "day": `Day ${i + 1}` };
                    for (let j = 0; j < gameNames.length; j++) {
                        const game = gameNames[j];
                        const gameData = calculatedData[game];  // Get the game data
                
                        // Check if the game data exists and is properly structured
                        if (gameData) {
                            if (type === "users") {
                                obj[game] = Number(i < gameData.users.length ? gameData.users[i] : 0);
                            } else if (type === "totalGGR") {
                                obj[game] = Number(i < gameData.totalGGR.length ? gameData.totalGGR[i] : 0);
                            } else if (type === "spinsPerUser") {
                                obj[game] = Number(i < gameData.spinsPerUser.length ? gameData.spinsPerUser[i] : 0);
                            } else if (type === "totalCoins") {
                                obj[game] = Number(i < gameData.totalCoins.length ? gameData.totalCoins[i] : 0);
                            }
                        } else {
                            console.error(`Missing data for game: ${game}`);  // Log if game data is missing
                            obj[game] = 0;  // Set to 0 if the game data is missing
                        }
                    }
                    reportsArr.push(obj);
                }

                setReports(reportsArr);
            }

        }

        fetchData();

        if(  type === "users" ) {
            setTitle("Users");
        } else if ( type === "totalGGR" ) {
            setTitle("Total GGR");
        } else if ( type === "spinsPerUser" ) {
            setTitle("Spins Per User");
        } else if ( type === "totalCoins" ) {
            setTitle("Total Coins");
        }
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
    
                    <Stack mb={5} spacing={3}>
                        <Typography variant="h2" textAlign={'center'}>{ title }</Typography>
                        <ReactTable {...{ data: reports, columns: tableColumn, setData: () => {} }} />
                    </Stack>
    
                </Grid>
            </MainCard>
        </ComponentSkeleton>
    )
}

export default ReportTypePage;