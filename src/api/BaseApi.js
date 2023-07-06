import fetch from 'isomorphic-unfetch';

const API_BASE_URL = 'https://www.strompris.no/strom-product-ms/feeds';
const API_USERNAME = "feeduser";
const API_PASSWORD = "consumer";
// process.env.API_USERNAME process.env.API_PASSWORD
export const fetchFeedData = async (date, signal) => {
  const formattedDate = encodeURIComponent(date);
  try {
    const response = await fetch(`${API_BASE_URL}/${formattedDate}.json`, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64'),
      },
      signal,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from API (status: ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    throw new Error(`Failed to fetch data from API: ${error.message}`);
  }
};
