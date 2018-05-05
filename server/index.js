const express = require('express');
const  app =  express();

const getCacheSensorReadings = require('./get-cached-sensor-readings');
const path = require('path');

app.use('/public', express.static(path.join(__dirname,'public')))

app.get('/temperature', function(req, res){
	res.send('<strong>' +
		getCacheSensorReadings.getTemperature().toFixed(1)
		 + '</strong>' + 'C')
})

app.get('/humidity', function(req, res){
	res.send(getCacheSensorReadings.getHumidity().toFixed(1) + '%')
})


app.listen(3000, function(){
	console.log('Server listening on port 3000');
});
