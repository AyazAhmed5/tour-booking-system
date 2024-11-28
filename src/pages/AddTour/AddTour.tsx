import {
  Box,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import bookingPageImage from "../../assets/images/booking-page-image.svg";
import "./AddTour.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, updateBooking } from "../../store/user/user.slice";
import { RootState } from "../../store/root-reducer";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { validationSchema } from "../../utils";

const AddTour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const location = useLocation();
  const tours = useSelector((state: RootState) => state.tour.tours);
  const bookings = useSelector((state: RootState) => state.user.bookings);
  const { id: routerTourId } = useParams();

  const isUpdating =
    Boolean(routerTourId) && location.pathname.includes(`/update-tour`);

  useEffect(() => {
    reset();
    if (isUpdating) {
      const bookingToEdit = bookings.find(
        (booking) => booking.tourId === routerTourId
      );
      if (bookingToEdit) {
        reset({
          name: bookingToEdit.name,
          email: bookingToEdit.email,
          phone: bookingToEdit.phone,
          adults: bookingToEdit.adults,
          children: bookingToEdit.children,
          paymentMethod: bookingToEdit.paymentMethod,
        });
      }
    } else {
      reset({
        name: "",
        email: "",
        phone: "",
        adults: 1,
        children: 0,
        paymentMethod: "",
      });
    }
  }, [isUpdating, routerTourId, bookings, reset, location.pathname]);

  const onSubmit = (data: any) => {
    if (tours.length === 0) {
      alert("No tours available.");
      return;
    }

    const randomTour = tours[Math.floor(Math.random() * tours.length)];
    const booking = {
      ...data,
      tourId: routerTourId ? routerTourId : randomTour.id,
    };

    const availableTourIds = tours.map((tour) => tour.id);

    if (isUpdating) {
      dispatch(
        updateBooking({
          ...booking,
          tourId: routerTourId,
        })
      );
      alert("Booking updated successfully!");
    } else {
      dispatch(
        addBooking({
          ...booking,
          availableTourIds,
          routerTourId,
        })
      );
      alert("Booking confirmed!");
    }

    reset();
  };

  return (
    <div className="add-tour-container">
      {/* Form Container */}
      <Box className="form-container">
        <Typography
          className="form-title"
          sx={{
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            lineHeight: { xs: "36px", sm: "48px", md: "60px" },
          }}
        >
          {isUpdating ? "Update Your Booking" : "Confirm Your Booking"}
        </Typography>

        <form className="form-fields" onSubmit={handleSubmit(onSubmit)}>
          {/* Form fields */}
          <Box className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              {...register("name")}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </Box>

          {/* Email Field */}
          <Box className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              {...register("email")}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </Box>

          {/* Phone Field */}
          <Box className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </Box>

          {/* Numbers of Adults and Children */}
          <Box className="form-group-row">
            <Box className="form-group form-group-upper">
              <label htmlFor="adults" className="form-label">
                Numbers of Adults
              </label>
              <input
                type="number"
                id="adults"
                className="form-input"
                {...register("adults")}
              />
              {errors.adults && (
                <p className="error-message">{errors.adults.message}</p>
              )}
            </Box>
            <Box className="form-group form-group-upper">
              <label htmlFor="children" className="form-label">
                Numbers of Children
              </label>
              <input
                type="number"
                id="children"
                className="form-input"
                {...register("children")}
              />
              {errors.children && (
                <p className="error-message">{errors.children.message}</p>
              )}
            </Box>
          </Box>

          {/* Payment Method */}
          <Box className="form-group">
            <label htmlFor="paymentMethod" className="form-label">
              Payment Method
            </label>
            <FormControl>
              <Select
                id="paymentMethod"
                defaultValue=""
                className="form-select"
                value={watch("paymentMethod") || ""}
                {...register("paymentMethod")}
                sx={{
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f16b51",
                  },
                  "&.Mui-focused": {
                    color: "#f16b51",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Select payment method
                </MenuItem>
                <MenuItem id="paymentMethod" value="mastercard">
                  MasterCard
                </MenuItem>
                <MenuItem id="paymentMethod" value="visa">
                  Visa
                </MenuItem>
              </Select>
            </FormControl>
            {errors.paymentMethod && (
              <p className="error-message">{errors.paymentMethod.message}</p>
            )}
          </Box>

          {/* Confirm Button */}
          <Button
            type="submit"
            variant="contained"
            className="form-confirm-button"
            disabled={!isValid}
          >
            {isUpdating ? "Update Booking" : "Confirm"}
          </Button>
        </form>
      </Box>

      {/* Image Container */}
      <Box className="form-image-container">
        <img
          className="form-right-img"
          style={{ height: "100%" }}
          src={bookingPageImage}
          alt="Booking Illustration"
        />
      </Box>
    </div>
  );
};

export default AddTour;
