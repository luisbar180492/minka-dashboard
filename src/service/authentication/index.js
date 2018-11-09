export default class Authentication {

  constructor(authentication) {
    this.authentication = authentication;
  }

  signIn(email, password) {
    return this.authentication
      .signInWithEmailAndPassword(email, password)
      .then((data) => data)
      .catch((error) => {throw error});
  }
}
