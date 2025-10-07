import { Prisma, Gender, RelationshipType, UserRole } from '../../generated/prisma';
import { CreateGuardianDTO } from '../models/user.model';
import bcrypt from 'bcrypt';

export const guardianService = {
    async processGuardian(
        tx: Prisma.TransactionClient,
        guardianData: CreateGuardianDTO,
        player: { id: number; address: string | null }
    ): Promise<void> {
        const { password: guardianPassword, relation, ...restOfGuardianData } = guardianData;

        const guardianUser = await tx.users.upsert({
            where: { email: guardianData.email },
            update: {},
            create: {
                ...restOfGuardianData,
                password_hash: await bcrypt.hash(guardianPassword, 10),
                role: UserRole.parent,
                address: player.address, // Inherit address from the player
                gender: guardianData.gender as Gender,
            },
        });

        await tx.playerRelationships.create({
            data: {
                player_id: player.id,
                legal_guardian_id: guardianUser.id,
                relationship_type: relation as RelationshipType,
            },
        });
    },
};
