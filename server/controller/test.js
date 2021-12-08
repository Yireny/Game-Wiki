const TEST = require('../models/test')

const test = async (req, res) => {
  const data = await TEST.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

module.exports = test