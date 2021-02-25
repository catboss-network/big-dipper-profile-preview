import * as R from 'ramda';
import { gql } from '@apollo/client';

export const QUERY_EXAMPLE = gql`
query GetCurrency {
  rates(currency: "USD") {
    currency
  }
}`;

export const QUERY_EXAMPLE_TWO = gql`
query GetRates {
  rates(currency: "CAD") {
    rate
  }
}`;

export const parseQueryExample = (data: any) => {
  const parsedData = R.pathOr([], ['rates'], data).slice(0, 1);
  return parsedData;
};
