import { openDB, DBSchema, IDBPDatabase } from "idb";

interface User {
  username: string;
  password: string;
  favourite: string[];
}

interface MyDB extends DBSchema {
  userStore: {
    key: string;
    value: User;
  };
}

export const initDB = async (): Promise<IDBPDatabase<MyDB>> => {
  const db = await openDB<MyDB>("my-database", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("userStore")) {
        db.createObjectStore("userStore", { keyPath: "username" });
      }
    },
  });
  return db;
};

export const addUser = async (
  db: IDBPDatabase<MyDB>,
  user: User
): Promise<void> => {
  const tx = db.transaction("userStore", "readwrite");
  const store = tx.objectStore("userStore");
  await store.add(user);
  await tx.done;
};

export const getUser = async (
  db: IDBPDatabase<MyDB>,
  username: string
): Promise<User | undefined> => {
  const tx = db.transaction("userStore");
  const store = tx.objectStore("userStore");
  return await store.get(username);
};

export const updateUser = async (
  db: IDBPDatabase<MyDB>,
  user: User
): Promise<void> => {
  const tx = db.transaction("userStore", "readwrite");
  const store = tx.objectStore("userStore");
  await store.put(user);
  await tx.done;
};

export const deleteUser = async (
  db: IDBPDatabase<MyDB>,
  username: string
): Promise<void> => {
  const tx = db.transaction("userStore", "readwrite");
  const store = tx.objectStore("userStore");
  await store.delete(username);
  await tx.done;
};
