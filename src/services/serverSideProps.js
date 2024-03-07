export async function getPages()
{

        const response = await fetch(
          "https://realestate.oneentry.cloud/api/content/pages",
          {
            method: "get",
            headers: {
              'x-app-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGlnaXRhbC1hZ2VuY3kiLCJzZXJpYWxOdW1iZXIiOjEwLCJpYXQiOjE3MDk2NjM5OTQsImV4cCI6MTc0MTE5OTk3OH0.vYK7_OE9r6g-W0qY3UKr3egjRZKczeIixaJ79k8RZkc'
            },
          }
        );
      return await response.json();
}