import React from "react";

const Contact = () => {
  return (
    <div className>
      <section className="about-section">
        <h1>About Tranquill Travel</h1>
        <p>
          At Tranquill Travel, our mission is to help you find peace and spend
          quality time in nature. We offer a range of services to cater to your
          needs, including meditation classes, yoga sessions, and curated tour
          packages.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our primary goal is to assist individuals in discovering tranquility
          and reconnecting with nature. Whether you're seeking solitude or
          looking to meet like-minded individuals, we have something for
          everyone.
        </p>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section">
        <h2>What We Offer</h2>
        <ul>
          <li>
            <h3>Meditation Classes</h3>
            <p>
              Join our online or offline meditation sessions to find your inner
              peace.
            </p>
          </li>
          <li>
            <h3>Yoga Classes</h3>
            <p>
              Our yoga classes are designed to help you balance your mind, body,
              and spirit.
            </p>
          </li>
          <li>
            <h3>Tour Packages</h3>
            <p>
              Explore the beauty of nature with our specially curated tour
              packages for individuals and families.
            </p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Join Us on a Journey to Peace</h2>
        <p>
          Discover a new way to relax and unwind. Connect with nature and
          yourself through our services.
        </p>
        <a href="/contact">Get Started</a>
      </section>
    </div>
  );
};

export default Contact;
