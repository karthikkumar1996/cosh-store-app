import "./AboutArtist.scss";

export const AboutArtist = () => {
  return (
    <div className="about-section">
      <img src="./assets/images/anjali-bio.jpg" alt="Anjali-Bio" />
      <div className="quote-section">
        <blockquote>
          The man who comes back through the door in the wall will never be
          quite the same as the man who went out.
        </blockquote>
        <cite>Anjali Singh</cite>
      </div>
    </div>
  );
};
