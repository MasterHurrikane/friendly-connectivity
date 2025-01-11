export interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  visibility: "public" | "private" | "invite-only";
  headerImage?: File;
  eventPhotos?: FileList;
}