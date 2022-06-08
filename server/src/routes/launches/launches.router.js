const express = require('express');

const {
  httpGetAllLunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require('./launches.controller.js');

const launcherRouter = express.Router();

launcherRouter.get('/', httpGetAllLunches);
launcherRouter.post('/', httpAddNewLaunch)
launcherRouter.delete('/:id', httpAbortLaunch)


module.exports = launcherRouter;