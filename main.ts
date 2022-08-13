import "./setup"; // setup OpenTracing

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const query = async () => {
  // run dummy queries
  await client.user.findMany({ where: { email: { contains: "1" } } });
  await client.user.findMany({ where: { email: { contains: "10" } } });
  await client.user.findMany({ where: { email: { contains: "100" } } });
};

query();
