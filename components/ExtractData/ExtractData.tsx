import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import TypeDb from "../../types/typeDb";

type ExtractDataProps = {
  db: Array<TypeDb>;
};

export default function ExtractData(props: ExtractDataProps) {
  return (
    <TableContainer component={Paper} sx={{maxWidth: 1000, margin: 1, borderRadius:4}}>
      <Table sx={{ minWidth: 400, alignItems: 'left', alignContent:'left', background: "rgba(91, 90, 90, 0.7)" }} aria-label="sticky table">
        <TableHead>
          <TableRow sx={{ background: "rgba(45, 40, 40, 0.7)", color: 'white'}}>
            <TableCell sx={{fontSize: 22, color: 'white'}}>ID</TableCell>
            <TableCell sx={{fontSize: 22, color: 'white'}}>Data</TableCell>
            <TableCell sx={{fontSize: 22, color: 'white'}}>Descrição</TableCell>
            <TableCell sx={{fontSize: 22, color: 'white'}}>Valor</TableCell>
            <TableCell sx={{fontSize: 22, color: 'white'}}>Pagamento</TableCell>
            <TableCell sx={{fontSize: 22, color: 'white'}}>Operação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.db.map((item) => (
            <TableRow
            key={item.id}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell sx={{fontSize: 17, fontWeight: 400,color: 'black'}}>{item.id}</TableCell>
              <TableCell sx={{fontSize: 17, fontWeight: 400,color: 'black'}}>{item.date}</TableCell>
              <TableCell sx={{fontSize: 17, fontWeight: 400,color: 'black'}}>{item.description}</TableCell>
              <TableCell sx={{fontSize: 17, fontWeight: 400,color: 'black'}}>{item.amount}</TableCell>
              <TableCell sx={{fontSize: 17, fontWeight: 400,color: 'black'}}>{item.type}</TableCell>
              <TableCell sx={{fontSize: 17, fontWeight: 400,color: 'black'}}>{item.operation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
