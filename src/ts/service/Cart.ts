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
       return this._items.reduce((accumulator, item) => accumulator + item.price, 0);
    }

    countWithDiscount(discount: number): number {
        let totalPrise = this._items.reduce((accumulator, item) => accumulator + item.price, 0);
        totalPrise -= (totalPrise / 100) * discount;
        return totalPrise;
    }

    deleteItem(id: number): void {
        let index = this._items.findIndex(item => item.id === id)
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}