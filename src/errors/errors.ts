export class ClientError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, ClientError.prototype);
    }
}

export class EmailInUseError extends ClientError {
    constructor(message = "Email is already in use.") {
        super(message, 409); // 409 Conflict
        Object.setPrototypeOf(this, EmailInUseError.prototype);
    }
}


export class UserNotFoundError extends ClientError {
    constructor(message = "User Not Found") {
        super(message, 404);
        Object.setPrototypeOf(this, UserNotFoundError.prototype);
    }
}

export class InvalidCredentialsError extends ClientError {
    constructor(message = "Invalid email or password.") {
        super(message, 401); // 401 Unauthorized
        Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
    }
}

export class UserNotActiveError extends ClientError {
    constructor(message = "This account has been deactivated.") {
        super(message, 401); // 401 Unauthorized
        Object.setPrototypeOf(this, UserNotActiveError.prototype);
    }
}

export class EmailNotVerifiedError extends ClientError {
    public readonly canResend: boolean;

    constructor(message = "Email has not been verified.", canResend = false) {
        super(message, 403); // 403 Forbidden
        this.canResend = canResend;
        Object.setPrototypeOf(this, EmailNotVerifiedError.prototype);
    }
}