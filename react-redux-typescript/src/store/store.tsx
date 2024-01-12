

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CartSlice } from "./features/cart/cartSlice";
import { ProductsSlice } from "./features/products/productsSlice";

export const store = configureStore({
    reducer: {
        products: ProductsSlice.reducer,
        cart: CartSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;