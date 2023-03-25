import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('count total prise', () => {
  const cart = new Cart();
  cart.add({id: 456, name: "Harry Poter", price: 1800});
  cart.add({id: 556, name: "Cat on the moon", price: 800});

  expect(cart.count()).toBe(2600);
});

test('count prise with discount', () => {
  const cart = new Cart();
  cart.add({id: 456, name: "Harry Poter", price: 1800});
  cart.add({id: 556, name: "Cat on the moon", price: 800});
  
  expect(cart.countWithDiscount(15)).toBe(2210);
});

test('delete item', () => {
  const cart = new Cart();
  cart.add({id: 456, name: "Harry Poter", price: 1800});
  cart.deleteItem(456);
  expect(cart.items.length).toBe(0);
});

test('add to cart', () => {
  const cart = new Cart();
  cart.add({id: 456, name: "Harry Poter", price: 1800})
  expect(cart.items.length).toBe(1);
});

test('add movie to cart', () => {
  const cart = new Cart();
  const movie = new Movie(456, "Harry Poter", 1800, 2006, "USA", "Witches go!", "fantasy", 2.03)
  cart.add(movie)
  expect(cart.items.length).toBe(1);
});
