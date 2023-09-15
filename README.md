# Person API Documentation

This documentation provides details on the CRUD (Create, Read, Update, Delete) endpoints available in the Person API. The API allows you to manage person records in the database.

## Table of Contents

1. [Create a New Person](#create-a-new-person)
2. [Retrieve a Person by ID or Name](#retrieve-a-person-by-id)
3. [Update a Person](#update-a-person)
4. [Delete a Person](#delete-a-person)
5. [How to install](#how-to-install)
6. [How to run](#how-to-run)

## Base URL

The base URL for all API endpoints is `https://hng-stage-two-xrqn.onrender.com/api`.

## Create a New Person

**Endpoint:** `POST /api`

Create a new person by providing a JSON object with the following fields:

- `name` (string, required): The name of the person.
- `age` (number, required): The age of the person.

**Request Example:**

```json
POST /api
Content-Type: application/json


{
  "name": "John Doe",
  "age": 30
}
```

Response Example (201 Created):

```json
{
  "status": "success",
  "data": {
    "user": {
      "_id": "person_id",
      "name": "John Doe",
      "age": 30
    }
  }
}
```

## Get a Person

**Endpoint:** `GET /api/:param`

Retrieve details of a person by their ID or Name.

**Request Example:**

```json
GET /api/person_id
GET /api/person_name
```

Response Example (200 Ok):

```json
{
  "status": "success",
  "data": {
    "user": {
      "_id": "person_id",
      "name": "John Doe",
      "age": 30
    }
  }
}

```

## Update a Person

**Endpoint:** `PATCH /api/:param`

Modify details of an existing person by their ID or Name. Provide a JSON object with the fields you want to update.

**Request Example:**

```json
PATCH /api/person_id
PATCH /api/person_name
Content-Type: application/json

{
  "name": "Jane Doe",
  "age": 28
}
```

Response Example (200 Ok):

```json
{
  "status": "success",
  "data": {
    "user": {
      "_id": "person_id",
      "name": "Jane Doe",
      "age": 28
    }
  }
}

```

## Delete a Person

**Endpoint:** `DELETE /api/:param`

Remove a person by their ID or Name.

**Request Example:**

```json
DELETE /api/person_id
DELETE /api/person_name
```


Response Example (204 No Content):

```json
{
  "status": "success",
  "data": null,
}

```


# How to install

## Using Git (recommended)
1. Clone the project from github.

```
git clone https://github.com/Drifty-Cyber/hng-stage-two.git
```

## Using manual download ZIP

1. Download repository
2. Uncompress to your desired directory

## Install npm dependencies

```
npm install
```

## Setting up environments
1. You will find a file named `.env.example` on root directory of project.
2. Create a new file by copying and pasting the file and then renaming it to just `.env`

```
cp .env.example .env
```
3. The file `.env` is already ignored, so you never commit your credentials.
4. Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.

# How to run

## Running API server locally
```
npm start
```
You will know server is running by checking the output of the command `npm start`

# Author
Raphael Fadimu

# License
None
