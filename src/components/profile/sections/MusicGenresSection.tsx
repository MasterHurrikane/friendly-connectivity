import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

interface MusicGenresSectionProps {
  profile: Profile | null;
  onUpdate: (field: keyof Profile, value: any) => Promise<void>;
}

export const MusicGenresSection = ({ profile, onUpdate }: MusicGenresSectionProps) => {
  const [newMusicGenre, setNewMusicGenre] = useState("");

  const addMusicGenre = async () => {
    if (!newMusicGenre.trim()) return;
    const updatedMusicGenres = [...(profile?.favorite_music_genres || []), newMusicGenre.trim()];
    await onUpdate("favorite_music_genres", updatedMusicGenres);
    setNewMusicGenre("");
  };

  const removeMusicGenre = async (genre: string) => {
    if (!profile?.favorite_music_genres) return;
    const updatedMusicGenres = profile.favorite_music_genres.filter(g => g !== genre);
    await onUpdate("favorite_music_genres", updatedMusicGenres);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="musicGenres" className="text-left block text-lg font-bold">Favorite Music Genres</Label>
      <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
        {profile?.favorite_music_genres?.map((genre: string) => (
          <Badge 
            key={genre}
            variant="secondary"
            className="cursor-pointer hover:bg-destructive/20 px-3 py-1.5"
            onClick={() => removeMusicGenre(genre)}
          >
            {genre} ×
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <Input
          id="musicGenres"
          value={newMusicGenre}
          onChange={(e) => setNewMusicGenre(e.target.value)}
          placeholder="Enter a music genre"
          className="bg-white flex-1"
        />
        <Button 
          onClick={addMusicGenre}
          variant="secondary"
          className="w-[120px]"
        >
          Add Genre
        </Button>
      </div>
    </div>
  );
};