/**
 * CLI Alerts
 *
 * Cross platform CLI Alerts with colours.
 * Works on Mac OS, Linux and Windows.
 * Alerts: `success`, `info`, `warning`, `error`
 *
 * @author Antonio Quintero-Felizzola <https://twitter.com/k3rnel_err0r>
 */
const chalk = require('chalk');
const logSymbols = require('log-symbols');

const green = chalk.green;
const greenInverse = chalk.green.inverse;
const red = chalk.red;
const redInverse = chalk.red.bold.inverse;
const orange = chalk.keyword('orange');
const orangeInverse = chalk.keyword('orange').inverse;
const blue = chalk.blue;
const blueInverse = chalk.blue.inverse;

module.exports = options => {
	const defaultOption = {
		type: 'error',
		msg: 'You forgot to define all options',
		name: ''
	};

	const opts = { ...defaultOption, ...options };
	const { type, msg, name } = opts;

	const printName = name ? name : type.toUpperCase();

	if (type === 'success') {
		console.log(`\n${logSymbols.success} ${greenInverse(` ${printName} `)} ${green(msg)}\n`);
	}

	if (type === 'warning') {
		console.log(`\n${logSymbols.warning} ${orangeInverse(` ${printName} `)} ${orange(msg)}\n`);
	}

	if (type === 'info') {
		console.log(`\n${logSymbols.info} ${blueInverse(` ${printName} `)} ${blue(msg)}\n`);
	}

	if (type === 'error') {
		console.log(`\n${logSymbols.error} ${redInverse(` ${printName} `)} ${red(msg)}\n`);
	}
};
