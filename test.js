const alert = require('./index.js');

alert({
	type: 'success',
	msg: 'All done!',
	name: 'DONE'
});
alert({
	type: 'info',
	msg: 'There is an update available'
});
alert({
	type: 'warning',
	msg: `You didn't add something!`
});
alert({
	type: 'error',
	msg: `Something went wrong!`
});
