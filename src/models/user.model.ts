import {z} from "zod";
import {userRole as UserRole, gender as Gender} from "../../generated/prisma";
import {differenceInYears} from "../utils/date"

export const UserRoleEnum = z.enum(UserRole);
export const GenderEnum = z.enum(Gender);
export const BloodTypeEnum = z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);

const LegalGuardianRelationEnum = z.enum(['Mother', 'Father']);
const LegalGuardianSchema = z.object({
    full_name: z.string().min(2, "Guardian full name required"),
    relation: LegalGuardianRelationEnum, // Only Mother or Father allowed
    email: z.email("Invalid email address"),
    gender: z.string("Gender"),
    date_of_birth: z.coerce.date(),
    place_of_birth: z.string().min(2, "Greater than 0"),
    phone_number: z.string().regex(/^(05|06|07)\d{8}$/, "Invalid guardian phone number"),
    password: z.string().min(8, "Guardian password must be at least 8 characters long"),

});


const UserBaseSchema = z.object({
    first_name: z.string().min(2, "First name must be at least 2 characters long"),
    last_name: z.string().min(2, "Last name must be at least 2 characters long"),
    email: z.email("Invalid email address"),
    role: UserRoleEnum.default('user'),
    date_of_birth: z.coerce.date(), // Use z.coerce.date() for simpler date conversion
    place_of_birth: z.string().min(1, "Place of birth is required"),
    gender: GenderEnum,
    address: z.string().min(5, "Address seems too short"),
    phone_number: z.string().regex(/^(05|06|07)\d{8}$/, "Invalid phone number"),
    blood_type: BloodTypeEnum.nullable(),
    picture_url: z.string().refine(
        (val) => {
            try {
                new URL(val)
                return true
            } catch {
                return false
            }
        },
        {message: "Invalid URL for pictures"}
    ).nullable().optional(),
    nationality: z.string().min(1).default('Algerie'),
    is_active: z.boolean().default(true),
});

export const CreateUserSchema = UserBaseSchema.extend({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    legal_guardian: LegalGuardianSchema.optional()
}).superRefine((data, ctx) => {
    const age = differenceInYears(new Date(), data.date_of_birth)
    if (age < 18 && !data.legal_guardian) {
        ctx.addIssue({
            code: "custom",
            message: "Legal guardian information is required for minors",
            path: ["legal_guardian"],
        });
    }

    if (age >= 18 && data.legal_guardian) {
        ctx.addIssue({
            code: "custom",
            message: "Legal guardian information is required for adults",
            path: ["legal_guardian"],
        })
    }
});

export const UserResponseSchema = UserBaseSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    medical_certificate_url: z.string().nullable(),
    attestation_url: z.string().nullable(),
}).omit({});

export const UpdateUserSchema = CreateUserSchema.omit({
    email: true,
    role: true,
    blood_type: true,
    gender: true
}).partial()


export const UserArrayResponseSchema = z.array(UserResponseSchema);


export type CreateUserDTO = z.infer<typeof CreateUserSchema>;
export type UserResponseDTO = z.infer<typeof UserResponseSchema>;
export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;

export type  CreateGuardianDTO = z.infer<typeof LegalGuardianSchema>;