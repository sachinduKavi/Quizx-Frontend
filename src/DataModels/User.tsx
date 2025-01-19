interface UserInterface {
    id?: number
    name?: string
    email?: string
    password?: string
    username?: string
    phoneNumber?: string
}

class User implements UserInterface {
    id?: number
    name?: string
    email?: string
    password?: string
    username?: string
    phoneNumber?: string

    constructor(user: UserInterface) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.password = user.password
        this.username = user.username
        this.phoneNumber = user.phoneNumber
    }

    extractJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            username: this.username,
            phoneNumber: this.phoneNumber
        }
    }

}


export default User
export {type UserInterface}
