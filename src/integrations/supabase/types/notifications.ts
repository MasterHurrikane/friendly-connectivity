export type NotificationTables = {
  notification_preferences: {
    Row: {
      id: string
      user_id: string | null
      type: string
      enabled: boolean | null
      frequency: string | null
      delivery_method: string | null
      created_at: string
    }
    Insert: {
      id?: string
      user_id?: string | null
      type: string
      enabled?: boolean | null
      frequency?: string | null
      delivery_method?: string | null
      created_at?: string
    }
    Update: {
      id?: string
      user_id?: string | null
      type?: string
      enabled?: boolean | null
      frequency?: string | null
      delivery_method?: string | null
      created_at?: string
    }
  }
}