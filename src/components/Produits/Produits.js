import React, { useEffect } from "react";
import "../../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "./Produits.css";
import { Carousel } from "react-bootstrap";
import green_yellow_cable from "../../images/Produits/green_yellow_cable.jpg";
import blue_cable from "../../images/Produits/blue_cable.jpg";
import black_orange_cable from "../../images/Produits/black_orange_cable.jpg";
import colorful_mini_cables from "../../images/Produits/colorful_mini_cables.jpg";
import colorful_mixed_mini_cables from "../../images/Produits/colorful_mixed_mini_cables.jpg";
import electrical_wire from "../../images/Produits/electrical_wire.jpg";
import orange_electrical_wires from "../../images/Produits/orange_electrical_wires.jpg";
import electric_wires_with_terminals from "../../images/Produits/electric_wires_with_terminals.jpg";
import joining_electrical_wires from "../../images/Produits/joining_electrical_wires.jpg";

const Produits = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="sec-produits" id="produits">
      <h2 data-aos="fade-up" className="section-title">
        Produits
      </h2>
      <Carousel data-aos="fade-up" variant="dark" style={{ height: "500px" }}>
        <Carousel.Item>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img
                  src={green_yellow_cable}
                  class="card-img-top"
                  alt="green_yellow cable"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={blue_cable} class="card-img-top" alt="blue_cable" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={black_orange_cable}
                  class="card-img-top"
                  alt="black_orange_cable"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img
                  src={colorful_mini_cables}
                  class="card-img-top"
                  alt="colorful_mini_cables"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={colorful_mixed_mini_cables}
                  class="card-img-top"
                  alt="colorful_mixed_mini_cables"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={orange_electrical_wires}
                  class="card-img-top"
                  alt="orange_electrical_wires"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img
                  src={electrical_wire}
                  class="card-img-top"
                  alt="electrical_wire"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={electric_wires_with_terminals}
                  class="card-img-top"
                  alt="electric_wires_with_terminals"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={joining_electrical_wires}
                  class="card-img-top"
                  alt="joining_electrical_wires"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Produits;
