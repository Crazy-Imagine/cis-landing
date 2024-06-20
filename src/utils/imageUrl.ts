export function getImageUrl(img: string) {
  if (!import.meta.env.DEV) return img;

  if (img.includes('https://')) return img;

  return `${import.meta.env.PUBLIC_STRAPI_URL}${img}`;
}
