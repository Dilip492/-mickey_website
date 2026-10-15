
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, Coffee } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logoWhite from "../assets/Mickey's_PrimaryLogo_White.svg"
import logo from "../assets/Mickey's_PrimaryLogo.svg"
import useAuth from "../hooks/useAuth";

import toast from "react-hot-toast";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();


  // Login form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  remember: false,


    console.log("form data", formData)
  // Form state
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();


  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  // Login submit


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
      const response = await login({
        email,
        password,
      })

      // const data = await response.json();

      // if (!response.ok) {
      //   throw new Error(
      //     error?.response?.data?.message || "Invalid email or password."
      //   );
      // }
      console.log("Login response:", response);
      console.log("Authenticated user:", response.user);


      toast.success("Login successful!");



      // Login successful
      // navigate("/my-mickeys");
      if (response.success && response.user) {
        navigate("/my-mickeys", { replace: true });
      }
    } catch (error) {
      // setError(
      //   error?.message ||
      //   "Something went wrong. Please try again."
      // );
      console.error("Login Error:", error);

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

        {/* LEFT - BRAND PANEL */}
        <div className="relative hidden overflow-hidden bg-roast lg:flex">

          {/* Decorative circles */}
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border border-terracotta/30" />
          <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full border border-terracotta/20" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-3xl text-cream-50"
            >
              {/* Mickey's */}
              <img className="w-[110px]" src={logoWhite} alt="logo" />
            </Link>

            {/* Center */}
            <div className="max-w-md">

              {/* <Coffee
                size={42}
                strokeWidth={1.2}
                className="mb-7 text-terracotta-light"
              /> */}

              <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.3em] text-terracotta-light">
                Welcome back
              </p>

              <h1 className="font-serif text-5xl leading-[1.05] text-cream-50 xl:text-6xl">
                Good to see
                <br />
                <span className="italic text-terracotta-light">
                  you again.
                </span>
              </h1>

              <p className="mt-6 font-sans text-sm leading-7 text-cream-200/70">
                Sign in to keep track of your favourites, reservations,
                rewards and everything happening at Mickey's.
              </p>

            </div>

            {/* Bottom */}
            <p className="font-sans text-xs text-cream-200/40">
              © {new Date().getFullYear()} Mickey's Café & Lounge
            </p>

          </div>
        </div>


        {/* RIGHT - LOGIN */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-12 lg:hidden">
              <Link
                to="/"
                className="font-serif text-3xl text-roast"
              >
                {/* Mickey's */}
                <img className="w-[110px]" src={logo} alt="logo" />
              </Link>
            </div>


            {/* Heading */}
            <div className="mb-9">

              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.25em] text-terracotta">
                Welcome back
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Sign in
              </h2>

              <p className="mt-3 font-sans text-sm text-roast/55">
                Access your Mickey's account.
              </p>

            </div>


            {/* Form */}
            <form className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block font-sans text-xs font-bold uppercase tracking-wider text-roast/70">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="
                    h-14
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
                <div className="mb-2 flex items-center justify-between">

                  <label className="font-sans text-xs font-bold uppercase tracking-wider text-roast/70">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="font-sans text-xs font-semibold text-terracotta hover:text-terracotta-dark"
                  >
                    Forgot password?
                  </Link>

                </div>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                    className="
                      h-14
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
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>

                </div>
              </div>


              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-3">

                <input
                  type="checkbox"
                  className="h-4 w-4 accent-terracotta"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  disabled={loading}
                />

                <span className="font-sans text-sm text-roast/60">
                  Remember me
                </span>

              </label>

              {/* Error */}
              {error && (<p className="font-sans text-sm text-red-600"> {error} </p>)}


              {/* Submit */}
              <button
                onClick={handleSubmit}
                type="submit"
                disabled={loading}
                className="
    group
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
    disabled:cursor-not-allowed
    disabled:opacity-70
  "
              >
                {loading ? (
                  <>
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
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

            </form>


            {/* Register */}
            <p className="mt-8 text-center font-sans text-sm text-roast/55">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-terracotta hover:text-terracotta-dark"
              >
                Create one
              </Link>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Login;

