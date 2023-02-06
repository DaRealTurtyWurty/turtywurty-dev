import {Enumify} from "enumify";

export class ValidationResult extends Enumify {
    static OK = ValidationResult.valid("is valid");
    static TOO_SHORT = ValidationResult.invalid("must be at least 8 characters long");
    static TOO_LONG = ValidationResult.invalid("must be at most 64 characters long");
    static NO_UPPERCASE = ValidationResult.invalid("must contain at least one uppercase letter");
    static NO_LOWERCASE = ValidationResult.invalid("must contain at least one lowercase letter");
    static NO_LETTER = ValidationResult.invalid("must contain at least one letter");
    static NO_DIGIT = ValidationResult.invalid("must contain at least one number");
    static NO_SPECIAL = ValidationResult.invalid("must contain at least one special character");
    static INVALID_EMAIL = ValidationResult.invalid("is not a valid email address");
    static BLANK = ValidationResult.invalid("is required");
    static MISMATCH = ValidationResult.invalid("do not match");

    constructor(isValid, message) {
        super();
        this.isValid = isValid;
        this.message = message;
    }

    static valid(message) {
        return new ValidationResult(true, message);
    }

    static invalid(message) {
        return new ValidationResult(false, message);
    }
}

export function validatePassword(password) {
    // check that password is not blank
    if (password === null || password === undefined || password === "") {
        return ValidationResult.BLANK;
    }

    // check if password is too short
    if (password.length < 8) {
        return ValidationResult.TOO_SHORT;
    }

    // check if password is too long
    if (password.length > 64) {
        return ValidationResult.TOO_LONG;
    }

    // check if password contains at least one number
    if (!/\d/.test(password)) {
        return ValidationResult.NO_DIGIT;
    }

    // check if password contains at least one english letter
    if (!/[a-zA-Z]/.test(password)) {
        return ValidationResult.NO_LETTER;
    }

    // check if password contains at least one special character
    if (!/[!"£$%^&*()\\|\-_=+[{}\];:'@#~,<.>/?]/.test(password)) {
        return ValidationResult.NO_SPECIAL;
    }

    return ValidationResult.OK;
}

export function validateEmail(email) {
    // check that email is not blank
    if (email === null || email === undefined || email === "") {
        return ValidationResult.BLANK;
    }

    // check if email contains an @ symbol
    if (!email.includes("@")) {
        return ValidationResult.INVALID_EMAIL;
    }

    return ValidationResult.OK;
}

export function validatePasswordMatch(password, passwordConfirm) {
    // check that password is not blank
    if (password === null || password === undefined || password === "") {
        return ValidationResult.BLANK;
    }

    // check to see if passwords match
    if (password !== passwordConfirm) {
        return ValidationResult.MISMATCH;
    }

    return ValidationResult.OK;
}