/*
POST
Login (with 2FA)
https://api.nukleus.cloud/api/auth/login2fa
Login to the system using username and password. This will return only a success message but no token. Instead it will trigger an email to the account containing a 2FA Code that needs to be sent back using the "Confirm 2FA" endpoint below.

This endpoint also has an optional "client" parameter that is strongly encouraged. Specifying a client will cause the token that will be returned by "Confirm 2FA" endpoint to be restricted to a single client. No other clients can be accessed using it. Only omit this parameter if you really need elevated access privileges across all clients. The user will be told about this in the 2FA email so can decide to give full access or not.

Body
raw (json)
json
{
    "account": "<email address>",
    "password": "<password>",
    "client": "<client id>"
}

var raw = "{\n    \"account\": \"<email address>\",\n    \"password\": \"<password>\",\n    \"client\": \"<client id>\"\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nukleus.cloud/api/auth/login2fa", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

function page() {
  return (
    <div>
      login2fa page!
    </div>
  )
}

export default page
