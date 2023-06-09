import { fireEvent, render, screen, within } from '@testing-library/vue';
import HomeView from '@/views/HomeView.vue';

test('HomeViewPage', async () => {
  render(HomeView);

  // screen has all queries that you can use in your tests.
  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  // screen.getByText('Times clicked: 0');
  //
  // const button = screen.getByText('increment');

  // await fireEvent.click(button);
  // await fireEvent.click(button);
  const button = screen.getByTestId('changeBtn');
  const text = screen.getByTestId('userName');

  console.log(within(screen.getByTestId('userName')).getByText('thai'));
  // expect(within(screen.getByTestId('userName')).getByText('thai')).toBe('thai');
  // await fireEvent.click(button);
  // expect(screen.getByText('thai'));
  // screen.getByText('thai');
  // console.log(screen.getByText('thai'));
});
