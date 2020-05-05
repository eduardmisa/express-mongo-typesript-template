import express, {Request, Response, NextFunction} from "express";
var router = express.Router();
import {UserDatalayer} from "../datalayer/user.datalayer"
import {User} from "../models/user.model"
import {ObjectID} from "mongodb"


router.get('/',
 async function(req: Request, res: Response, next: NextFunction) {
  let result = await new UserDatalayer().list()
  if (result) res.send(result)
  else res.status(400).send("Server error")
})

router.get('/:slug',
 async function(req: Request, res: Response, next: NextFunction) {
  let result = await new UserDatalayer().get(new ObjectID(req.params.slug))
  if (result) res.send(result)
  else res.status(400).send("Server error")
})

router.post('/',
 async function(req: Request, res: Response, next: NextFunction) {
  let result = await new UserDatalayer().add(req.body as User)
  if (result) res.send(result)
  else res.status(400).send("Server error")
})

router.put('/:slug',
 async function(req: Request, res: Response, next: NextFunction) {
  let result = await new UserDatalayer().edit(new ObjectID(req.params.slug), req.body as User)
  if (result) res.send(result)
  else res.status(400).send("Server error")
})

router.delete('/:slug',
 async function(req: Request, res: Response, next: NextFunction) {
  let result = await new UserDatalayer().delete(new ObjectID(req.params.slug))
  if (result) res.send(result)
  else res.status(400).send("Server error")
})

module.exports = router;
