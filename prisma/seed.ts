import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const args = [...new Array(1000).keys()].map(
  (key): Prisma.UserCreateInput => ({
    name: `name_${key}`,
    email: `email${key}@example.com`,
  })
);

const insert = async () => {
  for (const arg of args) {
    await client.user.create({ data: arg });
  }
};

insert();
