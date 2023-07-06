// Import any required libraries or functions
import  { fetchFeedData } from '../src/api/BaseApi.js';
// Define the page component
export default function FeedPage({ data }) {
  console.log(data)
  return (
    <div>
      Hello
      {console.log(data[0])}
    </div>
  );
}

export async function getServerSideProps() {
  const date = '2022-10-31'; // Update the date format to YYYY-MM-DD
  console.log(date);

  try {
    const data = await fetchFeedData(date);
    return { props: { data } };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return { props: { data: [] } };
  }
}