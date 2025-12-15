export function getImagePrefix() {
  return process.env.NODE_ENV === "production" ? "/E-learning/images/" : "/images/";
}