import "./advantages.css";

import API from "../images/icon-api.svg";
import Online from "../images/icon-online.svg";
import Budgetting from "../images/icon-budgeting.svg";
import Onboarding from "../images/icon-onboarding.svg";

const Advantages = () => (
  <section className="advantages">
    <div className="advantages-intro">
      <h2 className="advantages-title">Why choose Easybank?</h2>
      <p className="advantages-info">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
    </div>
    <div className="advantages-container">
      {advantagesData.map((advantage) => (
        <div className="advantage" key={advantage.title}>
          <img src={advantage.icon} alt={advantage.title} />
          <h3 className="advantage-title">{advantage.title}</h3>
          <p className="advantages-info">{advantage.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const advantagesData = [
  {
    title: "Online Banking",
    icon: Online,
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    title: "Simple Budgeting",
    icon: Budgetting,
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    title: "Fast Onboarding",
    icon: Onboarding,
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    title: "OpenAPI",
    icon: API,
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export default Advantages;
