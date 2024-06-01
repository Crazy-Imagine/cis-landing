import qs from 'qs';
import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.PUBLIC_STRAPI_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface Pagination {
  start?: number;
  limit?: number;
  withCount?: boolean;
}

interface StrapiParams {
  fields?: string[];
  filters?: Record<string, any>;
  locale?: string;
  pagination?: Pagination;
  populate?: Record<string, any>;
  sort?: Record<string, string>;
}

interface Props {
  endpoint: string;
  params: StrapiParams;
}

type ContentType = 'multipart/form-data' | 'application/json';

interface PostProps {
  endpoint: string;
  data: Record<string, any>;
  contentType?: ContentType;
}

export default async function fetchApi<T>({ endpoint, params }: Props): Promise<T> {
  const query = qs.stringify(params);

  const response = await instance.get<T>(`${endpoint}?${query}`);
  return response.data;
}

export async function postApi<T>({
  endpoint,
  data,
  contentType = 'application/json',
}: PostProps): Promise<T> {
  const response = await instance.post<T>(
    endpoint,
    contentType === 'application/json' ? { data } : data,
    {
      headers: {
        'Content-Type': contentType,
      },
    }
  );
  return response.data;
}
