import React from "react";
import "./Medi2.css";

const Medi2 = () => {
  return (
    <div className="medi2-container">
      <section className="medi2-section">
        <h2>What is Meditation?</h2>
        <p>
          Meditation is the way to take deep rest and be alert and conscious at
          the same time! It is the skill to calm the mind and get in touch with
          your inner joy. Meditation is the delicate art of doing nothing and
          letting go of all efforts to relax in your true nature, which is love,
          joy, and peace. The practice of meditation gives you deep rest. It is
          essential to reduce stress levels and maintain mental hygiene.
        </p>
      </section>

      <section className="medi2-quote">
        <p>
          Meditation is a journey from sound to silence, from movement to
          stillness. Meditation is food for the soul.
        </p>
        <cite>Gurudev Sri Sri Ravi Shankar</cite>
      </section>

      <section className="medi2-benefits">
        <h2>Benefits of Meditation</h2>
        <p>
          The benefits of meditation are manifold - a calm mind, focused
          attention, good concentration, mental clarity, balanced emotions,
          improved communication, new skills and talents, healing, relaxation,
          rejuvenation, and even the ability to attract good luck!
        </p>

        <div className="benefit-cards">
          <div className="benefit-card energy">
            <h3>More Bio-Energy</h3>
            <p>Meditation creates positive and harmonious energy around us.</p>
          </div>
          <div className="benefit-card health">
            <h3>Better Health</h3>
            <p>
              Meditation helps in hypertension, diabetes, heart problems, skin
              problems, nervous system problems and a number of other problems.
            </p>
          </div>
          <div className="benefit-card mood">
            <h3>Uplifted Mood</h3>
            <p>
              Meditation can help keep a pleasant mood. It is a big help in
              preventing many of the mental illness and physical illness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medi2;
