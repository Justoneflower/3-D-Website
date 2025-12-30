// Showcase.jsx
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import Model from "./Model";
import MaterialModel from "./MaterialModel";
import MaterialThread from "./MaterialThread";
import "./Showcase.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const textRef = useRef(null);

  /* ---------------- TYPING TEXT OBSERVER ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- FEATURE SECTION SCROLL REVEAL ---------------- */
  useGSAP(() => {
    gsap.fromTo(
      "#feature-section .reveal",
      { opacity: 0, x: -120 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#feature-section",
          start: "top center",
        },
      }
    );
  }, []);

  /* ---------------- METHOD SECTION SCROLL REVEAL ---------------- */
  useGSAP(() => {
    gsap.fromTo(
      "#method-section .method-reveal",
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: "#method-section",
          start: "top center",
        },
      }
    );
  }, []);

  /* ---------------- HANDLE COLOR CLICK ---------------- */
  const colors = [
    { name: "Black", value: "#000000" },
    { name: "Blue", value: "#0000ff" },
    { name: "Green", value: "#00ff00" },
    { name: "Red", value: "#ff0000" },
    { name: "Silver Metallic", value: "#c0c0c0" },
    { name: "Transparent", value: "#ffffff" },
    { name: "Pearl White", value: "#f8f8ff" },
    { name: "Yellow", value: "#ffff00" },
    { name: "Magenta", value: "#ff00ff" },
    { name: "Orange", value: "#ffa500" },
  ];

  const handleColorClick = (color) => {
    window.dispatchEvent(new CustomEvent("changeColor", { detail: color }));
  };

  return (
    <>
      {/* ================= 3D MODEL SECTION ================= */}
      <section className="model-section">
        <Canvas camera={{ position: [0, 1, 5], fov: 40 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </section>

      {/* ================= TYPING TEXT SECTION ================= */}
      <section className="text-section">
        <h1
          ref={textRef}
          className="typing-text"
          onAnimationEnd={(e) => e.target.classList.add("done")}
        >
          <b>ETMN</b><br />
          <b>❝</b>The future of 3-D printing.<b>❞</b>
        </h1>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section id="feature-section">
        <div className="feature-container">
          <div className="feature-text">
            <h2 className="reveal">Unlimited application potential.</h2>
            <p className="reveal">
              The power of the S series lies in its versatility. Explore new 3D
              printing applications using the widest choice of materials on the
              market – making them perfect for prototyping and manufacturing aids
              of all sizes.
            </p>
            <p className="reveal">
              They use 2.85 mm filament and unlock the full power of UltiMaker Cura
              to simplify your workflow.
            </p>
            <a href="#" className="learn-more reveal">
              Learn more →
            </a>
          </div>

          <div className="feature-image">
            <img src="/images/feature.jpg" alt="3D printing applications" />
          </div>
        </div>
      </section>

      {/* ================= MATERIAL SECTION ================= */}
      <section id="material-section">
        <h2 className="material-title">
          Choose your material from diverse options
        </h2>

        <div className="material-canvas">
          <Canvas camera={{ position: [0, 1, 5], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <MaterialModel />
              <MaterialThread />
            </Suspense>
          </Canvas>
        </div>

        <div className="color-palette">
          {colors.map((c) => (
            <div
              key={c.value}
              className="color-circle"
              style={{ backgroundColor: c.value }}
              title={c.name}
              onClick={() => handleColorClick(c.value)}
            />
          ))}
        </div>

        <div className="material-types">
          <div className="material-row">
            {[
              "PLA",
              "Tough PLA",
              "PETG",
              "ABS",
              "CPE",
              "CPE+",
              "NYLON",
              "POLYCARBONATE",
              "TPU 95A",
              "POLYPROPENE",
            ].map((m) => (
              <span key={m} className="material-pill">{m}</span>
            ))}
          </div>

          <div className="material-dual-row">
            <div className="material-subgroup">
              <p className="material-subheading">Support Materials</p>
              <div className="material-row">
                {["PVA", "BREAKAWAY"].map((m) => (
                  <span key={m} className="material-pill">{m}</span>
                ))}
              </div>
            </div>

            <div className="material-subgroup">
              <p className="material-subheading">Composite Materials</p>
              <div className="material-row">
                {["PET CF", "NYLON CF"].map((m) => (
                  <span key={m} className="material-pill">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= METHOD SERIES SECTION ================= */}
      <section id="method-section">
        <div className="method-container">
          <div className="method-image">
            <img
              src="/images/method-series.png"
              alt="Method Series Printers"
            />
          </div>

          <div className="method-text">
            <h2 className="method-reveal">Method Series Printers</h2>
            <p className="method-reveal">
              The Method series is designed for the high-quality production of
              tools and end-use parts. Their actively heated build chambers,
              direct drive, and rigid metal frame make it easy to 3D print a
              specific range of engineering-grade materials with high
              repeatability and dimensional accuracy using 1.75 mm filament.
            </p>
            <a href="#" className="method-link method-reveal">
              Learn more →
            </a>
          </div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
<footer className="site-footer">
  <p>
    Designed with creativity © <span>Kusum Indoria</span>. All copyrights reserved.
  </p>
</footer>

    </>
  );
}
