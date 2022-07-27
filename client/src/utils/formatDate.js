export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(new Date(date));
};
