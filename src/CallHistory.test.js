import { render, screen } from '@testing-library/react';
import CallHistory from './CallHistory';
import CallHistoryTable from './CallHistoryTable';

// INTEGRATION TESTS
test('renders call history container', () => {
  render(<CallHistory />);
  const header = screen.getByText(/Vanity Number Generator/i);
  expect(header).toBeInTheDocument();
});

test('renders the call history table', () => {
  render(<CallHistoryTable />);
  const tableHeading = screen.getByText(/Customer Phone/i);
  expect(tableHeading).toBeInTheDocument();
})

// UNIT TESTS
// TO DO :) 