export interface TocNode {
  tagName: string;
  textContent: string;
  id: string;
  children: TocNode[];
}
