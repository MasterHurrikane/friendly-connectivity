import { Json } from './common';

export type AnalyticsTables = {
  event_analytics: {
    Row: {
      id: string
      user_id: string | null
      event_id: string
      attendees_count: number | null
      invites_sent: number | null
      rsvp_rate: number | null
      created_at: string | null
    }
    Insert: {
      id?: string
      user_id?: string | null
      event_id: string
      attendees_count?: number | null
      invites_sent?: number | null
      rsvp_rate?: number | null
      created_at?: string | null
    }
    Update: {
      id?: string
      user_id?: string | null
      event_id?: string
      attendees_count?: number | null
      invites_sent?: number | null
      rsvp_rate?: number | null
      created_at?: string | null
    }
  }
  user_activity_metrics: {
    Row: {
      id: string
      user_id: string | null
      metric_type: string
      metric_value: Json
      recorded_at: string | null
    }
    Insert: {
      id?: string
      user_id?: string | null
      metric_type: string
      metric_value: Json
      recorded_at?: string | null
    }
    Update: {
      id?: string
      user_id?: string | null
      metric_type?: string
      metric_value?: Json
      recorded_at?: string | null
    }
  }
}