import image from "./assets/image-qr-code.png";

export const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="img-box">
          <img src={image} />
        </div>
        <div className="text-box">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};
