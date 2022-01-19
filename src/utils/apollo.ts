import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

type AppQueryProps = {
  query: any;
  variables: any;
  key: string;
};

export const useAppQuery = ({ query, variables, key }: AppQueryProps) => {
  const [value, setValue] = useState(null);
  const { loading, error, data } = useQuery(query, {
    variables,
    fetchPolicy: `cache-and-network`,
  });

  useEffect(() => {
    if (!loading && !error) {
      setValue(data[key]);
    }

    if (error) {
      // appToast(error.message, 'error');
    }
  }, [loading, error, data]);

  return { loading, loadedData: value, error };
};
