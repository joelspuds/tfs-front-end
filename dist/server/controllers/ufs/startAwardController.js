'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saIndexGet = saIndexGet;
exports.saIndexPost = saIndexPost;
exports.saStartConfirmationGet = saStartConfirmationGet;
exports.saStartConfirmationPost = saStartConfirmationPost;
exports.saOverviewConfirmedGet = saOverviewConfirmedGet;
exports.saStartConfirmDoneGet = saStartConfirmDoneGet;
let generalData = require('./data');
let genericFunctions = require('./generic');

const prototypeData = {
  userName: 'Rohindra Khatra',
  awardName: 'AWA184: Environmental research grants 2022',
  currentEndDate: '30 October 2023'
};

let savedSession;

// ************************************************************************
//
//        index
//
// ************************************************************************
function saIndexGet(req, res) {
  let viewData;

  let clearSession = req.param('clearSession');
  if (clearSession === 'true') {
    req.session.destroy();
  }

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/start-award/index', viewData);
}

function saIndexPost(req, res) {
  const {} = req.body;

  req.session.organisation = 'University of Wales';
  req.session.userName = 'Linda Squires';

  let targetURL;
  targetURL = '/prototypes/post-decision/email';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        start confirmation
//
// ************************************************************************
function saStartConfirmationGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/start-award/start-confirmation', viewData);
}

function saStartConfirmationPost(req, res) {
  const {} = req.body;

  let targetURL;
  targetURL = '/prototypes/start-award/award-overview-confirmed';
  return res.redirect(targetURL);
}

// ************************************************************************
//
//        award overview confirmed
//
// ************************************************************************
function saOverviewConfirmedGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/start-award/award-overview-confirmed', viewData);
}

// ************************************************************************
//
//        start sonfirm confirmed
//
// ************************************************************************
function saStartConfirmDoneGet(req, res) {
  let viewData;

  let allData = req.session;
  viewData = {
    allData,
    prototypeData
  };

  return res.render('prototypes/start-award/start-confirmation-done', viewData);
}