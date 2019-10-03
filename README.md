## QuickStart

1. Install dependencies: `npm install`
2. Update `configs` in `config/index.js` file as you'd like

   - The following values are required to be updated
     - DATABASE
   - Checkout Config Section below for more information on how to update the config file

3. Run the server: `npm start`

## Testing

We are currently using mocha and chai for testing

### Running Test

- Before running a test, you should create a test database and update `DATABASE_URL` in `overrides.test` from config
- Run test by typing: `npm test`

## Configs

Configs are all set in `config/index.js` file. the `configs` variable contains all the config values that a user can manipulate. If you would like to override a certain config in certain environment, add those configs values with the same key as base `overrides` key.

- Example: To update `PORT` for `test` environment, add the following in `overrides.test`
  - `PORT: 8085`

#### Config Options

| KEY               | Description                                  |
| ----------------- | -------------------------------------------- |
| API_ROUTE         | Route prefix for api requests                |
| PORT              | Port for the server                          |
| SECRET_KEY        | Secret key used for generating hash for user |
| DATABASE          | Database info for your server. See below     |
| DIALECT           | Database Type. We recommend `postgres'       |
| ACCESS_KEY_ID     | AWS Access Key                               |
| SECRET_ACCESS_KEY | AWS Secret Key                               |
| ITEM_IMAGE_BUCKET | S3 Bucket used to store images               |

- Note about DATABASE:
  - You can either enter NAME, USER, PASSWORD, HOST for just URL for the database section
