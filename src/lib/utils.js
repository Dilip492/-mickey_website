export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value, currency = "CAD") {
  const num = typeof value === "number" ? value : 0;
  return new Intl.NumberFormat("en-CA", { style: "currency", currency }).format(num);
}

export function formatDate(input) {
  const d = typeof input === "string" ? new Date(input) : input;
  return d.toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" });
}

export function greetingForHour(hour = new Date().getHours()) {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}