import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand",
        flavor: "Flavor",
        caffeine: "Caffeine",
        sugar: "Sugar",
        calories: "Calories",
    },
    reducers: {
        chooseBrand: (state, action) => {state.brand = action.payload},
        chooseFlavor: (state, action) => {state.flavor = action.payload},
        chooseCaffeine: (state, action) => {state.caffeine = action.payload},
        chooseSugar: (state, action) => {state.sugar = action.payload},
        chooseCalories: (state, action) => {state.calories = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseFlavor, chooseCaffeine, chooseSugar, chooseCalories } = rootSlice.actions