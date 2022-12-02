export type configType = {
  Title: string;
  Meta: string;
  Grid: boolean;
  Comments: boolean;
};

export type postType = {
  Public: boolean;
  Category: string;
  Tags: tagType[];
  Comments: commentType[];
  Date: Date;
  Views: number;
  UniqueViews: number;
  Contents: contentPostType[];
  MainPicture: string;
};

export type contentPostType = {};

export type commentType = {};
export type tagType = {};
