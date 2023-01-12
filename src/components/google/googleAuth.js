import jwtDecode from "jwt-decode";


 const handleCredentialResponse = (response) => {
    var userCredentials = jwtDecode(response.credential)
    console.log(userCredentials)
    return userCredentials;
};

export default handleCredentialResponse;