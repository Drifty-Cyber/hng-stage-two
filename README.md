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

Response Example (201 Created):

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

Retrieve details of a person by their ID.

**Request Example:**

```json
GET /api/person_id
GET /api/person_name


Response Example (200 Ok):

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
