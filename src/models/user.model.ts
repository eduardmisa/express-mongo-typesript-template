import {UserInterface} from "../interfaces/user.interface"

export class User implements UserInterface {
    _id: string
    firstname: string
    middlename: string
    lastname: string

    constructor (
        _id: string,
        firstname: string,
        middlename: string,
        lastname: string
    )
    {
        this._id = _id
        this.firstname = firstname
        this.middlename = middlename
        this.lastname = lastname
    }
}