
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, Coffee } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logoWhite from "../assets/Mickey's_PrimaryLogo_White.svg"
import logo from "../assets/Mickey's_PrimaryLogo.svg"
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const { register } = useAuth();

  // const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", password_confimation: " " });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    avatar: null,
  });



  console.log("form data", formData)


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const navigate = useNavigate();

  // const handleChange = (e) => {

  // const { name, value, type, checked } = e.target;

  // setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev, [name]: type === "checkbox" ? checked : value
    }))


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const email = formData.email.trim();
    const password = formData.password;

    // Basic validation
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const response = await register(formData)

      // const data = await response.json();
      console.log("dfdfadfs", response)

      // if (!response.ok) {
      //   throw new Error(
      //     data?.message || "Invalid email or password."
      //   );
      // }

      toast.success("register successful!");

      // Login successful
      navigate("/login");
    } catch (error) {
      // setError(
      //   error?.message ||
      //   "Something went wrong. Please try again."
      // );
      console.error("register Error:", error);

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Something went wrong. Please try again.";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-cream-50 text-roast">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT BRAND PANEL */}
        <div className="relative hidden overflow-hidden bg-terracotta lg:flex">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/20" />
          <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full border border-white/15" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            <Link
              to="/"
              className="font-serif text-3xl text-white"
            >
              {/* Mickey's */}
              <img className="w-[110px]" src={logoWhite} alt="" />
            </Link>


            <div className="max-w-md">

              {/* <Coffee
                size={42}
                strokeWidth={1.2}
                className="mb-7 text-white"
              /> */}

              <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                Join the family
              </p>

              <h1 className="font-serif text-5xl leading-[1.05] text-white xl:text-6xl">
                More good
                <br />
                <span className="italic text-cream-100">
                  moments await.
                </span>
              </h1>

              <p className="mt-6 font-sans text-sm leading-7 text-white/75">
                Create your Mickey's account and make your café experience
                even more personal.
              </p>

              <div className="mt-8 space-y-3 font-sans text-sm text-white/80">
                <p>✓ Save your favourite menu items</p>
                <p>✓ Manage your reservations</p>
                <p>✓ Stay updated with special events</p>
                <p>✓ Get access to exclusive offers</p>
              </div>

            </div>


            <p className="font-sans text-xs text-white/50">
              © {new Date().getFullYear()} Mickey's Café & Lounge
            </p>

          </div>

        </div>


        {/* REGISTER FORM */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">

          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-10 lg:hidden">
              <Link
                to="/"
                className="font-serif text-3xl text-roast"
              >
                {/* Mickey's */}
                <img className="w-[110px]" src={logo} alt="logo" />
              </Link>
            </div>


            {/* Heading */}
            <div className="mb-8">

              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.25em] text-terracotta">
                Welcome to Mickey's
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Create account
              </h2>

              <p className="mt-3 font-sans text-sm text-roast/55">
                Join us and make every visit a little more special.
              </p>

            </div>


            <form className="space-y-4">

              {/* Name */}
              <div>
                <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-wider text-roast/70">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    h-13
                    w-full
                    rounded-xl
                    border
                    border-roast/15
                    bg-white
                    px-5
                    font-sans
                    text-sm
                    outline-none
                    transition
                    placeholder:text-roast/30
                    focus:border-terracotta
                    focus:ring-2
                    focus:ring-terracotta/10
                  "
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-wider text-roast/70">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="
                    h-13
                    w-full
                    rounded-xl
                    border
                    border-roast/15
                    bg-white
                    px-5
                    font-sans
                    text-sm
                    outline-none
                    transition
                    placeholder:text-roast/30
                    focus:border-terracotta
                    focus:ring-2
                    focus:ring-terracotta/10
                  "
                />
              </div>


              {/* Phone */}
              <div>
                <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-wider text-roast/70">
                  Phone number
                </label>

                <input
                  type="tel"
                  placeholder="+1 (519) 000-0000"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
                    h-13
                    w-full
                    rounded-xl
                    border
                    border-roast/15
                    bg-white
                    px-5
                    font-sans
                    text-sm
                    outline-none
                    transition
                    placeholder:text-roast/30
                    focus:border-terracotta
                    focus:ring-2
                    focus:ring-terracotta/10
                  "
                />
              </div>


              {/* Password */}
              <div>

                <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-wider text-roast/70">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="
                      h-13
                      w-full
                      rounded-xl
                      border
                      border-roast/15
                      bg-white
                      px-5
                      pr-12
                      font-sans
                      text-sm
                      outline-none
                      transition
                      placeholder:text-roast/30
                      focus:border-terracotta
                      focus:ring-2
                      focus:ring-terracotta/10
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-roast/40 hover:text-roast"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              <div>

                <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-wider text-roast/70">
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm a password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    className="
                      h-13
                      w-full
                      rounded-xl
                      border
                      border-roast/15
                      bg-white
                      px-5
                      pr-12
                      font-sans
                      text-sm
                      outline-none
                      transition
                      placeholder:text-roast/30
                      focus:border-terracotta
                      focus:ring-2
                      focus:ring-terracotta/10
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-roast/40 hover:text-roast"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>



              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 pt-1">

                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-terracotta"
                />

                <span className="font-sans text-xs leading-5 text-roast/55">
                  I agree to Mickey's{" "}
                  <Link
                    to="/terms"
                    className="font-semibold text-terracotta"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-semibold text-terracotta"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>

              </label>


              {/* Submit */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="
                  group
                  mt-2
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-terracotta
                  font-sans
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-terracotta-dark
                "
              >
                {loading ? (<>
                  <span
                    className="
          h-5
          w-5
          animate-spin
          rounded-full
          border-2
          border-white/30
          border-t-white
        "
                  />
                  Creating account...
                </>) : (
                  <>
                    Create account

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                    
                  </>
                )
                }

              </button>

            </form>


            {/* Login */}
            <p className="mt-7 text-center font-sans text-sm text-roast/55">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-terracotta hover:text-terracotta-dark"
              >
                Sign in
              </Link>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Register;
