# KKM_Backend
KKM Backend

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

![](https://github.com/raviolini/dev-snapshot/blob/main/kkm_backend/kosts.png)

#### GET `/kosts?q={name}`

Retrieves kost data with specified name.

![](https://github.com/raviolini/dev-snapshot/blob/main/kkm_backend/search.png)

<!--
#### POST `/kosts`

Creates new kost data.

#### DELETE `/kosts/:id`

Deletes kost with specified id.

#### PUT `/kosts/:id`

Update kost data with specified id.
-->
