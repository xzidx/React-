function Home() {

    async function fetchData() {
        const response = await fetch(".data/products.json");
        const data = await response.json();
        return data;
        
    }
console.log(fetchData());
    return (
        <div>
            {/* Main Heading */}
            <h1>Welcome to My Website</h1>

      {/* Introduction */}
      <section>
        <h2>About Us</h2>
        <p>
          Welcome to our website. We provide useful information
          and services for our users.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2>Our Features</h2>
        <ul>
          <li>Easy to use</li>
          <li>Simple design</li>
          <li>Responsive layout</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact Us</h2>
        <p>Email: example@gmail.com</p>
      </section>
    </div>
  );
}

export default Home;