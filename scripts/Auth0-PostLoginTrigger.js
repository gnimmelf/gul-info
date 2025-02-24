exports.onExecutePostLogin = async (event, api) => {
  // This value *must* match to the name of the SurrealDB access method
  api.accessToken.setCustomClaim(`https://surrealdb.com/ac`, "auth0_jwt");
  // The claims in this block are expected by SurrealDB.
  // These values should match your SurrealDB installation.
  api.accessToken.setCustomClaim(`https://surrealdb.com/ns`, "intergate");
  api.accessToken.setCustomClaim(`https://surrealdb.com/db`, "gul-info");
  // In this block, we will add additional claims which are not required by SurrealDB.
  api.accessToken.setCustomClaim(`https://surrealdb.com/email`, event.user.email);
  api.accessToken.setCustomClaim(`https://surrealdb.com/email_verified`, event.user.email_verified);
  api.accessToken.setCustomClaim(`https://surrealdb.com/user_id`, event.user.user_id);
};