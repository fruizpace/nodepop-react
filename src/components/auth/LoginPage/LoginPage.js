import T from "prop-types";
import { useState } from "react";
import { Button } from "../../common";
import { login } from "../service";
import { FormField } from "../../common";
import { AuthContextConsumer } from "../context";

function LoginPage({ onLogin, history, location }) {
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetError = () => setError(null);

  const handleChange = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // conectar con la API
    setIsLoading(true);
    resetError();
    try {
      await login(value);
      setIsLoading(false);
      onLogin();
      const { from } = location.state || { from: { pathname: "/ads" } };
      history.replace(from);
    } catch (error) {
      setError({ message: "Invalid email or password" });
      setIsLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <h1 className="LoginPage-title">Log in to Nodepop</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <FormField
          type="email"
          name="email"
          label="email"
          className="loginForm-field"
          value={value.email}
          onChange={handleChange}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          value={value.password}
          onChange={handleChange}
        />
        <Button
          className="loginForm-submit"
          type="submit"
          disabled={isLoading || !value.email || !value.password}
        >
          Log in
        </Button>
      </form>
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: T.func.isRequired,
};


const ConnectedLoginPage = (props) => (
  <AuthContextConsumer>
    {(auth) => <LoginPage onLogin={auth.handleLogin} {...props} />}
  </AuthContextConsumer>
);

export default ConnectedLoginPage;