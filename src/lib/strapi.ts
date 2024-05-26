import qs from 'qs';

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

export default async function fetchApi<T>({ endpoint, params }: Props) {
  const query = qs.stringify(params);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const response = await fetch(`${import.meta.env.STRAPI_URL}/api/${endpoint}?${query}`).then(
    (response) => response.json()
  );
  return response as T;
}
