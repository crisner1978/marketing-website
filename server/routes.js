const express = require('express')

module.exports = function getRoutes() {
  const router = express.Router();

  router.post('/contact-request', createContactRequest)
  
  return router;
}

// Create Post to MONGODB database
async function createContactRequest(req, res) {
  
}