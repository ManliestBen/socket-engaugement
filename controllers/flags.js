import { Flag } from "../models/flag.js"


function index(req, res) {
}

function addFlag(req, res) {
  console.log('add flag')
  console.log(req.params.id)
  Flag.create({student: req.params.id})
  .then(flag => {
    res.json(flag)
  })
}

export {
  index,
  addFlag
}