const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router();

dishRouter.use(bodyParser.json())

//General
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next()
    })
    .get((req, res, next) => {
        res.end('Will Send all the dishes to you');
    })
    .post((req, res, next) => {
        res.end(`Will add the dish ${req.body.name} with details ${req.body.description}`)
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end(`PUT OPERATION NOT SUPPORTED ON /dishes`)
    })
    .delete((req, res, next) => {
        res.end(`Deleting all the dishes!!!`)
    })

//Specific
dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next()
    })
    .get((req, res, next) => {
        res.end(`Will Send details of the dish: ${req.params.dishId} to you`);
    })
    .post((req, res, next) => {
        res.statusCode = 403
        res.end(`Push OPERATION NOT SUPPORTED ON /dishes/${req.params.dishId}`)
    })
    .put((req, res, next) => {
        res.write(`Updating the dish ${req.params.dishId} \n`)
        res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`)
    })
    .delete((req, res, next) => {
        res.end(`Deleting dish ${req.params.dishId}`)
    })

exports.router = dishRouter