const express = require("express");
const TollGuruRouter = express.Router();
const axios = require('axios');


TollGuruRouter.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
TollGuruRouter.post('/api/tollguru/v1', async (req, res) => {
  console.log('Request Payload is:', req.body);
  try {
   

    const apiUrl = 'https://apis.tollguru.com/toll/v2/origin-destination-waypoints';
    const apiKey = 'NLFQj8MDN7bhHnHgpmPNLnBJQ8HTjdLQ';

    const response = await axios.post(apiUrl, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    res.status(response.status);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

TollGuruRouter.post('/api', async (req, res) => {
  console.log('Request Payload is:', req.body);
  try {
    const apiUrl = 'https://apis.tollguru.com/toll/v2/complete-polyline-from-mapping-service';
    const apiKey = 'NLFQj8MDN7bhHnHgpmPNLnBJQ8HTjdLQ';

    const response = await axios.post(apiUrl, {
      mapProvider: 'here',
      polyline: req.body.polyline,
      vehicle: {
        type: '2AxlesAuto',
        weight: {
          value: 20000,
          unit: 'pound',
        },
        height: {
          value: 7.5,
          unit: 'meter',
        },
        length: {
          value: 7.5,
          unit: 'meter',
        },
        axles: 4,
        emissionClass: 'euro_5',
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    res.status(response.status);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = TollGuruRouter;

