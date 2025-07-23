const express = require('express');
const crypto = require('crypto');
const morgan = require('morgan');
const fetch = require('node-fetch'); 
const app = express();
app.use(express.json());
app.use(morgan('combined'));
const urls = {};