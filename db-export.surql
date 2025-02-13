-- ------------------------------
-- OPTION
-- ------------------------------

OPTION IMPORT;

-- ------------------------------
-- ACCESSES
-- ------------------------------

DEFINE ACCESS auth0 ON DATABASE TYPE RECORD WITH JWT URL 'https://intergate.eu.auth0.com/.well-known/jwks.json' AUTHENTICATE { IF ($token.aud.is_array() AND $token.aud CONTAINS 'https://surrealdb.com/' AND $token.aud CONTAINS 'https://intergate.eu.auth0.com/userinfo' AND $token['https://surrealdb.com/email_verified'] = true) {
LET $user = (SELECT * FROM users WHERE email = $token['https://surrealdb.com/email']);
IF (!$user) { CREATE user CONTENT { email: $token['https://surrealdb.com/email'], name: $token['https://surrealdb.com/name'] }; };
RETURN (SELECT * FROM users WHERE email = $token['https://surrealdb.com/email']);
}; } DURATION FOR TOKEN 1h, FOR SESSION NONE;
DEFINE ACCESS auth0_token ON DATABASE TYPE JWT URL 'https://example.com/.well-known/jwks.json' DURATION FOR SESSION NONE;

-- ------------------------------
-- FUNCTIONS
-- ------------------------------

DEFINE FUNCTION fn::createListingsRecord($data: object) {
LET $parsed = function($data) {
							let tName, tId;
							const { owner, tags, ...data} = arguments[0];
								
							[tName, tId] = owner.split(":");
		            		data.owner = new Record(tName, tId);
					
							data.tags = tags.map(idStr => {
								[tName, tId] = idStr.split(":");
								return new Record(tName, parseInt(tId) || tId);
							});
					
							return data;
						};
LET $res = (CREATE listings CONTENT $parsed RETURN AFTER);
RETURN $res;
} PERMISSIONS WHERE $auth;
DEFINE FUNCTION fn::unique_tags() {
LET $res = (SELECT tags FROM listings);
RETURN function($res) {
	    const [res] = arguments;

	    return res.map(x => x.tags).flatMap(x => x).reduce((acc, tag) => {
	        if (!acc.find(x => x.key == tag.key)) {
	            acc.push(tag)
	        }
	        return acc
	    }, [])
	};
} PERMISSIONS FULL;
DEFINE FUNCTION fn::updateListingsRecord($data: object) {
LET $parsed = function($data) {
					let tName, tId;
					const { id, tags, owner, ...data} = arguments[0];
			
					[tName, tId] = id.split(":");
					const idRec = new Record(tName, tId);
			
					[tName, tId] = owner.split(":");
					data.owner = new Record(tName, tId);
			
					data.tags = tags.map(idStr => {
						[tName, tId] = idStr.split(":");
						return new Record(tName, parseInt(tId) || tId);
					});
			
					return {
	                    id: idRec,
	                    data
	                };
				};
LET $res = (UPDATE $parsed.id CONTENT $parsed.data RETURN AFTER);
RETURN $res;
} PERMISSIONS WHERE $auth;

-- ------------------------------
-- TABLE: listings
-- ------------------------------

DEFINE TABLE listings TYPE NORMAL SCHEMAFULL PERMISSIONS FOR select WHERE isActive = true OR owner = $auth.id, FOR create, update, delete WHERE owner = $auth.id;

DEFINE FIELD address ON listings TYPE string PERMISSIONS FULL;
DEFINE FIELD description ON listings TYPE string PERMISSIONS FULL;
DEFINE FIELD email ON listings TYPE string ASSERT string::is::email($value) PERMISSIONS FULL;
DEFINE FIELD isActive ON listings TYPE bool PERMISSIONS FULL;
DEFINE FIELD links ON listings TYPE array<object> PERMISSIONS FULL;
DEFINE FIELD links[*] ON listings TYPE object PERMISSIONS FULL;
DEFINE FIELD links[*].href ON listings TYPE string PERMISSIONS FULL;
DEFINE FIELD muncipiality ON listings TYPE string PERMISSIONS FULL;
DEFINE FIELD owner ON listings TYPE record<users> PERMISSIONS FULL;
DEFINE FIELD phone ON listings TYPE string PERMISSIONS FULL;
DEFINE FIELD tags ON listings TYPE array<record<tags>> PERMISSIONS FULL;
DEFINE FIELD tags[*] ON listings TYPE record<tags> PERMISSIONS FULL;
DEFINE FIELD title ON listings TYPE string PERMISSIONS FULL;
DEFINE FIELD zip ON listings TYPE string PERMISSIONS FULL;



-- ------------------------------
-- TABLE DATA: listings
-- ------------------------------

INSERT [ { address: 'Nøkkefaret 20', description: 'Fargesetting og interiør', email: 'hei@ainalauritsen.no', id: listings:6kfegtjgf4iids3jrca0, isActive: true, links: [{ href: 'https://ainalauritsen.no' }, { href: 'https://instagram.no/ainalauritsen' }], muncipiality: 'Hurdal', owner: users:dfx1n70pqb8nhrwr1ggc, phone: '+4798765432', tags: [tags:design, tags:interior], title: 'Aina Lauritsen', zip: '2090' }, { address: 'Nøkkefaret 20', description: 'IT-tjenester og webutvikling', email: 'gnimmelf@gmail.com', id: listings:gqq4y81aogkwbtw9dsol, isActive: true, links: [{ href: 'https://skogutstyr.no' }], muncipiality: 'Hurdal', owner: users:dfx1n70pqb8nhrwr1ggc, phone: '90066044', tags: [tags:webutvikling], title: 'Intergate', zip: '2090' } ];

-- ------------------------------
-- TABLE: tags
-- ------------------------------

DEFINE TABLE tags TYPE NORMAL SCHEMAFULL PERMISSIONS FOR select FULL, FOR create, update, delete NONE;

DEFINE FIELD name ON tags TYPE string PERMISSIONS FULL;



-- ------------------------------
-- TABLE DATA: tags
-- ------------------------------

INSERT [ { id: tags:butikk, key: 'butikk', name: 'Butikk' }, { id: tags:design, key: 'design', name: 'Design' }, { id: tags:interior, key: 'interior', name: 'Interiør' }, { id: tags:overnatting, key: 'overnatting', name: 'Overnatting' }, { id: tags:servering, key: 'servering', name: 'Servering' }, { id: tags:vedsalg, key: 'vedsalg', name: 'Vedsalg' }, { id: tags:webutvikling, key: 'webutvikling', name: 'Web-utvikling' } ];

-- ------------------------------
-- TABLE: users
-- ------------------------------

DEFINE TABLE users TYPE NORMAL SCHEMAFULL PERMISSIONS FOR select, create, update, delete WHERE $access = 'auth0' AND id = $auth;

DEFINE FIELD email ON users TYPE string ASSERT string::is::email($value) PERMISSIONS FULL;
DEFINE FIELD name ON users TYPE string PERMISSIONS FULL;



-- ------------------------------
-- TABLE DATA: users
-- ------------------------------

INSERT [ { email: 'gnimmelf@gmail.com', id: users:dfx1n70pqb8nhrwr1ggc, name: 'Flemming' } ];

