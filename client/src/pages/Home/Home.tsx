import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RequestPizzaAC } from '@store/actions/pizzaAC';
import { CardList } from '@components/CardList';
import { RequestExchangeAC } from '@store/actions/currencyAC';

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RequestPizzaAC());
    dispatch(RequestExchangeAC());
  }, [dispatch]);
  return (
    <CardList />
  );
}