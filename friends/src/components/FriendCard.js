import React from "react";

export default function FriendCard(props) {

    return (
        <div>
            <p>{props.friends.name}</p>
            <p>{props.friends.id}</p>
            <p>{props.friends.age}</p>
            <p>{props.friends.email}</p>
        </div>
    )
}
// import TableContainer from "@material-ui/core/TableContainer";
// import Paper from "@material-ui/core/Paper";
// import Table from "@material-ui/core/Table";
// import { makeStyles } from "@material-ui/core/styles";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import TableCell from "@material-ui/core/TableCell";

// export default function FriendCard(props) {
//   const useStyles = makeStyles({
//     table: {
//       minWidth: 800,
//     },
//   });

//   const classes = useStyles();
//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <div>
//               <TableCell>{props.friend.id}</TableCell>
//               <TableCell>
//                 Name<h3>{props.friend.name}</h3>
//               </TableCell>
//               <TableCell align="right">
//                 Age<p>{props.friend.age}</p>
//               </TableCell>
//               <TableCell align="right">
//                 Email<p>{props.friend.email}</p>
//               </TableCell>
//             </div>
//           </TableRow>
//         </TableHead>
//       </Table>
//     </TableContainer>
//   );
// }
