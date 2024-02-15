const formatDate = (publishedAt) => {
  const date = new Date(publishedAt);
  const result = `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;

  return result;
};

export { formatDate }