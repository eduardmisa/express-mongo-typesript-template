import {ZDataLayer} from "./z.datalayer"
import {User} from "../models/user.model"

export class UserDatalayer extends ZDataLayer<User> {
  constructor() {
    super("user") // Collection name
  }
}