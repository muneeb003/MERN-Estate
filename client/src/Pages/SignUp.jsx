import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="mx-auto p-3 max-w-lg">
      <h1 className="font-semibold text-3xl text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="border bg-slate-700 p-3 rounded-lg hover:opacity-95 text-white uppercase disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link>
          <span className="text-blue-900">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
