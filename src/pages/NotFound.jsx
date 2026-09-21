import { Link } from "react-router-dom";
import SEOptimization from "../components/SEOptimization";

const styles = {
  page: {
    minHeight: "72vh",
    display: "grid",
    placeItems: "center",
    padding: "150px 24px 90px",
    background:
      "radial-gradient(circle at 50% 25%, rgba(255,107,91,.14), transparent 34%), #1b1b2f",
    color: "#ffffff",
    textAlign: "center",
  },
  content: {
    width: "min(680px, 100%)",
  },
  code: {
    display: "block",
    marginBottom: "14px",
    color: "#7fe6c4",
    fontSize: "clamp(4rem, 13vw, 8rem)",
    fontWeight: 800,
    lineHeight: 1,
  },
  heading: {
    margin: "0 0 16px",
    fontFamily: '"Sora", sans-serif',
    fontSize: "clamp(1.8rem, 5vw, 3rem)",
  },
  text: {
    margin: "0 auto 30px",
    maxWidth: "560px",
    color: "rgba(255,255,255,.68)",
    fontSize: "1rem",
    lineHeight: 1.8,
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
  },
  primary: {
    padding: "13px 22px",
    borderRadius: "999px",
    background: "#ff6b5b",
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: "none",
  },
  secondary: {
    padding: "13px 22px",
    border: "1px solid rgba(255,255,255,.22)",
    borderRadius: "999px",
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: "none",
  },
};

export default function NotFound() {
  return (
    <>
      <SEOptimization
        title="Page Not Found | Arbaj Technology"
        description="The requested page could not be found on the Arbaj Technology website."
        noindex
      />

      <main style={styles.page}>
        <div style={styles.content}>
          <span style={styles.code}>404</span>
          <h1 style={styles.heading}>Page Not Found</h1>
          <p style={styles.text}>
            The page may have been moved, removed, or the address may be
            incorrect. Use one of the links below to continue.
          </p>

          <div style={styles.actions}>
            <Link to="/" style={styles.primary}>
              Back to Home
            </Link>
            <Link to="/services" style={styles.secondary}>
              View Services
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
