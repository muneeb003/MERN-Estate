import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <div className="flex flex-col max-w-lg mx-auto">
      <h1 className="font-semibold text-3xl text-center my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg "
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg "
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          disabled={loading}
          className="border uppercase text-white bg-slate-700 p-3 rounded-lg hover:opacity-90 disabled:opacity-80"
        >
          {loading ? "loading" : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <span>{error}</span>}
    </div>
  );
}

export default SignIn;
