import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RequestPizzaAC } from '@store/actions/pizzaAC';

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RequestPizzaAC())
  }, []);
  return (
    <div>Home</div>
  );
}