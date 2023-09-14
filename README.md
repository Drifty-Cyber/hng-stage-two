# Person API Documentation

This documentation provides details on the CRUD (Create, Read, Update, Delete) endpoints available in the Person API. The API allows you to manage person records in the database.

## Table of Contents

1. [Create a New Person](#create-a-new-person)
2. [Retrieve a Person by ID or Name](#retrieve-a-person-by-id)
3. [Update a Person](#update-a-person)
4. [Delete a Person](#delete-a-person)

## Base URL

The base URL for all API endpoints is `https://your-api-domain.com/api`.

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
PATCH /person/person_id
PATCH /person/person_name
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
DELETE /person/person_id
DELETE /person/person_name
```


Response Example (204 No Content):

```json
{
  "status": "success",
  "data": null,
}

```
