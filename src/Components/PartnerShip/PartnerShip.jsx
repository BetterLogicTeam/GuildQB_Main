import React from "react";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Video from "../../Assets/official.MP4";
import image1 from "../../Assets/General images/x2/Block 3.png";
import piechart from "../../Assets/General images/x1/piechart.png";
import one from "../../Assets/one.jpg";
import two from "../../Assets/two.png";
import three from "../../Assets/threee.png";
import six from "../../Assets/four.jpg";
import four from "../../Assets/five.jpg";
import five from "../../Assets/six.jpg";

import c1 from "../../Assets/General images/x1/block 4 - characters/photo-1.png";
import c2 from "../../Assets/General images/x1/block 4 - characters/photo-2.png";
import c3 from "../../Assets/General images/x1/block 4 - characters/photo-3.png";
import c4 from "../../Assets/General images/x1/block 4 - characters/photo-4.png";
import c5 from "../../Assets/General images/x1/block 4 - characters/photo-5.png";
import c6 from "../../Assets/General images/x1/block 4 - characters/photo-6.png";
import c7 from "../../Assets/General images/x1/block 4 - characters/photo-7.svg";
import c8 from "../../Assets/General images/x1/block 4 - characters/photo-8.png";
import c9 from "../../Assets/General images/x1/block 4 - characters/photo-9.png";
import c10 from "../../Assets/General images/x1/block 4 - characters/photo-10.png";
import c11 from "../../Assets/General images/x1/block 4 - characters/photo-11.png";
import c22 from "../../Assets/General images/x1/block 4 - characters/photo-22.png";
import c33 from "../../Assets/General images/x1/block 4 - characters/photo-33.png";
import c44 from "../../Assets/General images/x1/block 4 - characters/photo-44.png";
import c55 from "../../Assets/General images/x1/block 4 - characters/photo-55.png";
import c66 from "../../Assets/General images/x1/block 4 - characters/photo-66.png";
import c77 from "../../Assets/General images/x1/block 4 - characters/photo-77.png";
import c88 from "../../Assets/General images/x1/block 4 - characters/photo-88.png";
import c99 from "../../Assets/General images/x1/block 4 - characters/photo-99.png";
import main from "../../Assets/General images/x1/block 4 - characters/main.png";
import mainmob from "../../Assets/backgrounds/mainmob.png";

import mainhero from "../../Assets/backgrounds/herologo.png";
import Opensee from "../../Assets/backgrounds/opensea.png";
import Discord from "../../Assets/backgrounds/discord.png";

import play1 from "../../Assets/General images/x1/block 5 - image 1.png";
import play2 from "../../Assets/General images/x1/block 5 - image 2.png";
import play3 from "../../Assets/General images/x1/block 5 - image 3.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import box from "../../Assets/backgrounds/backgrounds/boxphoto.png";

import images from "../../Assets/backgrounds/Capture.png";
import clearlogo from "../../Assets/backgrounds/clearlogo.png";

import $ from "jquery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { PieChart } from "react-minimal-pie-chart";
import "swiper/css";
import "./PartnerShip.css";
import Roadmap from "../roadmap/roadmap";

