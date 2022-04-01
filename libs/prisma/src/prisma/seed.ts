import { OrganizerRole, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { hash } from 'argon2';
import faker from '@faker-js/faker';

const eventName = () => `${faker.word.adjective()} ${faker.word.noun()}`;

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      role: 'ADMIN',
      hash: await hash('password'),
    },
  });
  await prisma.user.createMany({
    data: [
      ...(await Promise.all(
        Array(10)
          .fill(null)
          .map(async () => ({
            email: faker.internet.email(),
            name: faker.name.findName(),
            hash: await hash('password'),
          }))
      )),
    ],
  });

  for (let i = 0; i < 5; i += 1) {
    await prisma.organizer.create({
      data: {
        name: faker.company.companyName(),
        events: {
          createMany: {
            data: Array(10)
              .fill(null)
              .map(() => ({
                title: eventName(),
                startDate: faker.date.future(),
              })),
          },
        },
      },
    });
  }
  const users = await prisma.user.findMany({ where: { role: 'USER' } });
  const organizers = await prisma.organizer.findMany();
  await Promise.all(
    users.map(({ id }, index) => {
      const organizerId = organizers[Math.floor(index / 2)].id;
      const role: OrganizerRole = (index / 2) % 1 ? 'ADMIN' : 'USER';
      return prisma.user.update({
        where: { id },
        data: {
          UsersInOrganizers: {
            create: { role, organizer: { connect: { id: organizerId } } },
          },
        },
      });
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
