import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Project Name', minWidth: 170 },
  { id: 'position', label: 'Position', minWidth: 100 },
  {
    id: 'office',
    label: 'Office',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'time',
    label: 'Duration',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'techs',
    label: 'Technologies',
    minWidth: 170,
    align: 'right'
  },
];

function createData(name, position, office, time, techs) {
  return { name, position, office, time, techs };
}

const rows = [
  createData('RWML Platform', 'Senior Software Developer', 'Iqvia', '1 and half year', 'Reacts, Redux, Golang, Elastic Search'),
  createData('LOKI', 'Senior Consultant', 'Cisco', '1 year', 'JavaScript, ReactJS, HTML5, CSS3, Redux'),
  createData('Experience Design & Development (EDD)', 'Senior Consultant', 'Capgemini', '9 months', 'Angular, HTML5, CSS3'),
  createData('USM NEXT GEN', 'Consultant', 'Cisco', '6 months', 'Angular, Highcharts, HTML5, CSS3'),
  createData('GRID', 'Consultant', 'Cisco', '7 months', 'AngularJS, Highcharts, HTML5, CSS3'),
  createData('Hive', 'Consultant', 'Capgemini', '1.5 years', 'JavaScript (highchart graph library), JQuery (datatable plugin), Bootstrap, php'),
  createData('AppleSeed', 'Senior System Engineer', 'Infosys', '6 months', 'JavaScript, Angular JS, JQuery Lite, Html, CSS'),
  createData('Cell phone based survey', 'Software Engineer', 'Vidteq (Presently MapMyIndia)', '1 years', 'JavaScript, JQuery, SenchaTouch, Phone gap, php, Android, HTML, CSS'),
  createData('VidiPoi Tool', 'Software Engineer', 'Vidteq (Presently MapMyIndia)', '2 years', 'JavaScript, JQuery, OpenLayers, PHP, Perl, Postgresql'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Reports() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

