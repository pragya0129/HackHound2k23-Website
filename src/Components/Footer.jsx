function Footer() {
  return (
    <footer>
      <div className="text-container">
        <h2>
          <img src="Images/map.png" alt="map" width="40px" /> Location
        </h2>
        <p>SRM Institute of Science and Technology</p>
        <p>Delhi-NCR Campus, Ghaziabad(U.P.)</p>
        <p>201204</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.3866712971326!2d77.53434647529548!3d28.797548875574968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51f5aadb701%3A0x39add03eb3926d26!2sSRM%20Institute%20of%20Science%20and%20Technology%20NCR%20Campus!5e0!3m2!1sen!2sin!4v1707643710550!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
