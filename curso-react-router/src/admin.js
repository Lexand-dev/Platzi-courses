export const roles = {
  admin: {
    create: true,
    update: true,
    read: true,
    delete: true,
  },
  teacher: {
    create: true,
    update: false,
    read: true,
    delete: false,
  },
  student: {
    create: false,
    update: false,
    read: true,
    delete: false,
  },
};

export const users = [
  {
    name: "sonny",
    role: roles.admin,
  },
  {
    name: "fred",
    role: roles.teacher,
  },
];
