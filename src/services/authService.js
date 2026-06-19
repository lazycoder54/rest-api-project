import pool from "../config/db.js";

export const findUserByEmail = async (email) => {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return rows[0];
};

export const createUser = async (
  username,
  email,
  password,
  address
) => {
  const [result] = await pool.query(
    `INSERT INTO users
     (username,email,password,address)
     VALUES (?,?,?,?)`,
    [username, email, password, address]
  );

  return result.insertId;
};

export const getUserById = async (id) => {
  const [rows] = await pool.query(
    `SELECT id,
            username,
            email,
            address,
            created_at
     FROM users
     WHERE id=?`,
    [id]
  );

  return rows[0];
};