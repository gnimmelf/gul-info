DEFINE FUNCTION OVERWRITE fn::getManagementToken() -> string {
	LET $cache = (SELECT * FROM token_cache:auth0_management_token)[0];
	LET $client_id = (SELECT * FROM system:auth0_client_id)[0];
	LET $client_secret = (SELECT * FROM system:auth0_client_secret)[0];
	IF $cache != NONE AND $cache.expiry > time::now()
		{
			RETURN $cache.token;
		}
	ELSE
		{

			LET $payload = {
				audience: 'https://intergate.eu.auth0.com/api/v2/',
				client_id: $client_id.`value`,
				client_secret: $client_secret.`value`,
				grant_type: 'client_credentials'
			};

			LET $response = http::post('https://intergate.eu.auth0.com/oauth/token', $payload, {
				"Content-Type": 'application/json'
			});

			LET $new_token = $response.access_token;

			LET $expiry = time::second(time::now()) + ($response.expires_in - 60);

			UPSERT token_cache:auth0_management_token SET token = $new_token, expiry = $expiry;

			RETURN $new_token;

	}
	;
} PERMISSIONS FULL