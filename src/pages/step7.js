import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./step7.css";
const Step7 = () => {
  return (
    <div className="step-7">
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="welcome-to-the">{`Welcome to the team! Get ready for an exciting journey. You'll receive a joining kit, hear from our leaders, and explore your benefits. `}</div>
      <Button className="button" variant="primary">
        Let's begin!
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default Step7;
