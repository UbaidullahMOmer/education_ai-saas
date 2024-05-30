import { auth } from "@clerk/nextjs/server";

import { MAX_COUNTS_FREE, PRO_CREDITS } from "@/constants/db-constants";
import prismadb from "./prismadb";

export const increaseAPiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });
  if (!userApiLimit || userApiLimit.count < MAX_COUNTS_FREE || userApiLimit.count < PRO_CREDITS) {
    return true;
  } else {
    return false;
  }
};

export const checkProApiLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });
  if (!userApiLimit || userApiLimit.count < PRO_CREDITS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });
  if (!userApiLimit) return 0;
  return userApiLimit.count;
};
