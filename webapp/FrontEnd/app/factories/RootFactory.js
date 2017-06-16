app.factory('RootFactory', ($http, apiUrl) => { 
  
  let secure_token = null;

  return {
      getApiRoot () {
        return apiUrl;
      },
      setToken (token) {
        secure_token = token
      },
      getToken () {
        return secure_token;
      }
    }
});