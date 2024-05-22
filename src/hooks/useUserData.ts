import { useCallback, useEffect, useState } from "react";
import {
  initDB,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} from "@/library/indexedDB";
import { DBSchema, IDBPDatabase } from "idb";

export interface User {
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

export const useUserData = () => {
  const [db, setDb] = useState<IDBPDatabase<MyDB> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeDB = async () => {
      try {
        const database = await initDB();
        setDb(database);
      } catch (err) {
        setError("Failed to initialize database");
      }
    };
    initializeDB();
  }, []);

  const createUser = async (userData: User) => {
    if (db) {
      console.log("Creating user:", userData);
      await addUser(db, userData);
      console.log("User created successfully");
      return userData;
    }
  };

  const fetchUser = useCallback(
    async (username: string) => {
      if (db) {
        console.log("Fetching user with username:", username);
        const fetchedUser = await getUser(db, username);
        console.log("Fetched user:", username);
        return fetchedUser || null;
      }
      return null;
    },
    [db]
  );

  const modifyUser = async (userData: User) => {
    if (db) {
      try {
        setLoading(true);
        await updateUser(db, userData);
        return userData;
      } catch (err) {
        setError("Failed to update user");
      } finally {
        setLoading(false);
      }
    }
  };

  const removeUser = async (username: string) => {
    if (db) {
      try {
        setLoading(true);
        await deleteUser(db, username);
        return null;
      } catch (err) {
        setError("Failed to delete user");
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    loading,
    error,
    createUser,
    fetchUser,
    modifyUser,
    removeUser,
  };
};
