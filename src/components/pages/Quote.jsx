import React, { useState, useEffect } from 'react';

const Quote = () => {
  const api = 'https://api.api-ninjas.com/v1/quotes?category=design';
  const key = 'GIDZtRlO9nOuhs77+bdOLg==6DdOB8VgjtrE29Vt';
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(api, {
          headers: {
            'X-Api-Key': key,
          },
        });
        const data = await response.json();
        setData(data[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error while fetching data</div>;
  }

  return (
    <div className="quote-container">
      <div className={`quote ${isLoading ? 'loading' : ''}`}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <p>{data.quote}</p>
            <small>
              <i>{`--${data.author}`}</i>
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Quote;
