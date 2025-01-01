-- Define the tags table
DEFINE TABLE OVERWRITE tags SCHEMAFULL PERMISSIONS FOR select FULL;

-- Define fields for the tags table
DEFINE FIELD key ON TABLE tags TYPE string;
DEFINE FIELD name ON TABLE tags TYPE string;
