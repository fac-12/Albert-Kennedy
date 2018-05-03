class EmailNotFoundError extends Error {}

class TokenNotFoundError extends Error {}

class TokenExpiredError extends Error {}

module.exports = { EmailNotFoundError, TokenNotFoundError, TokenExpiredError };
