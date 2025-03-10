-- Define access
DEFINE ACCESS OVERWRITE auth0_jwt ON DATABASE TYPE RECORD
    -- IMPORTANT! The name of the access method *must* match the
    -- claims set in the Auth0 PostLoginTrigger.
    WITH JWT URL "https://intergate.eu.auth0.com/.well-known/jwks.json"
    AUTHENTICATE {
        IF (
            $token.aud.is_array()
            AND $token.aud CONTAINS "https://surrealdb.com/"
            AND $token.aud CONTAINS "https://intergate.eu.auth0.com/userinfo"
        )
        -- Access-token verified
        {
            -- Get token claims
            LET $userId = $token['sub'];
            LET $email = $token['https://surrealdb.com/email'];
            LET $email_verified = $token['https://surrealdb.com/email_verified'];
            -- Get bb user
            LET $user = SELECT * FROM users WHERE auth0_userId = $userId;
            -- Do check & updates
            IF (!$user) {
                CREATE users CONTENT {
                    email: $email,
                    auth0_userId: $userId,
                    email_verified: $email_verified,
                };
            } ELSE {
                IF ($user.email != $email) {
                    UPDATE $user.id SET email = $email;
                };
                IF ($user.email_verified != $email_verified) {
                    UPDATE $user.id SET email_verified = $email_verified;
                };
            };
            -- We return the only user that matches the user_id claim found in the token.
            RETURN SELECT * FROM users WHERE auth0_userId = $userId;
        };
    };
;