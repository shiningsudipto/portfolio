export const fetchApi = async (endPoint: string) => {
  try {
    const response = await fetch(
      `https://portfolio-shiningsudiptos-projects.vercel.app/api/${endPoint}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching API:", error);
    return null;
  }
};
