const WelcomeContainer = ({ userName }) => {
  return (
    <div>
      <p className="d-inline-block fs-5 fw-bold mb-0">Вітаю, {userName}!</p>
    </div>
  );
};

export default WelcomeContainer;
