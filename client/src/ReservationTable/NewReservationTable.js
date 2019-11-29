
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
//import DeleteIcon from '@material-ui/icons/Delete';
//import FilterListIcon from '@material-ui/icons/FilterList';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}
// ========== CODE FOR EnhancedTableHead ========== *******************************************************************
const headCells = [
  { id: 'fullName', numeric: false, disablePadding: true, label: 'Client Name' },
  { id: 'apptTime', numeric: true, disablePadding: false, label: 'Appointment Time' },
  { id: 'reqModel', numeric: false, disablePadding: false, label: 'Preferred Vehicle' },
  { id: 'createdBy', numeric: false, disablePadding: false, label: 'Reserved By' },
  { id: 'created', numeric: true, disablePadding: false, label: 'Reservation Created' },
];

function EnhancedTableHead(props) {
  // const { onSelectAllClick, numSelected, rowCount }

  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          /> */}
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// ========== CODE FOR EnhancedTableToolbar ========== *******************************************************************
const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;


  const onDelete = (e) => {
    console.log('clicked!')
    const result = window.confirm('Are you sure you want to delete these reservations?')
    console.log(result)  // result will be either true (clicked: ok) or false (clicked: cancel)
    // console.log(newSelected)  // this would be the variable that would hold the reservation Id's.  need to make this a class.
  }

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          UPCOMING LOANER RESERVATIONS
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          {/* so i can get the onClick function to fire, but how do i know what row is clicked?????????????? */}
          <IconButton aria-label="delete" onClick={e => onDelete(e)}>
            {/* <DeleteIcon /> */}
            <span>D</span>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            {/* <FilterListIcon /> */}
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// ========== CODE FOR ENHANCED TABLE ========== *******************************************************************
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable( {reservations } ) {
  const classes = useStyles();
  
  // const [state, setState] = useState(initialState); Returns a stateful value, and a function to update it. During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
  // setState(newState); The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
  // given that we are using redux => we can use this code if it's not leaving the table, anything leaving the table will need to be run through redux
  // eg the Ids of the reservations we want to delete
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('apptTIme');
  const [selected, setSelected] = React.useState([]);
  //const [page, setPage] = React.useState(0);
  //const [dense, setDense] = React.useState(false);
  //const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

//   const handleSelectAllClick = event => {
//     if (event.target.checked) {
//       const newSelecteds = reservations.map(n => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    console.log(newSelected)  // this has the Id's of the reservations in it.  
    
    setSelected(newSelected);
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = event => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

//   const handleChangeDense = event => {
//     setDense(event.target.checked);
//   };

  const isSelected = name => selected.indexOf(name) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, reservations.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
            //   onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={reservations.length}
            />
            <TableBody>
              {stableSort(reservations, getSorting(order, orderBy))
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((reservation, index) => {
                  const isItemSelected = isSelected(reservation._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, reservation._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={reservation._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {reservation.fullName}
                      </TableCell>
                      <TableCell align="right">{`${new Date(reservation.apptTime).toLocaleString(undefined, {day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit'})}`}</TableCell>
                      <TableCell align="left">{reservation.reqModel}</TableCell>
                      <TableCell align="left">{reservation.createdBy}</TableCell>
                      <TableCell align="right">{`${new Date(reservation.created).toLocaleString(undefined, {day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit'})}`}</TableCell>
                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </div>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={reservations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}