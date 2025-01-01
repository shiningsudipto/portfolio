export function getWords(
  content: string,
  amount: number,
  skip: number
): string {
  // Remove HTML tags and split the content into words
  const plainText = content.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
  const words = plainText.trim().split(/\s+/); // Split by whitespace

  // Get the required slice of words and join them with a space
  return words.slice(skip, skip + amount).join(" ");
}

export function getSegments(
  content: string,
  amount: number = Infinity,
  skip: number = 0
): string {
  if (!content || typeof content !== "string") {
    throw new Error("Invalid content: Content must be a non-empty string.");
  }

  // Replace <br> and <br /> tags with a unique marker
  const contentWithMarkers = content.replace(/<br\s*\/?>/gi, "||BR||");

  // Remove all other HTML tags
  const plainText = contentWithMarkers.replace(/<\/?[^>]+(>|$)/g, "");

  // Split by the marker and clean up
  const segments = plainText
    .split("||BR||")
    .map((segment) => segment.trim())
    .filter(Boolean);

  // Handle out-of-bound skip values
  if (skip >= segments.length) {
    return "";
  }

  // Get the specified slice of segments
  const selectedSegments = segments.slice(skip, skip + amount);

  // Rejoin the selected segments with <br> tags
  return selectedSegments.join("<br>");
}
