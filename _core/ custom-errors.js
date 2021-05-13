export class SecretError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error secretsError');
        this.name = 'SecretError';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class DbConnectionError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error dbError');
        this.name = 'DbConnectionError';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class ItemNotFoundError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error itemNotFoundError');
        this.name = 'ItemNotFoundError';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class GenericError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error genericError');
        this.name = 'GenericError';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class BusinessRuleError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error businessRuleError');
        this.name = 'BusinessRuleError';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class ResourceNotAvailableError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error resourceNotAvailableError');
        this.name = 'ResourceNotAvailable';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class UserTokenError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error userTokenError');
        this.name = 'UserTokenError';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class MissingParamsError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error missingParamsError');
        this.name = 'MissingParamsError';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class EventError extends Error {
    constructor(message, options = {}) {
        super(message || ' Error eventError');
        this.name = 'EventError';
        this.options = options;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}
