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

##### Response

JSON object containing all kosts data.

##### Request

None

#### GET `/kosts/:id`

Retrieves kost data with specified id.

##### Response

JSON object containing kost data with specified id

##### Request

###### Path Params

`id`: Id of referred kost object.

#### POST `/kosts`

Creates new kost data.

##### Request

###### Body

A JSON object containing the new kost data.

##### Response

###### 204 No Content

Insert successful

#### DELETE `/kosts/:id`

Deletes kost with specified id.

##### Request

###### Path Params

`id`: Id of referred kost object.

##### Response

###### 204 No Content

Deletion successful

#### PUT `/kosts/:id`

Update kost data with specified id.

##### Request

###### Path Params

`id`: Id of referred kost object.

###### Body

A JSON object containing the new kost data. Partial modification is not supported.

##### Response

###### 204 No Content

Replacement successful.
