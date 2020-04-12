const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/api/vehicles', (req, res) => {
	if (req.account.accessToken) {
		// console.log(req.user.accessToken);
		axios
			.get('https://api.automatic.com/vehicle', {
				headers : { Authorization: `bearer ${req.account.accessToken}` },
				json    : true
			})
			// .then((response) => JSON.stringify(response))
			.then((response) => {
				console.log(response.data);
				res.json(response.data);
			});
	}
});

module.exports = router;
