
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const DataTable = () => {
  const activities = [
    { id: 1, description: 'New farm added', date: '2025-01-01' },
    { id: 2, description: 'Report generated', date: '2025-01-02' },
    { id: 3, description: 'User signup', date: '2025-01-03' },
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell>{activity.description}</TableCell>
            <TableCell>{activity.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
