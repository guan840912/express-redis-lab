import express from 'express';
import controller from '../controllers/sample';

const router = express.Router();
router.get('/ping', controller.sampleHealthCheck);
router.get('/hello', controller.sampleHelloWorld);

export = router;
