import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from '@apollo/client';
import {
  createMockClient, MockApolloClient,
} from 'mock-apollo-client';
import { QUERIES } from '@graphql/queries';
import { wait } from '@tests/utils';
import Home from '.';

// ==================================
// global setup
// ==================================
let component;
let mockClient:MockApolloClient;

// ==================================
// mocks
// ==================================
jest.mock('@contexts', () => ({
  useSettingsContext: () => ({
  }),
}));

const mockExample = jest.fn().mockResolvedValue({
  data: {
    rates: [
      {
        currency: 'AKT',
      },
      {
        currency: 'UNI',
      },
    ],
  },
});

const mockExampleTwo = jest.fn().mockResolvedValue({
  data: {
    rates: [
      {
        rate: '0.1',
      },
      {
        rate: '0.2',
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home', () => {
  beforeEach(async () => {
    mockClient = createMockClient();
    mockClient.setRequestHandler(
      QUERIES.QUERY_EXAMPLE_TWO,
      mockExampleTwo,
    );

    mockClient.setRequestHandler(
      QUERIES.QUERY_EXAMPLE,
      mockExample,
    );

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <Home />
        </ApolloProvider>,
      );
    });
    await wait();
  });

  it('it renders', async () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findAllByType('h1')[0].children).toEqual(['common:welcome']);
    expect(component.root.findAllByProps({
      className: 'currency',
    })[0].children).toEqual(['AKT']);
    expect(component.root.findAllByProps({
      className: 'rate',
    })[0].children).toEqual(['0.1']);
    expect(mockExample).toBeCalledTimes(1);
    expect(mockExampleTwo).toBeCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
