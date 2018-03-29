export interface IGame {
  id: string;
  gameName: string;
  description: string;
  developerGithubId: string;
  url: string;
  keyPointsOfInterestUrl: string;
  techIds: string[];
  createdDate: string;
  paypalUsername?: string;
  patreonUsername?: string;
  rating?: number;
}
