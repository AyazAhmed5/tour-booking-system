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
import * as yup from "yup";
import bookingPageImage from "../../assets/images/booking-page-image.svg";
import "./AddTour.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../store/user/user.slice";
import { RootState } from "../../store/root-reducer";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(
      /^[A-Za-z\s-]+$/,
      "Name can only contain alphabets, spaces, and hyphens"
    )
    .max(50, "Name cannot exceed 50 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
  adults: yup
    .number()
    .required("Number of adults is required")
    .min(1, "At least 1 adult is required")
    .max(9, "Maximum 9 adults"),
  children: yup
    .number()
    .min(0, "Number of children cannot be negative")
    .max(9, "Maximum 9 children"),
  paymentMethod: yup
    .string()
    .required("Payment method is required")
    .oneOf(["mastercard", "visa"], "Invalid payment method"),
});

const AddTour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const tours = useSelector((state: RootState) => state.tour.tours);

  const onSubmit = (data: any) => {
    if (tours.length === 0) {
      alert("No tours available.");
      return;
    }

    const randomTour = tours[Math.floor(Math.random() * tours.length)];
    const booking = {
      ...data,
      tourId: randomTour.id,
    };

    const availableTourIds = tours.map((tour) => tour.id);

    dispatch(
      addBooking({
        ...booking,
        availableTourIds,
      })
    );

    alert(
      `Booking Confirmed!\n \n You Can See Booked Tours by clicking 'MY Tours' above`
    );
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
          Confirm Your Booking
        </Typography>

        <form className="form-fields" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
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
            <label htmlFor="payment-method" className="form-label">
              Payment Method
            </label>
            <FormControl>
              <Select
                id="payment-method"
                defaultValue=""
                className="form-select"
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
                <MenuItem value="mastercard">MasterCard</MenuItem>
                <MenuItem value="visa">Visa</MenuItem>
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
            Confirm
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
