import qs from 'qs';

interface Props {
  endpoint: string;
  params: any;
}

export default async function fetchApi<T>({ endpoint, params }: Props) {
  const query = qs.stringify(params);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const response = await fetch(`${import.meta.env.STRAPI_URL}/api/${endpoint}?${query}`).then(
    (response) => response.json()
  );
  return response as T;
}
