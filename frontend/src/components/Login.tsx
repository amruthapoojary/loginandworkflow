import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type Props = { onLogin: () => void };

export default function Login({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLocalLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }
    alert(`Logged in as ${email}`);
    onLogin();
  };

  const handleGoogleLogin = () => {
    alert("Redirecting to Google login...");
    onLogin();
  };

  const handleGithubLogin = () => {
    alert("Redirecting to GitHub login...");
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-semibold mb-6">Sign in</h2>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="relative w-full border py-2 rounded mb-3 hover:bg-gray-100 flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} />
          <span>Sign in with Google</span>
          <span className="absolute right-3 text-blue-600 text-sm">
            Last used
          </span>
        </button>

        {/* GitHub Button */}
        <button
          onClick={handleGithubLogin}
          className="w-full border py-2 rounded mb-4 hover:bg-gray-100 flex items-center justify-center gap-2"
        >
          <FaGithub size={22} />
          <span>Sign in with GitHub</span>
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-right mb-4">
          <button
            onClick={() => alert("Mock password reset link sent!")}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          onClick={handleLocalLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
