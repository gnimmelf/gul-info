DEFINE TABLE OVERWRITE users SCHEMAFULL
  -- Authorized users can select, update, delete and create user records.
  -- Records that do not match the permissions will not be modified nor returned.
  PERMISSIONS FOR select, update, delete, create
  WHERE
    -- The access method must match the method that we will define.
    $access = "auth0"
    -- The record identifier must match that of the authenticated user.
    AND id = $auth
;

-- In this example, we will use the email as the primary identifier for a user.
DEFINE INDEX email ON users FIELDS email UNIQUE;
DEFINE FIELD email ON users TYPE string ASSERT string::is::email($value);
-- We define some other information present in the token that we want to store.
DEFINE FIELD name ON users TYPE string;

-- Define the public key to verify tokens issued by Auth0 for our application.
-- The name of the token should match the custom claim that we configured before.
DEFINE ACCESS OVERWRITE auth0 ON DATABASE TYPE RECORD
    WITH JWT URL "https://intergate.eu.auth0.com/.well-known/jwks.json"
    AUTHENTICATE {
        IF (
            $token.aud.is_array()
            AND $token.aud CONTAINS "https://surrealdb.com/"
            AND $token.aud CONTAINS "https://intergate.eu.auth0.com/userinfo"
            -- The email address in the token must be verified as belonging to the user.
            AND $token['https://surrealdb.com/email_verified'] = true
        ) {
            -- We return the only user that matches the email address claim found in the token.
            LET $user = SELECT * FROM users WHERE email = $token['https://surrealdb.com/email'];
            IF (!$user) {
                CREATE user CONTENT {
                    email: $token['https://surrealdb.com/email'],
                    name: $token['https://surrealdb.com/name'],
                }
            };
            RETURN SELECT * FROM users WHERE email = $token['https://surrealdb.com/email'];
        };
    }
;