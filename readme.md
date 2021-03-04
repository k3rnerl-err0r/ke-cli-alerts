<p align="center">
  <img src="https://user-images.githubusercontent.com/24629158/110036254-bc771d80-7d0a-11eb-9ab5-2453953395e3.png">
</p>

<h3 align="center">
  Cross platform CLI Alerts with colours and colored symbols for success, info, warning and error. It works on Mac OS, GNU/Linux and Windows.
</h3>

<hr>

## ke-cli-alerts
<hr>

### Install
```javascript
npm install ke-cli-alerts
```

### Usage
```javascript
const alert = require('ke-cli-alerts');
 
// Provide the type, msg, options.
alert({type: 'success', msg: 'All done!'});
// Prints: ✔ SUCCESS All done!

alert({type: 'info', msg: 'There is an update available'});
// Prints: ℹ INFO There is an update available

alert({type: 'warning', msg: `You didn't add something!`});
// Prints: ⚠ WARNING You didn't add something!
 
alert({type: 'error', msg: 'Something went wrong!'});
// Prints: ✖ ERROR Something went wrong!
```

You can also pass the `name` if you want to change the label name:

```javascript
alert({type: 'success', msg: 'Everything finished!', name: 'DONE'});
// Prints: ✔ DONE Everything finished!
```

### API
alert(options)

➜ **options**
```javascript
Type: object
Default: {}
```

You can specify the options below.

➜ **type**
```javascript
Type: string
Default: 'error'
```

➜ **msg**
```javascript
Type: string
Default: 'You forgot to define all options.' // (Error message)
```

➜ **name**
```javascript
Type: string
Default: '' // (Empty string)
```
