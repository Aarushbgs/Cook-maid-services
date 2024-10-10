const router = require('express').Router();
const { sendMail ,ComplainMail } = require("../Controllers/Authmail");

router.post('/donationmail', sendMail);

router.post('/complain', ComplainMail);

module.exports = router;
