const express = require('express');
const  app =  express();

const getCachedSensorReadings = require('./get-cached-sensor-readings');
const path = require('path');

app.use('/public', express.static(path.join(__dirname,'public')))

app.get('/temperature', function(req, res){
	res.send('<strong>' +getCachedSensorReadings.getTemperature().toFixed(1)
		 + '</strong>' + 'C')
})

app.get('/humidity', function(req, res){
	res.send('<strong>' + getCachedSensorReadings.getHumidity().toFixed(1)
		 + '</strong>' + '%')
})


app.listen(3000, function(){
	console.log('Server listening on port 3000');
});
