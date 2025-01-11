export interface Friend {
  id: string;
  name: string;
  nickname?: string;
  category: string;
  lastInteraction?: string;
  email?: string;
  phone?: string;
  birthday?: string;
  anniversary?: string;
  spouse?: string;
  children?: string;
  metDate?: string;
  city?: string;
  timezone?: string;
  avatar: string;
  notes?: string;
  first_name?: string;
  last_name?: string;
  bio?: string;
  interests?: string[];
  hobbies?: string[];
}

export const dummyFriends: Friend[] = [
  {
    id: "1",
    name: "John Doe",
    nickname: "Johnny",
    category: "Friend",
    lastInteraction: "2 days ago",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    birthday: "March 15",
    anniversary: "June 21",
    spouse: "Jane Doe",
    children: "Tommy (8), Sarah (6)",
    metDate: "2022-01-01",
    city: "San Francisco",
    timezone: "PST",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    notes: "Met at the local tech meetup. Loves hiking and photography."
  },
  {
    id: "2",
    name: "Jane Smith",
    nickname: "Janey",
    category: "Family",
    lastInteraction: "1 week ago",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    birthday: "July 22",
    anniversary: "August 15",
    spouse: "Mike Smith",
    children: "Emma (4)",
    metDate: "2021-06-15",
    city: "New York",
    timezone: "EST",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    notes: "My cousin from New York. Amazing baker and always brings cookies."
  },
  {
    id: "3",
    name: "Bob Wilson",
    nickname: "Bobby",
    category: "Work",
    lastInteraction: "Yesterday",
    email: "bob@example.com",
    phone: "+1 (555) 246-8135",
    birthday: "December 5",
    metDate: "2023-01-10",
    city: "Chicago",
    timezone: "CST",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    notes: "Met at the company retreat. Great team player and mentor."
  }
];

export const suggestedFriends: Friend[] = [
  {
    id: "4",
    name: "Sarah Chen",
    category: "Suggested",
    email: "sarah@example.com",
    phone: "+1 (555) 555-0123",
    birthday: "September 8",
    city: "Seattle",
    timezone: "PST",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    notes: "Tech enthusiast and amateur photographer",
    interests: ["Photography", "Technology", "Hiking"],
    hobbies: ["Rock climbing", "Cooking"]
  },
  {
    id: "5",
    name: "Michael Rodriguez",
    category: "Suggested",
    email: "michael@example.com",
    phone: "+1 (555) 555-0456",
    birthday: "April 12",
    city: "Austin",
    timezone: "CST",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    notes: "Music producer and coffee enthusiast",
    interests: ["Music", "Coffee", "Travel"],
    hobbies: ["DJing", "Brewing coffee"]
  },
  {
    id: "6",
    name: "Emily Parker",
    category: "Suggested",
    email: "emily@example.com",
    phone: "+1 (555) 555-0789",
    birthday: "January 30",
    city: "Portland",
    timezone: "PST",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    notes: "Artist and yoga instructor",
    interests: ["Art", "Yoga", "Sustainability"],
    hobbies: ["Painting", "Meditation"]
  }
];