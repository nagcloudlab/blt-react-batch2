
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

export interface Product {
  name: string;
  price?: number;
}

interface ProductsState {
  products: Array<Product>;
}

const initialState: ProductsState = {
  products: []
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (thunkAPI) => {
    const response = await fetch("http://localhost:8080/api/v1/products", {
      method: "GET",
    });
    const data = response.json();
    return data;
  },
);
export const saveProduct = createAsyncThunk(
  "person/save",
  async (name: string, thunkAPI) => {
    const response = await fetch("http://localhost:3000/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();
    return data;
  },
);

// pending
// fulfiled
// rejected

export const ProductsSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ name: string }>) => {
      state.products.push({
        name: action.payload.name,
      });
    },
  },
  extraReducers(builder) {

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const arr = action.payload.map((product: any) => {
        return product
      });
      state.products = arr;
    })

    builder.addCase(saveProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });

  },
})

export default ProductsSlice.reducer;
export const { addProduct } = ProductsSlice.actions;

