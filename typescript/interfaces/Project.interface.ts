export default interface Project {
  _id: number;
  name: string;
  desc: string;
  url: string;
  github: string;
  technology: string[];
  isHeroku: boolean;
}
