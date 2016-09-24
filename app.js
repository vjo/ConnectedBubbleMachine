#!/usr/bin/env node
'use strict';

const program = require('commander'),
  request = require('request');

const PARTICLE_CONFIG = {
  'device_name': '',
  'access_token': ''
};

program
  .version('0.0.1')
  .option('-b, --bubble <control>', 'on or off', null)
  .parse(process.argv);

// Validating args
if (!process.argv.slice(2).length) {
  program.help();
}
if (!program.bubble) {
  console.log('Error: you must specify a bubble control value.');
  program.help();
}

function errorHandler(err, httpResponse, body) {
  if (err) {
    console.log(`Error: ${httpResponse.statusCode}`);
  }
};

function commandBubble(control, config) {
  const host = 'https://api.particle.io';
  const path = `/v1/devices/${config.device_name}/bubble?access_token=${config.access_token}`;

  request.post({
    url: `${host}${path}`,
    form: { bubble: control }
  }, errorHandler);
};

commandBubble(program.bubble, PARTICLE_CONFIG);
