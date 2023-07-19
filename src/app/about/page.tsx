import { css } from "../../../styled-system/css";

export default function About() {
  return (
    <section>
      <h2
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
        })}
      >
        About
      </h2>
      <div>
        <p>こちらはアバウトページです。</p>
      </div>
    </section>
  );
}
