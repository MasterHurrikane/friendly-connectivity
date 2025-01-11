import { Json } from './common';

export type ProfileTables = {
  profiles: {
    Row: {
      id: string
      first_name: string | null
      last_name: string | null
      phone_number: string | null
      profile_picture_url: string | null
      language: string | null
      theme: string | null
      accent_color: string | null
      visibility: string | null
      activity_status: boolean | null
      date_format: string | null
      time_format: string | null
      currency: string | null
      created_at: string
      updated_at: string
      bio: string | null
      interests: string[] | null
      hobbies: string[] | null
      milestones: Json | null
      favorite_food_types: string[] | null
      favorite_music_genres: string[] | null
      favorite_colors: string[] | null
    }
    Insert: {
      id: string
      first_name?: string | null
      last_name?: string | null
      phone_number?: string | null
      profile_picture_url?: string | null
      language?: string | null
      theme?: string | null
      accent_color?: string | null
      visibility?: string | null
      activity_status?: boolean | null
      date_format?: string | null
      time_format?: string | null
      currency?: string | null
      created_at?: string
      updated_at?: string
      bio?: string | null
      interests?: string[] | null
      hobbies?: string[] | null
      milestones?: Json | null
      favorite_food_types?: string[] | null
      favorite_music_genres?: string[] | null
      favorite_colors?: string[] | null
    }
    Update: {
      id?: string
      first_name?: string | null
      last_name?: string | null
      phone_number?: string | null
      profile_picture_url?: string | null
      language?: string | null
      theme?: string | null
      accent_color?: string | null
      visibility?: string | null
      activity_status?: boolean | null
      date_format?: string | null
      time_format?: string | null
      currency?: string | null
      created_at?: string
      updated_at?: string
      bio?: string | null
      interests?: string[] | null
      hobbies?: string[] | null
      milestones?: Json | null
      favorite_food_types?: string[] | null
      favorite_music_genres?: string[] | null
      favorite_colors?: string[] | null
    }
  }
}