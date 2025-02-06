# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The user's first name (minimum length: 3 characters, required)
  - `lastname`: The user's last name (minimum length: 3 characters, optional)
- `email`: The user's email address (minimum length: 5 characters, required)
- `password`: The user's password (minimum length: 6 characters, required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

### Example Response

#### Success
```json
{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "first name atleast length is 3",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password length must be in 6 character",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Success
- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing the validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "first name atleast length is 3",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "password length must be in 6 character",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Example Request
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```
