import React from 'react';
import MaterialTable from 'material-table';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteReservation } from '../actions';
import { objDatesToFrEndDates } from '../helpers';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import ReservationForm from '../Forms/ReservationForm';

const mapStateToProps = (state) => {
	return {
		reservations : state.requestReservations.reservations,
		resIsPending : state.requestReservations.isPending,
		resError     : state.requestReservations.resError
	};
};

const MapDispatchToProps = (dispatch) => {
	return {
		handleDelete : (deletedRowData, history) => dispatch(deleteReservation(deletedRowData, history))
	};
};

const MatUIResTable = (props) => {
	const { reservations, handleDelete, history } = props;

	const sortedReservations = reservations.sort(function (a, b) {
		return new Date(a.apptTime).getTime() - new Date(b.apptTime).getTime();
	});

	const resRowData = sortedReservations.map((obj) => objDatesToFrEndDates(obj));

	const columns = [
		{ title: 'Appt Time', field: 'apptTime', type: 'datetime' },
		{ title: 'Client Name', field: 'fullName' },
		{ title: 'Requested Model', field: 'reqModel' },
		{ title: 'Created By', field: 'createdBy' },
		{ title: 'Created', field: 'created', type: 'datetime' }
	];

	// ================ MODAL SETUP ==================================

	const useStyles = makeStyles((theme) => ({
		modal : {
			display        : 'flex',
			alignItems     : 'center',
			justifyContent : 'center'
		},
		paper : {
			backgroundColor : theme.palette.background.paper,
			border          : '2px solid #000',
			boxShadow       : theme.shadows[5],
			padding         : theme.spacing(2, 4, 3)
		}
	}));

	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<MaterialTable
				columns={columns}
				data={resRowData}
				title={'Reservation Table'}
				options={{ pageSize: 10 }}
				actions={[
					{
						icon         : 'add',
						tooltip      : 'Add Reservation',
						isFreeAction : true,
						onClick      : (e) => {
							// NEED TO ADD CODE HERE TO ADD RESERVATION
							// alert('you clicked me')
							handleOpen();
						}
					}
				]}
				editable={{
					onRowDelete : (deletedRowData) =>
						new Promise((resolve, reject) => {
							console.log(deletedRowData);
							handleDelete(deletedRowData, history);
							setTimeout(() => {
								resolve();
							}, 1000);
						})
				}}
			/>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout : 500
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Add New Reservation</h2>
						<ReservationForm handleClose={handleClose} />
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default connect(mapStateToProps, MapDispatchToProps)(withRouter(MatUIResTable));
