-- Define the listings table
DEFINE TABLE listings SCHEMAFULL
PERMISSIONS
    FOR select
    	WHERE isActive = true || owner = $auth.id

-- Define fields for the listings table
DEFINE FIELD owner ON TABLE listings TYPE record<users>;
DEFINE FIELD address ON TABLE listings TYPE string;
DEFINE FIELD description ON TABLE listings TYPE string;
DEFINE FIELD email ON TABLE listings TYPE string ASSERT string::is::email($value);
DEFINE FIELD isActive ON TABLE listings TYPE bool;
DEFINE FIELD links ON TABLE listings TYPE array<object>;
DEFINE FIELD links.*.href ON TABLE listings TYPE string;
DEFINE FIELD muncipiality ON TABLE listings TYPE string;
DEFINE FIELD phone ON TABLE listings TYPE string;
DEFINE FIELD tags ON TABLE listings TYPE array<record<tags>>;
DEFINE FIELD title ON TABLE listings TYPE string;
DEFINE FIELD zip ON TABLE listings TYPE string;