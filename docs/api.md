# API Documentation

## Kosts

### Data Schema

| **Key**           | **Value** | **Description**                                                               |
|-------------------|-----------|-------------------------------------------------------------------------------|
| name              | String    | Name of the kost (max. 255 chars)                                             |
| description       | String    | Description of the kost (max. 1000 chars)                                     |
| address           | String    | Address of the kost (max. 1000 chars)                                         |
| imageUrl          | String    | Url of the image (max. 300 chars)                                             |
| genderRestriction | String    | Gender restriction of the kost (can be "Male", "Female", and "Not Restricted" |
| totalBedrooms     | Number    | Number of total bedrooms in the kost                                          |
| availableBedrooms | Number    | Number of available bedrooms in the kost                                      |
| price             | Number    | Price of the kost per month                                                   |
| contact           | String    | Kost's owner contacts                                                         |

### Endpoints

#### GET `/kosts`

Retrieves all kosts.

#### GET `/kosts/:id`

Retrieves kost data with specified id.

#### GET `/kosts?q={name}`

Search for kosts with specified name.

#### POST `/kosts`

Creates new kost data.

#### DELETE `/kosts/:id`

Deletes kost with specified id.

#### PUT `/kosts/:id`

Update kost data with specified id.

### Usage Example

#### Querying for posts

##### Searching posts by name

Request:

`GET 127.0.0.1:8080/kosts?q=Kost%20Pak%20%Bambang`

Response:

```json
[
  {
      "name": "Kost Pak Bambang",
      "description": "",
      "address": "Jl. Danau Maninjau X",
      "genderRestriction": "Male",
      "contact": "pakbambang@gmail.com",
      "price": 1600000,
      "totalBedrooms": 5,
      "availableBedrooms": 2,
      "imageUrl": "https://example.com/kost.png"
  }
]
```

##### Get post by id

Request:

`GET 127.0.0.1:8080/kosts/620b69d9a7aae5932610dd27`

##### Get all kosts

Request:

`GET 127.0.0.1:8080/kosts`

#### Creating a new kost

Request:

`POST 127.0.0.1:8080/kosts`

```json
{
    "name": "Kost Pak Budi",
    "description": "",
    "address": "Jl. Danau Maninjau X",
    "genderRestriction": "Male",
    "contact": "pakbudiman@gmail.com",
    "price": 1600000,
    "totalBedrooms": 5,
    "availableBedrooms": 2,
    "imageUrl": "https://example.com/kost.png"
}
```

Response:

`204 No Content`

#### Deleting a post

Request:

`DELETE 127.0.0.1:8080/kosts/620b69d9a7aae5932610dd27`

Response:

`204 No Content`

#### Updating a post

Request:

`PUT 127.0.0.1:8080/kosts/620b69d9a7aae5932610dd27`

```json
{
    "name": "Kost Pak Bambang",
    "description": "",
    "address": "Jl. Danau Maninjau X",
    "genderRestriction": "Male",
    "contact": "pakbambang@gmail.com",
    "price": 1600000,
    "totalBedrooms": 5,
    "availableBedrooms": 2,
    "imageUrl": "https://example.com/kost.png"
}
```

Response:

`204 No Content`
