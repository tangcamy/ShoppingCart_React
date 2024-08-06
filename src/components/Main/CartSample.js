import { createContext } from "react";
//Provider：用於提供上下文的資料。
//Consumer：用於消費（讀取）上下文中的資料。

export const defaultCartContext = [
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },
    {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
];

//設定預設的上下文值。理解它的用法對於設計更為靈活的上下文結構是有幫助的
const CartSample = createContext({defaultCartContext});

export default CartSample;