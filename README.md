# Remote Work Resources API

## Summary

This API provides a collection of remote work resources, such as job boards, freelance platforms, and other useful links. It is publicly available, read-only, and does not require authentication. The API is built with Node.js, Express, and MongoDB.

## Software Dependencies

- Node.js
- Express
- MongoDB
- Mongoose
- CORS (for Cross-Origin Resource Sharing)
- express-rate-limit (for basic rate limiting)

## Usage

This API currently supports only the GET method for fetching remote work resources.

Get All Remote Work Resources

**Endpoint:** **GET http://localhost:3000/api/remoteWorkResource/**

Example Response:

```json
[
  {
    "_id": "some_id_here",
    "name": "Website Name",
    "url": "http://website.com",
    "category": "Job Board",
    "description": "Description here",
    "region": "Global"
  }
  // ... more data
]
```

#### Query Parameters

- `category`: Filter by category (e.g., Job Board, Freelance).
- `region`: Filter by region (e.g., Global, USA).
- `sortBy`: Sort by field (e.g., name, category).

#### Example Usage

To get all resources in the "Job Board" category:

GET /api/remoteWorkResource?category=Job+Board

To get all resources available globally and sort them by name:

GET /api/remoteWorkResource?region=Global&sortBy=name

## Public Availability

This API is publicly available and read-only. It does not require any authentication or API keys. However, there is a rate limit in place to prevent abuse.
