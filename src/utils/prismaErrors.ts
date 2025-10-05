import {Prisma} from "../../generated/prisma";

/**
 * A TypeScript Type Guard to check for Prisma's unique constraint violation.
 * @param error The error caught in a catch block (usually of type `unknown`).
 * @param field The database field that should be unique (e.g., 'email').
 * @returns True if the error is a P2002 error for the specified field.
 */
export function isUniqueConstraintError(
    error: unknown,
    field: string
): error is Prisma.PrismaClientKnownRequestError {
    return (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002" &&
        (error.meta?.target as string[])?.includes(field)
    );
}

/**
 * Type guard for Prisma P2025 errors:
 * "An operation failed because it depends on one or more records that were required but not found."
 * Common when updating or deleting a non-existent record.
 */
export function isOperationFailedError(
    error: unknown
): error is Prisma.PrismaClientKnownRequestError & { code: "P2025" } {
    return (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
    );
}
