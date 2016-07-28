import {Type} from "class-transformer";
import {Repository} from "./Repository";

export class RepositoryResult {
  
  incomplete_results: boolean;
  
  @Type(() => Repository) // providing a Type is required.
  items: Repository[];
  
  total_count: number;
  
  get repositoryUrls() {
    return this.items.map(item => item.url);
  }
  
}