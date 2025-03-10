-- Define table
DEFINE TABLE OVERWRITE system SCHEMAFULL
PERMISSIONS
    FOR select, create, update, delete
        NONE
;

-- Define fields
DEFINE FIELD OVERWRITE value ON TABLE system TYPE any;

-- Create rows
CREATE system:auth0_client_id SET value = '';
CREATE system:auth0_client_secret SET value = '';
CREATE system:verification_email_resend_cooldown SET value = '2m';

