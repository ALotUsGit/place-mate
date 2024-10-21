export const dateFormat = (dateStr: string, type: string) => {
  const date = new Date(dateStr);

  const yy = date.getFullYear().toString();
  const MM = (date.getMonth() + 1).toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");
  const hh = date.getHours().toString().padStart(2, "0");
  const mm = date.getMinutes().toString().padStart(2, "0");

  const formatted = type
    .replace(/yy/g, yy)
    .replace(/MM/g, MM)
    .replace(/dd/g, dd)
    .replace(/hh/g, hh)
    .replace(/mm/g, mm);

  return formatted;
};
