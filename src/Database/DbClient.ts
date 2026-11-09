import oracledb from "oracledb";

export async function query<T = any>(sql: string, params: Record<string, any> = {}): Promise<T[]> {
  const conn = await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT,
  });
  try {
    const result = await conn.execute(sql, params, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    return (result.rows ?? []) as T[];
  } finally {
    await conn.close(); 
  }
}