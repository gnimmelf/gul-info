DEFINE FUNCTION OVERWRITE fn::resendVerificationEmail($auth0_user_id: string) -> any {
    LET $management_token = fn::getManagementToken();

    LET $payload = {
        user_id: $auth0_user_id
    };

    RETURN http::post('https://intergate.eu.auth0.com/api/v2/jobs/verification-email', $payload, {
        Authorization: 'Bearer ' + $management_token,
        "Content-Type": 'application/json'
    });
} PERMISSIONS FULL