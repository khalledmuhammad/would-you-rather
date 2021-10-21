import React from 'react'
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function LeaderBoard() {
    const users = useSelector(state=>state.Users.user)
    const userRank =  Object.keys(users)
    .sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) 
        - (users[a].questions.length + Object.keys(users[a].answers).length))
        
        console.log(userRank)
        const StyledTableCell = styled(TableCell)(({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            [`&.${tableCellClasses.body}`]: {
              fontSize: 14,
            },
          }));
          
          const StyledTableRow = styled(TableRow)(({ theme }) => ({
            '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.action.hover,
            },
            // hide last border
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }));

    return (
        <div style={{position:"absolute"}}>
            <h1 style={{textAlign:"center"}}>leaderBoard</h1>
            <TableContainer  component={Paper}>
      <Table sx={{ maxWidth: 300 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">answered</StyledTableCell>
            <StyledTableCell align="right">asked</StyledTableCell>
            <StyledTableCell align="right">total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                userRank.map(username =>
                    
                    <StyledTableRow key={Math.random()}>
                        

                    <StyledTableCell component="th" scope="row">
                    {username}
                    
                    <img className="left floated mini ui image" alt="userImage" src={users[username].avatarURL}/>

                   
                    </StyledTableCell>
                    <StyledTableCell align="right">{Object.keys(users[username].answers).length}</StyledTableCell>
                    <StyledTableCell align="right">{users[username].questions.length}</StyledTableCell>
                    <StyledTableCell align="right">{Object.keys(users[username].answers).length+users[username].questions.length}</StyledTableCell>
                  </StyledTableRow>
                )
            }
            </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default LeaderBoard
