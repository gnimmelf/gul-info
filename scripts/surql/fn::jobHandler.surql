DEFINE FUNCTION OVERWRITE fn::jobHandler($job: record<jobs>) {
	IF ($job.completed_at) {
		RETURN $job;
	}
	;

	LET $cooldown = (SELECT * FROM system:verification_email_resend_cooldown)[0];
	LET $prev_job = (SELECT *
		FROM jobs
		WHERE
			created_by = $auth.id
			AND key = $job.key
			AND completed_at != NONE
		ORDER BY completed_at DESC LIMIT 1)[0]
	;

	IF ($prev_job != NONE AND $prev_job.completed_at >= (time::now() - type::duration($cooldown.value))) {
		THROW 'Resend verification email - too soon!';
	}
	;

	LET $res = (
		IF ($job.key = 'resend_verification_email') {
			$res = fn::sendVerificationEmail($job.`value`);
			RETURN $res;
		}
	)
	;

	-- Flag job as done
	UPDATE $job.id SET completed_at = time::now();
	fn::log('jobHandler', {prev_job: $prev_job, job: $job, res: $res});
} PERMISSIONS NONE;