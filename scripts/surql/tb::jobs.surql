-- Define table
DEFINE TABLE OVERWRITE jobs SCHEMAFULL
PERMISSIONS
    FOR select, update, delete
        NONE
    FOR create
        WHERE $auth.id AND $access = "auth0_jwt"
;

-- Define fields
DEFINE FIELD OVERWRITE key ON TABLE jobs TYPE string;
DEFINE FIELD OVERWRITE `value` ON TABLE jobs TYPE any;
DEFINE FIELD OVERWRITE created_by ON TABLE jobs TYPE record<users>;
DEFINE FIELD OVERWRITE created_at ON TABLE jobs TYPE datetime;
DEFINE FIELD OVERWRITE completed_at ON TABLE jobs TYPE option<datetime>;

-- Define events
DEFINE EVENT OVERWRITE jobs_handler_event ON TABLE jobs
WHEN $before == NONE
THEN fn::jobHandler($after.id);