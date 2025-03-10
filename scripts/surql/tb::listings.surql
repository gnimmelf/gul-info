-- Define table
DEFINE TABLE listings SCHEMAFULL
PERMISSIONS
    FOR select
    	WHERE isActive = true OR owner = $auth.id
    FOR update
        WHERE owner = $auth.id
    FOR delete
        WHERE owner = $auth.id
    FOR create
        WHERE owner = $auth.id
;

-- Define fields
DEFINE FIELD OVERWRITE owner ON TABLE listings TYPE record<users>;
DEFINE FIELD OVERWRITE address ON TABLE listings TYPE string;
DEFINE FIELD OVERWRITE description ON TABLE listings TYPE string;
DEFINE FIELD OVERWRITE email ON TABLE listings TYPE string ASSERT string::is::email($value);
DEFINE FIELD OVERWRITE isActive ON TABLE listings TYPE bool;
DEFINE FIELD OVERWRITE links ON TABLE listings TYPE array<object>;
DEFINE FIELD OVERWRITE links.*.href ON TABLE listings TYPE string;
DEFINE FIELD OVERWRITE muncipiality ON TABLE listings TYPE string;
DEFINE FIELD OVERWRITE phone ON TABLE listings TYPE string;
DEFINE FIELD OVERWRITE tags ON TABLE listings TYPE array<record<tags>>;
DEFINE FIELD OVERWRITE title ON TABLE listings TYPE string;
DEFINE FIELD OVERWRITE zip ON TABLE listings TYPE string;