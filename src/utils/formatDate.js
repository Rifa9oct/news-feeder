const formatDate = (publishedAt) => {
  const date = new Date(publishedAt);
  const currentDate = new Date();
  const hour = 60 * 60 * 1000 * 24;

  if (currentDate - date < hour) {
    const hoursAgo = Math.floor((currentDate - date) / hour);
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  }

  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return "Yesterday";
  }

  const result = `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;

  return result;
};

export { formatDate };
