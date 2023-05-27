import "./home.css";
import mockups from "../images/image-mockups.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="home-title">Next generation digital banking</h1>
        <p className="home-info">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="request">Request Invite</button>
      </div>
      <div className="home-img">
        <img src={mockups} alt="Four Phone Pictures" />
      </div>
    </section>
  );
};

export default Home;
