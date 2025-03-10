DEFINE FUNCTION OVERWRITE fn::createJob($key: string, $value: option<string>) {
    fn::log('create job', { key: $key, value: $value });
    LET $res = (
        IF ($key = 'resend_verification_email') {
            LET $payload = {
                key: $key,
                value: $auth.auth0_userId,
                created_by: $auth.id,
                created_at: time::now()
            };
            -- TODO! For som reason CREATE returns nothing. Why?
            LET $new_job = (CREATE jobs CONTENT $payload RETURN id);
            fn::log('resend_verification_email', {payload: $payload, new_job: $new_job});
            RETURN true;
        }
    )
    ;
    RETURN $res;
} PERMISSIONS WHERE $auth.id AND $access = "auth0_jwt";