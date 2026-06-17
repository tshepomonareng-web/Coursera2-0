function Footer() {
  return (
    <footer>
      <img src="/logo.svg" alt="Little Lemon logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <div>
        <h4>Contact</h4>
        <p>123 Lemon Street, City, Country</p>
        <p>contact@littlelemon.com</p>
      </div>
      <div>
        <h4>Social Media</h4>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;