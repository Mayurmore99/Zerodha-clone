export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h1 className="mb-5">The Zerodha Universe</h1>
        <p style={{ fontSize: "16px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row evenly v-align">
          <div className="col-4 p-3 mt-5">
            <img
              src="Media/smallcaseLogo.png"
              className="mb-3"
              style={{ width: "160px" }}
            />
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="Media/streakLogo.png"
              className="mb-3"
              style={{ width: "160px" }}
            />
            <p className="text-small text-muted">Algo & Strategy platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="Media/sensibullLogo.svg "
              className="mb-3"
              style={{ width: "160px" }}
            />
            <p className="text-small text-muted">Option Trading Platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="Media/zerodhaFundhouse.png"
              className="mb-3"
              style={{ width: "160px" }}
            />
            <p className="text-small text-muted">Asset Management</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="Media/goldenpiLogo.png"
              className="mb-3"
              style={{ width: "160px" }}
            />
            <p className="text-small text-muted">Bonds Tarding platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="Media/dittoLogo.png"
              className="mb-3"
              style={{ width: "160px" }}
            />
            <p className="text-small text-muted">Insurance</p>
          </div>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}
