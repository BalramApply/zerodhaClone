import React from "react";
import styles from "./Stats.module.css";

function Stats() {
  return (
    <div className={`p-3 ${styles.container}`}>
      <div className="row p-2">
        <div className={ `col-6 p-5 ${styles.statsAbout}`}>
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+lakh crores
            worth of equity investments
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications,
            High quality apps that you use at your pace the way you like
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and kill Switch, we don't just
            facilitate transactions, but actively help you do better with tour
            money
          </p>
        </div>
        <div className={ `col-6 ${styles.statsImage}`}>
          <img src="media/images/ecosystem.png" className={styles.ecosystem} />
          <div className="text-center">
            <a href="" className={`mx-5 ${styles.linksStyle}`}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
            <a href="" className={styles.linksStyle}>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;