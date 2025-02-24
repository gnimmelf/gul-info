DEFINE TABLE OVERWRITE users SCHEMAFULL
  PERMISSIONS FOR select, update, delete, create
  WHERE
    $access = "auth0_jwt" AND id = $auth.id
;

DEFINE FIELD auth0_userId ON users TYPE string;
DEFINE FIELD email ON users TYPE string ASSERT string::is::email($value);
// Index / unique
DEFINE INDEX email ON users FIELDS email UNIQUE;
DEFINE INDEX auth0_userId ON users FIELDS auth0_userId UNIQUE;


-- IMPORTANT! The name of the access method *must* match the
-- claims set in the Auth0 PostLoginTrigger.
DEFINE ACCESS OVERWRITE auth0_jwt ON DATABASE TYPE RECORD
    WITH JWT URL "https://intergate.eu.auth0.com/.well-known/jwks.json"
    AUTHENTICATE {
        IF (
            $token.aud.is_array()
            AND $token.aud CONTAINS "https://surrealdb.com/"
            AND $token.aud CONTAINS "https://intergate.eu.auth0.com/userinfo"
            AND $token['https://surrealdb.com/email_verified'] = true
        ) {
            -- Access-token verified
            LET $userId = $token['https://surrealdb.com/user_id'];
            LET $email = $token['https://surrealdb.com/email'];

            LET $user = SELECT * FROM users WHERE auth0_userId = $userId;
            IF (!$user) {
                CREATE users CONTENT {
                    email: $email,
                    auth0_userId: $userId,
                };
            } ELSE {
                IF ($user.email != $email) THEN UPDATE $user.id SET email = $email; END;
            };
            -- We return the only user that matches the user_id claim found in the token.
            RETURN SELECT * FROM users WHERE auth0_userId = $userId;
        };
    };
;