export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blocked_users: {
        Row: {
          blocked_user_id: string | null
          created_at: string
          id: string
          user_id: string | null
        }
        Insert: {
          blocked_user_id?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Update: {
          blocked_user_id?: string | null
          created_at?: string
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blocked_users_blocked_user_id_fkey"
            columns: ["blocked_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      friend_group_members: {
        Row: {
          created_at: string
          friend_id: string
          group_id: string
          id: string
        }
        Insert: {
          created_at?: string
          friend_id: string
          group_id: string
          id?: string
        }
        Update: {
          created_at?: string
          friend_id?: string
          group_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "friend_group_members_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "friend_group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "friend_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      friend_groups: {
        Row: {
          created_at: string
          id: string
          name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "friend_groups_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      friend_interactions: {
        Row: {
          created_at: string | null
          details: Json | null
          friend_connection_id: string
          id: string
          interaction_date: string | null
          interaction_type: string
        }
        Insert: {
          created_at?: string | null
          details?: Json | null
          friend_connection_id: string
          id?: string
          interaction_date?: string | null
          interaction_type?: string
        }
        Update: {
          created_at?: string | null
          details?: Json | null
          friend_connection_id?: string
          id?: string
          interaction_date?: string | null
          interaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "friend_interactions_friend_connection_id_fkey"
            columns: ["friend_connection_id"]
            isOneToOne: false
            referencedRelation: "friends"
            referencedColumns: ["id"]
          },
        ]
      }
      friends: {
        Row: {
          created_at: string | null
          friend_id: string
          friendship_date: string | null
          id: string
          interaction_count: number | null
          last_interaction: string | null
          relationship_type: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          friend_id: string
          friendship_date?: string | null
          id?: string
          interaction_count?: number | null
          last_interaction?: string | null
          relationship_type?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          friend_id?: string
          friendship_date?: string | null
          id?: string
          interaction_count?: number | null
          last_interaction?: string | null
          relationship_type?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "friends_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "friends_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_preferences: {
        Row: {
          created_at: string
          delivery_method: string | null
          enabled: boolean | null
          frequency: string | null
          id: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          delivery_method?: string | null
          enabled?: boolean | null
          frequency?: string | null
          id?: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          delivery_method?: string | null
          enabled?: boolean | null
          frequency?: string | null
          id?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
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
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
