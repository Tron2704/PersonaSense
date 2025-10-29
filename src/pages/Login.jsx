import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function Login() {
  // ✅ Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // ✅ Handle Form Submission
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    // 🔐 Later we’ll replace this with Appwrite login API
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100 px-4">
      <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-800">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Login to continue to Personality AI
        </p>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold text-white transition"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
