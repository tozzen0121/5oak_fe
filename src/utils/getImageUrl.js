export const ImagePath = {
  LANDING: 'landing',
  USERS: 'users',
  ECOMMERCE: 'e-commerce',
  PROFILE: 'profile'
};

// ==============================|| NEW URL - GET IMAGE URL ||============================== //

export function getImageUrl(path) {
  return new URL(`${import.meta.env.VITE_APP_API_URL}/${path}`, import.meta.url).href;
}
