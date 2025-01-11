export type BlockedTables = {
  blocked_users: {
    Row: {
      id: string
      user_id: string | null
      blocked_user_id: string | null
      created_at: string
    }
    Insert: {
      id?: string
      user_id?: string | null
      blocked_user_id?: string | null
      created_at?: string
    }
    Update: {
      id?: string
      user_id?: string | null
      blocked_user_id?: string | null
      created_at?: string
    }
  }
}