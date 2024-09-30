export default function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="Media/homeHero.png" alt="Hero Image" className="mb-5"></img>
        <h1 className="mt-3 ">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          class="btn btn-primary p-2 fs-5 "
        >
          Sign up For free{" "}
        </button>
      </div>
    </div>
  );
}
