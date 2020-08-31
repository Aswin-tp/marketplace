import axios from 'axios'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

executeAuthenticationService(username, password) {
    return axios.post('http://localhost:8080/authenticate',
    {
      username,
      password
    })
}

createUser(username, userDetails){
  //console.log("executing create user for"+userDetails)
  return axios.post('http://localhost:8080/save', userDetails);
}

createAuthToken(token) {
    //console.log("create token")
    return 'Bearer '+ token

}

registerSuccessfulLogin (username, token) {
    //console.log('registerSuccessfulLogin')
sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
this.setupAxiosInterceptor(this.createAuthToken(token))
}

logout (username) {
  //console.log("logging out");
  sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
}


isUserLoggedIn () {
  let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  if (user === null) return false
  return true
}

getLoggedinUsername() {
  let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  if (user === null) return ''
  return user
}

setupAxiosInterceptor(token) {
  axios.interceptors.request.use(
    (config) => {
        if(this.isUserLoggedIn()) {
          config.headers.authorization = token
      }
      return config
    }
  )
}

}

export default new AuthenticationService()