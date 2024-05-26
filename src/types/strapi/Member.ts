export interface MemberCollection {
  data: Member[];
  meta: Meta;
}

export interface Member {
  id: number;
  attributes: MemberAttributes;
}

export interface MemberAttributes {
  name: string;
  role: string;
  cardDescription: string;
  avatar: Avatar;
}

export interface Avatar {
  data: AvatarDatum[];
}

export interface AvatarDatum {
  id: number;
  attributes: AvatarAttributes;
}

export interface AvatarAttributes {
  width: number;
  height: number;
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
