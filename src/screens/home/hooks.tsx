import { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  QUERIES, QUERY_PARSERS,
} from '@graphql/queries';

export const useQueryExample = () => {
  const [exampleData, setData] = useState<any[]>([]);
  const [exampleTwo, setDataTwo] = useState<any[]>([]);

  useQuery(QUERIES.QUERY_EXAMPLE, {
    onCompleted: (data) => {
      setData(QUERY_PARSERS.parseQueryExample(data));
    },
  });

  useQuery(QUERIES.QUERY_EXAMPLE_TWO, {
    onCompleted: (data) => {
      setDataTwo(QUERY_PARSERS.parseQueryExample(data));
    },
  });

  return {
    dataOne: exampleData,
    dataTwo: exampleTwo,
  };
};
