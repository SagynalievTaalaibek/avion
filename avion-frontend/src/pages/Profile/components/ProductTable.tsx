import React from 'react';
import { ProductI } from '../../../types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: ProductI[];
}

const ProductTable: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const deleteHandle = (id: string) => {
    console.log(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="left">Цена</TableCell>
            <TableCell align="left">Высота</TableCell>
            <TableCell align="left">Ширина</TableCell>
            <TableCell align="left">Количество</TableCell>
            <TableCell align="left">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.height}</TableCell>
              <TableCell align="left">{row.width}</TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="center">
                <Box sx={{ display: 'flex', justifyContent: 'spaceBetween' }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: 'green', marginRight: 1 }}
                    onClick={() => navigate(`/product/${row.id}/edit`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => deleteHandle(row.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
