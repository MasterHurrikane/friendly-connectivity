import { Json, Database as BaseDatabase } from './common';
import { FriendTables } from './friends';
import { ProfileTables } from './profiles';
import { AnalyticsTables } from './analytics';
import { NotificationTables } from './notifications';
import { BlockedTables } from './blocked';

export type { Json };

export type Database = Omit<BaseDatabase, 'public'> & {
  public: {
    Tables: FriendTables & ProfileTables & AnalyticsTables & NotificationTables & BlockedTables
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

export type * from './common';