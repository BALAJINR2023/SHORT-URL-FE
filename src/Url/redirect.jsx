import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOriginalUrl } from '../apis/url/urlapi.js';


const RedirectToBackend = () => {
  const { shortUrl } = useParams();

  useEffect(() => {
    console.log('RedirectToBackend component rendered');
    const fetchAndRedirect = async () => {
      try {
        console.log('URL ID:', shortUrl);
        const data = await getOriginalUrl(shortUrl );
        if (data.originalUrl) {
          window.location.replace(data.originalUrl);
          console.log('Original URL:', data.originalUrl);
        } else {
          // Handle case where URL is not found
          console.error('URL not found');
        }
      } catch (error) {
        console.error('Failed to retrieve URL', error.message);
      }
    };

    fetchAndRedirect();
  }, [shortUrl]);

  return <div>Loading...</div>; // Display a loading message while redirecting
};

export default RedirectToBackend;
