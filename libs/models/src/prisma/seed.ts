import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { hash } from 'argon2';

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      hash: await hash('password'),
      events: {
        create: {
          title: 'Check out Prisma with Next.js',
          published: true,
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      hash: await hash('password'),
      events: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            published: true,
          },
          {
            title: 'Follow Nexus on Twitter',
            published: true,
          },
        ],
      },
    },
  });
  console.log({ alice, bob });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
