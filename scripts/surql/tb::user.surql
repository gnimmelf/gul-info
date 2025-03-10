-- Define table
DEFINE TABLE OVERWRITE users SCHEMAFULL
  PERMISSIONS
  FOR select
    WHERE $access = "auth0_jwt" AND id = $auth.id
  FOR update, delete, create
    NONE
;

-- Define fields
DEFINE FIELD OVERWRITE auth0_userId ON users TYPE string;
DEFINE FIELD OVERWRITE email ON users TYPE string ASSERT string::is::email($value);
DEFINE FIELD OVERWRITE email_verified ON users TYPE bool;

-- Define index / unique constraints
DEFINE INDEX email ON users FIELDS email UNIQUE;
DEFINE INDEX auth0_userId ON users FIELDS auth0_userId UNIQUE;