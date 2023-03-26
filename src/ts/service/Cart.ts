import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    count(): number {
       return this._items.reduce((accumulator: number, item: Buyable) => accumulator + item.price, 0);
    }

    countWithDiscount(discount: number): number {
        let totalPrise = this.count();
        totalPrise -= (totalPrise / 100) * discount;
        return totalPrise;
    }

    deleteItem(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}