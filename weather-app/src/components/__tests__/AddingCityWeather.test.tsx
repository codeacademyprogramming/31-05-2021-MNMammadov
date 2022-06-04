import { fireEvent, render, screen } from '@testing-library/react';
import AddingCityWeather from '../AddingCityWeather';

test('should call onSearch cb when user click search button', () => {
    const mockOnSearch = jest.fn();

    render(<AddingCityWeather onSearch={mockOnSearch} />);

    fireEvent.change(screen.getByPlaceholderText('Enter city'), { target: { value: 'Baku' } });

    fireEvent.click(screen.getByText('Check Weather'));

    expect(mockOnSearch).toBeCalledWith('Baku');
});
