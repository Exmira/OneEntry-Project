import { useRouter } from "next/router";
import MainContainer from '@/components/MainContainer'
import { getPages } from '/src/services/serverSideProps'


export default function Page({pages}) {
  const { query } = useRouter();

  return (
       <MainContainer pages={pages}>
        <h1> Page {query.url}</h1>
       </MainContainer>
  );
}


export async function getServerSideProps({req, res}) {
  const response = await fetch(
    "https://realestate.oneentry.cloud/api/content/pages",
    {
      method: "get",
      headers: {
        'x-app-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGlnaXRhbC1hZ2VuY3kiLCJzZXJpYWxOdW1iZXIiOjEwLCJpYXQiOjE3MDk2NjM5OTQsImV4cCI6MTc0MTE5OTk3OH0.vYK7_OE9r6g-W0qY3UKr3egjRZKczeIixaJ79k8RZkc'
      },
    }
  );
  const pages = await response.json();
  return {
    props: {
      pages,
    }
  }
}