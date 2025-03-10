-- Define table
DEFINE TABLE OVERWRITE tags SCHEMAFULL
PERMISSIONS
    FOR select FULL
;

-- Define fields
DEFINE FIELD OVERWRITE name ON TABLE tags TYPE string;
