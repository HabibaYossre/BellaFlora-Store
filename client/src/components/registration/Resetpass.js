import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Resetpass() {
  const navigate = useNavigate();
  const { token } = useParams(); // get token from URL

  const [pass, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("Token from URL:", token);
  // ✅ Check token validity when page loads
  useEffect(() => {
    axios
      .get(`http://localhost:3000/auth/reset-password/${token}`)
      .then((res) => setMessage(res.data.message))
      .catch((err) =>
        setMessage(err.response?.data?.message || "Invalid or expired link ya fatma")
      );
  }, [token]);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setMessage("");

    if (!pass || !confirmPass) {
      setErrorMessage("Both fields are required!");
      return;
    }
    if (pass !== confirmPass) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    if (!validatePassword(pass)) {
      setErrorMessage(
        "Password must be at least 8 characters, contain one uppercase letter, and include numbers."
      );
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `http://localhost:3000/auth/reset-password/${token}`,
        { password: pass }, // ✅ backend expects "password"
        { withCredentials: true }
      );

      setMessage(res.data.message || "Password updated successfully!");
      setPassword("");
      setConfirmPassword("");

      // Redirect after short delay
      setTimeout(() => navigate("/auth/login"), 2000);
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleReset}>
        <h2>Reset Your Password</h2>
        <p style={{ marginBottom: "10px" }}>{message}</p>

        <div>
          <label htmlFor="newpassword">New Password</label>
          <input
            type="password"
            id="newpassword"
            required
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
        {message && !errorMessage && (
          <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}

export default Resetpass;
