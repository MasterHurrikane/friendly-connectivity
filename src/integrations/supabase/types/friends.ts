import { Database } from './common';

export type FriendTables = {
  friends: {
    Row: {
      id: string
      user_id: string
      friend_id: string
      status: string
      relationship_type: string | null
      friendship_date: string | null
      last_interaction: string | null
      interaction_count: number | null
      created_at: string | null
      engagement_score: number | null
      response_time_avg: unknown | null
    }
    Insert: {
      id?: string
      user_id: string
      friend_id: string
      status?: string
      relationship_type?: string | null
      friendship_date?: string | null
      last_interaction?: string | null
      interaction_count?: number | null
      created_at?: string | null
      engagement_score?: number | null
      response_time_avg?: unknown | null
    }
    Update: {
      id?: string
      user_id?: string
      friend_id?: string
      status?: string
      relationship_type?: string | null
      friendship_date?: string | null
      last_interaction?: string | null
      interaction_count?: number | null
      created_at?: string | null
      engagement_score?: number | null
      response_time_avg?: unknown | null
    }
  }
  friend_groups: {
    Row: {
      id: string
      user_id: string
      name: string
      created_at: string
    }
    Insert: {
      id?: string
      user_id: string
      name: string
      created_at?: string
    }
    Update: {
      id?: string
      user_id?: string
      name?: string
      created_at?: string
    }
  }
  friend_group_members: {
    Row: {
      id: string
      group_id: string
      friend_id: string
      created_at: string
    }
    Insert: {
      id?: string
      group_id: string
      friend_id: string
      created_at?: string
    }
    Update: {
      id?: string
      group_id?: string
      friend_id?: string
      created_at?: string
    }
  }
}