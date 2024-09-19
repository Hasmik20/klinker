import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const errorMsg = useRouteError();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back </button>
      <p className="active">{errorMsg.message}</p>
      Error
    </div>
  );
};

export default Error;
