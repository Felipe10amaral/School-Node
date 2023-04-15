export class UsernameAlreadyExists extends Error {
  constructor() {
    super()
    this.message = 'email já está em uso'
  }
}
