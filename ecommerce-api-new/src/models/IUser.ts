import { RowDataPacket } from "mysql2"

export interface IUser extends RowDataPacket {
  id: number | null 
  username: string 
  password: string
  created_at: string
}