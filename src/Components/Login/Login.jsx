import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { login, register, loading } = useContext(StoreContext);

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setFormData({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLoginForm) {
        await login(formData.email, formData.password);
        toast.success("Login successful!");
        navigate("/home");
        setFormData({
          name: "",
          email: "",
          password: "",
          password_confirmation: ""
        });
      } else {
        if (formData.password !== formData.password_confirmation) {
          toast.error("Passwords do not match!");
          return;
        }

        await register(
          formData.name,
          formData.email,
          formData.password,
          formData.password_confirmation
        );
        toast.success("Registration successful! Please login.");
        setIsLoginForm(true);
        setFormData({
          name: "",
          email: "",
          password: "",
          password_confirmation: ""
        });
      }
    } catch (error) {
      toast.error(error?.message || "An error occurred");
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-slate-100 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">
        {isLoginForm ? "Login" : "Sign Up"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLoginForm && (
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={handleInputChange}
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={handleInputChange}
          required
          minLength="6"
        />

        {!isLoginForm && (
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            required
            minLength="6"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Processing..." : isLoginForm ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="mt-4 text-center cursor-pointer">
        {isLoginForm ? "Need an account?" : "Already have an account?"}{" "}
        <span onClick={toggleForm} className="font-bold text-green-600">
          {isLoginForm ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default Login;
