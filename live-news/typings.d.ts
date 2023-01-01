import { type } from "os";
import internal from "stream";

type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string; 
};

type Pagination = {
    count: int;
    limit: int;
    offset: int;
    total: int
}
type NewsResponse = {
  pagination: Pagination ;
  data: Article[];
};
type Category =
  | "business"
  | "entertainment"
  | "general" 
  | "health"
  | "science"
  | "sports"
  | "technology";
