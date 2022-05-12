# TODO Server

This is a simple API Server built using the `http` Node Module. It is meant to be used as a dummy Database in conjunction with the Todo React Frontend: <https://github.com/Culmid/react-todos>. However, it is just a generic API, so it can be used for any related applications.

## Usage

### Installation

```bash
npm install
```

### Start Server

```bash
npm start
```

### Start Dev Server (Monitor `server.js`)

```bash
npm run dev
```

## API Endpoints

### `GET` All Todos

```bash
GET <SERVER_URL>/api/todos
```

#### **Request Body**

None

#### **Response**

```JSON
[
  {
    "id": 0,
    "title": "Example",
    "isComplete": false,
    "background": "#000000",
    "color": "#ffffff"
  },
  ...
]
```

### `GET` Single Todo

```bash
GET <SERVER_URL>/api/todo/<id>
```

id (number): ID of requested Todo.

#### **Request Body**

None

#### **Response**

```JSON
{
  "id": 0,
  "title": "Example",
  "isComplete": false,
  "background": "#000000",
  "color": "#ffffff"
}
```

### `POST` Create Todo

```bash
POST <SERVER_URL>/api/todo
```

#### **Request Body**

```JSON
{
  "id": 0,
  "title": "Example",
  "isComplete": false,
  "background": "#000000",
  "color": "#ffffff"
}
```

#### **Response**

Status Code - 201:

```JSON
{
  "id": 0,
  "title": "Example",
  "isComplete": false,
  "background": "#000000",
  "color": "#ffffff"
}
```

### `PUT` Update Todo

```bash
PUT <SERVER_URL>/api/todo/<id>
```

id (number): ID of requested Todo, for update.

#### **Request Body**

```JSON
{
  "title": "Example",
  "isComplete": false,
  "background": "#000000",
  "color": "#ffffff"
}
```

#### **Response**

```JSON
{
  "id": 0,
  "title": "Example",
  "isComplete": false,
  "background": "#000000",
  "color": "#ffffff"
}
```

### `Delete` Todo

```bash
DELETE <SERVER_URL>/api/todo/<id>
```

id (number): ID of requested Todo, for deletion.

#### **Request Body**

None

#### **Response**

```JSON
{
  "message": "Todo <0> Deleted"
}
```

### Security

**Note:** This server uses an open-ended CORS policy, where any domain can request resources. This is not secure, by any means. It was used in this case, as this is a "toy problem". This header option must be altered for production usages.