export default function PartnerShip() {
  const swiperRef = React.useRef(null);
  const swiperRef2 = React.useRef(null);
  const Swal = require("sweetalert2");
  const handleClick = () => {
    window.location.href = "https://www.kisaragi-guildqb.com/#/";
  };
  $(document).ready(function () {
    // pass the YouTube video ID into the iframe template on click/tap
    $("a.video-thumb").click(function () {
      // Grab the video ID from the element clicked
      var id = $(this).attr("data-youtube-id");

      var autoplay = "?autoplay=1";

      // Don't show the 'Related Videos' when the video ends
      var related_no = "&rel=0";

      // String the ID and param variables together
      var src = "//www.youtube.com/embed/" + id + autoplay + related_no;

      $("#youtube").attr("src", src);
      return false;
    });

    /* Modal View
      -------------------------------------------------------------------------------*/
    function toggle_video_modal() {
      // Open the Video Modal
      $(".js-trigger-modal").on("click", function (event) {
        event.preventDefault();
        $("body").addClass("show-video-modal");
      });

      // Close and Reset the Video Modal
      $("body").on(
        "click",
        ".close-video-modal, .video-modal .overlay",
        function (event) {
          event.preventDefault();

          $("body").removeClass("show-video-modal");

          $("#youtube").attr("src", "");
        }
      );
    }
    toggle_video_modal();
  });

  React.useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
    if (swiperRef2.current) {
      swiperRef2.current.swiper.autoplay.start();
    }
  }, []);
  return (
    <>
      <Container fluid className="blueshadeg">
        <Container>
          <h1
            className="news_title"
            style={{ marginBottom: "50px", fontSize: "72px" }}
          >
            News
          </h1>
          <Row>
            <Col className="col-lg-4">
              <Card className="crd ">
                <Card.Img
                  style={{ borderRadius: "40px" }}
                  variant="top"
                  src={one}
                  className="crd_picss"
                />
                <Card.Body>
                  <Card.Title className="cardt">
                    {/* GuildFi and GuildQB, the world's top gaming guilds with over
                    280,000 users, hold community event */}
                    GuildQB publishes Q2 2023 report! : covers asset management
                    performance and KISARAGI updates
                  </Card.Title>
                  <Card.Text className="cardp">
                    GuildQB, operated by Social Finance Limited, the guild for
                    blockchain and web3 games, has published its report for the
                    second quarter (Q2) of 2023 ...
                    <a
                      href="https://medium.com/@guildqb/guildqb-publishes-q2-2023-report-covers-asset-management-performance-and-kisaragi-updates-52d9919837dc"
                      className="cardr"
                      variant="primary"
                    >
                      Read More
                    </a>
                  </Card.Text>

                  <p className="cardd">
                    <i
                      style={{ marginRight: "10px" }}
                      class="fa-solid fa-clock ico6"
                    ></i>{" "}
                    July 18, 2023, 11:41 a.m.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4">
              <Card className="crd">
                <Card.Img
                  style={{ borderRadius: "40px" }}
                  variant="top"
                  src={two}
                  className="crd_picss"
                />
                <Card.Body>
                  <Card.Title className="cardt">
                    GuildQB Announces Collaboration with Polygon
                  </Card.Title>
                  <Card.Text className="cardp">
                    GuildQB, the next generation GameFi platform operated by
                    Social Finance Limited, is pleased to announce its
                    collaboration with Polygon...{" "}
                    <a
                      href="https://prtimes.jp/main/html/rd/p/000000007.000109511.html"
                      className="cardr"
                      variant="primary"
                    >
                      Read More
                    </a>{" "}
                  </Card.Text>
                  <p className="cardd">
                    <i
                      style={{ marginRight: "10px" }}
                      class="fa-solid fa-clock ico6"
                    ></i>{" "}
                    January 17, 2023, 11:00 a.m.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4">
              <Card className="crd">
                <Card.Img
                  style={{ borderRadius: "40px" }}
                  variant="top"
                  src={three}
                  className="crd_picss"
                />
                <Card.Body>
                  <Card.Title className="cardt">
                    GuildQB CEO Pyrolysis talks about the future at HANEDA EXPO:
                    web3 guilds in a new era
                  </Card.Title>
                  <Card.Text className="cardp">
                    Pyrolysis, CEO of Social Finance Limited's GuildQB, will be
                    speaking at "HANEDA WEB3.0 EXPO 2023 ~The bridge to the
                    world through ...{" "}
                    <a
                      href="https://prtimes.jp/main/html/rd/p/000000017.000109511.html"
                      className="cardr"
                      variant="primary"
                    >
                      Read More
                    </a>
                  </Card.Text>
                  <p className="cardd">
                    <i
                      style={{ marginRight: "10px" }}
                      class="fa-solid fa-clock ico6"
                    ></i>{" "}
                    February 8, 2023 4:50 p.m.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4">
              <Card className="crd">
                <Card.Img
                  style={{ borderRadius: "40px" }}
                  variant="top"
                  src={six}
                  className="crd_picss"
                />
                <Card.Body>
                  <Card.Title className="cardt">
                    GuildQB：Community Update|Q1 2023
                  </Card.Title>
                  <Card.Text className="cardp">
                    During the first quarter of 2023, GuildQB dedicated its
                    efforts to growing the community and promoting the Web3 game
                    with the objective of contributing to the gaming industry
                    and community ...{" "}
                    <a
                      href="https://medium.com/@guildqb/guildqb-community-update-q1-2023-13c8771211c1"
                      className="cardr"
                      variant="primary"
                    >
                      Read More
                    </a>
                  </Card.Text>
                  <p className="cardd">
                    <i
                      style={{ marginRight: "10px" }}
                      class="fa-solid fa-clock ico6"
                    ></i>{" "}
                    April 29, 2023, 11:02 a.m.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4">
              <Card className="crd">
                <Card.Img
                  style={{ borderRadius: "40px" }}
                  variant="top"
                  src={four}
                  className="crd_picss"
                />
                <Card.Body>
                  <Card.Title className="cardt">
                    GuildQB’s First AI-Generated NFT Masterpiece 如月-KISARAGI-
                    to be Released on February 24th!
                  </Card.Title>
                  <Card.Text className="cardp">
                    GuildQB, the web3 gaming guild, is excited to announce the
                    release of 如月-KISARAGI-, the AI-generated NFT with
                    stunning graphic, on 24th February ...{" "}
                    <a
                      href="https://medium.com/@guildqb/guildqbs-first-ai-generated-nft-masterpiece-%E5%A6%82%E6%9C%88-kisaragi-to-be-released-on-february-24th-6b9ac45f6830"
                      className="cardr"
                      variant="primary"
                    >
                      Read More
                    </a>
                  </Card.Text>

                  <p className="cardd">
                    <i
                      style={{ marginRight: "10px" }}
                      class="fa-solid fa-clock ico6"
                    ></i>{" "}
                    Feburary 29, 2023, 12:12 p.m.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4">
              <Card className="crd">
                <Card.Img
                  style={{ borderRadius: "40px" }}
                  variant="top"
                  src={five}
                  className="crd_picss"
                />
                <Card.Body>
                  <Card.Title className="cardt">
                    NFT "KISARAGI" published by GuildQB sold out in 37 minutes!
                  </Card.Title>
                  <Card.Text className="cardp">
                    GuildQB, a Web3 gaming guild operated by Social Finance
                    Limited, is pleased to announce that its recently issued
                    KISARAGI - KISARAGI, a uniquely ...{" "}
                    <a
                      href="https://prtimes.jp/main/html/rd/p/000000020.000109511.html"
                      className="cardr"
                      variant="primary"
                    >
                      Read More
                    </a>{" "}
                  </Card.Text>

                  <p className="cardd">
                    <i
                      style={{ marginRight: "10px" }}
                      class="fa-solid fa-clock ico6"
                    ></i>{" "}
                    February 24, 2023, 10:49 p.m.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <button
            href="https://prtimes.jp/main/html/searchrlp/company_id/109511"
            className="btn btn-lg news_bbtn "
            style={{
              width: "25%",
              borderRadius: "30px",
              background:
                "linear-gradient(93.19deg, #20AFFF 5.25%, #A8E0FF 96.59%)",
            }}
          >
            <i style={{ marginRight: "10px" }} class="fa-brands fa-medium"></i>
            Read More
          </button>
        </Container>
      </Container>

      <Container fluid className="blueshadeg">
        <h2 style={{ marginBottom: "10%" }}>Partnership</h2>

        <Swiper
          spaceBetween={0}
          slidesPerView={"3"}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={2000}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c1}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div className="hex4">
                <img
                  src={c2}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c3}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c4}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c5}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <div className="Slider_img">
                  <img
                    src={c6}
                    alt="imagem"
                    title="imagem"
                    // className="crosole_pic"
                    width="80%"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <div className="Slider_img">
                  <img
                    src={c7}
                    alt="imagem"
                    title="imagem"
                    // className="crosole_pic"
                    width="80%"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c8}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c9}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c10}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={0}
          slidesPerView={"2"}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={2000}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          className="mySwiper second_swpr"
        >
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c11}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div className="hex4">
                <img
                  src={c22}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c33}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c44}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c55}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c66}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c77}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c88}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="hex_upper">
              <div class="hex4">
                <img
                  src={c99}
                  alt="imagem"
                  title="imagem"
                  className="crosole_pic"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          className="endd_uperr"
          style={{
            marginTop: "15%",
            marginRight: "10px",
            marginLeft: "10px",
            borderRadius: "71px",
            padding: "1px",
          }}
        >
          <div
            style={{
              borderRadius: "71px",
              height: "76px",
              backgroundColor: "#130732",
              // background: "rgba(18, 7, 49, 0.47)",
              backdropFilter: "blur(10px)",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <span className="footertext">
              © Copyright 2023 GuildQB. All rights reserved
            </span>
          </div>
        </div>
      </Container>
    </>
  );
}
