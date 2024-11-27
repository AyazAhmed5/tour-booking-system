import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toursData } from "../../utils";
import { TourType } from "../../utils";

interface TourState {
  tours: TourType[];
}

const initialState: TourState = {
  tours: [...toursData],
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setTours: (state, action: PayloadAction<TourType[]>) => {
      state.tours = action.payload;
    },
    updateTour: (state, action: PayloadAction<TourType>) => {
      const index = state.tours.findIndex(
        (tour) => tour.id === action.payload.id
      );
      if (index >= 0) {
        state.tours[index] = { ...state.tours[index], ...action.payload };
      }
    },
  },
});

export const { setTours, updateTour } = tourSlice.actions;
export default tourSlice.reducer;
