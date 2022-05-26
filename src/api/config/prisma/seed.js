import pkg from '@prisma/client';
import { user } from './users.js';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
async function main() {
    for(let users of user) {
        await prisma.user.create({
            data: users
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect();
})