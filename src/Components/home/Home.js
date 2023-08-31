import React, { Component } from "react";

import "./style.css";

// ES6 Modules or TypeScript

import main from "../../Assets/General images/x1/block 4 - characters/main.png";
import mainmob from "../../Assets/backgrounds/mainmob.png";
import c11 from "../../Assets/General images/x1/block 4 - characters/photo-11.png";

import mainhero from "../../Assets/backgrounds/herologo.png";
import Opensee from "../../Assets/backgrounds/opensea.png";
import Discord from "../../Assets/backgrounds/discord.png";
import { BsDiscord } from "react-icons/bs";

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

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PieChart } from "react-minimal-pie-chart";
import "swiper/css";

import Roadmap from "../roadmap/roadmap";
import PartnerShip from "../PartnerShip/PartnerShip";
SwiperCore.use([Autoplay]);

const Home = () => {
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
      <Container fluid className="blueshade mttaa">
     

        <div className="container-fluid main_bg mt-5">
          <div className="row justify-content-center align-items-center ">
            <div className="col-md-6  ">
              <div>
                {" "}
                <h1 className="margin text-start main_heading">
                  Blockchain Gaming <br />
                  Guild QB [Quest & Battle]
                </h1>
                <h5 className="headingplay text-start">
                  Play, fight, meet, the future of games is here
                </h5>
              </div>

              <div className="row my-4">
                <div className="col-md-6">
                  {" "}
                  <Button
                    href="https://opensea.io/collection/ru-yue-kisaragi"
                    className="opensea  w-100"
                  >
                    <img
                      src="opensea-logo.svg"
                      alt="..."
                      className="openzep me-2"
                    />
                    <span className="text-white fw-bold ">OpenSea</span>
                  </Button>
                </div>
                <div className="col-md-6">
                  <Button
                    href="https://discord.com/invite/BNjFBTgpMt"
                    className=" opensea w-100"
                  >
                    <BsDiscord className="discord" />
                    <span className="text-white fw-bold ">Discord</span>
                  </Button>
                </div>
              </div>
              <p className="para">
                GuildQB is the singularity point from web 2.0 to web 3.0 as a
                blockchain gaming guild.
             It is a gaming DAO/community that supports the seamless
                transition to web 3.0 and the 
                challenges of the new era.
              </p>

              <div className="social-icons">
                <div class="poligon">
                  <a
                    href="https://twitter.com/GuildQB"
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    <div className="inner_">
                      <i class="fa-brands fa-twitter mtttt soc"></i>
                    </div>
                  </a>
                </div>

                <div class="poligon">
                  <a
                    href="https://www.youtube.com/channel/UCkfd5R9q8RyxUYE1abTfpUg"
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    <div className="inner_">
                      <i class="fa-brands fa-youtube mtttt soc"></i>
                    </div>
                  </a>
                </div>

                <div class="poligon">
                  <a
                    href="https://www.instagram.com/qb_guild/?__coig_restricted=1"
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    <div className="inner_">
                      <i class="fa-brands fa-instagram mtttt   soc"></i>
                    </div>
                  </a>
                </div>

                <div class="poligon">
                  <a
                    href="https://www.facebook.com/GuildQb/"
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    <div className="inner_">
                      <i class="fa-brands fa-facebook  mtttt soc"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6  mainaaaaa">
              <img src="clr_log.png" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </Container>

      <div className="container-fuild disktop">
        <h2 className="sss">GuildQB Mission</h2>
        <h5 className="cgameing" style={{ marginBottom: "50px" }}>Comprehensive Gaming Ecosystem</h5>

        {/* <img src="content.png" alt="" /> */}
        <div className="container">

        <img src="co.svg" alt="" className="w-100" />
        </div>
        {/* <div className="row justify-content-center align-items-center">
          <div className="col-md-4 first_row">
            <div className="d-flex">
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="sch.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>scholarship</span>
                </div>
              </div>
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="game.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>P2E Gamers</span>
                </div>
              </div>
            </div>
            <div className="d-flex hopee ">
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="comuni.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>Communities</span>
                </div>
              </div>
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="sec.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>Security</span>
                </div>
              </div>
            </div>
            <div className="d-flex mtssa">
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="soicalfi.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>SocialFi</span>
                </div>
              </div>
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="gamefi.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>GameFi Projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 middle">
            <div class="hexx_upper classss">
              <div class="hex444">
                <img
                  src="guild_lo.png"
                  alt="imagem"
                  title="imagem"
                  className="guuilde"
                />
                <span>
                  A Comprehensive <br /> Gaming <br />
                  Ecosystem
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4 classjs">
            <div className="d-flex">
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="lauch.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>Launchpad</span>
                </div>
              </div>
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="multi.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>Multi-Chain</span>
                </div>
              </div>
            </div>
            <div className="d-flex hope">
              <div className="hexx_upper">
                <div class="hex44">
                  <img
                    src="nfto.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>NFT Owners</span>
                </div>
              </div>
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="dao.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>DAO Governance</span>
                </div>
              </div>
            </div>
            <div className="d-flex mtssa">
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="hnd.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>Investors</span>
                </div>
              </div>
              <div class="hexx_upper">
                <div class="hex44">
                  <img
                    src="nft.png"
                    alt="imagem"
                    title="imagem"
                    className="mission_img_width"
                  />
                  <span>NFT</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Container
        className="bg_ss mobile"
        fluid
        style={{ paddingTop: "0px", paddingBottom: "70px" }}
      >
        <Row>
          <Col xs={12} md={2}></Col>
          <Col xs={12} md={8}>
            <h2 className="sss">GuildQB Mission</h2>
            <h5 style={{ marginBottom: "50px" }}>
              Comprehensive Gaming Ecosystem
            </h5>
          </Col>
          <Col xs={12} md={2}></Col>
        </Row>
        <div className="bgggggg"> </div>
        <div className="bggggg"> </div>
        <img width="100%" className="mainimgh" src={main} alt=".." />
        <img width="100%" className="mainmob" src={mainmob} alt=".." />
      </Container>
      <h2 className="gui_nft">GuildQB NFT</h2>
      <Container
        fluid
        className="playearn"
        style={{ paddingTop: "70px", paddingBottom: "150px" }}
      >
        <Container fluid className="boxshade">
          <Row>
            <Col
              style={{ marginTop: "12%", paddingLeft: "50px" }}
              className="left"
              xs={12}
              md={6}
            >
              <h2 className="kisar">如月-KISARAGI-</h2>
              <p className="kis">
                "KISARAGI" is an NFT released by GuildQB, a social web3 platform
                specialized in NFT games and a community of NFT game players.
              </p>
              <Row
                style={{ marginTop: "20px", marginBottom: "6px" }}
                className="left"
              >
                <Col xs={12} md={12}>
                  <button onClick={handleClick} className="walletbtn soldout">
                    <span
                      style={{
                        textAlign: "center",
                        marginLeft: "35%",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "150%",
                        textAlign: "center",
                        textTransform: "uppercase",
                      }}
                    >
                      Sold Out
                    </span>
                  </button>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={6}>
              <img className="img1" src={box} alt="..." />
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ marginTop: "50px" }} className="boxshade2 ">
          <h3 style={{ marginTop: "50px" }}>GuildQB Roadmap</h3>
          <h5 style={{ marginBottom: "50px" }}>Creating New Value</h5>
          {/* <div className="roadmap-container"></div> */}
          <Container>
            <Row>
              <Col
                md={3}
                className="mob"
                style={{ marginBottom: "10px", padding: "0px 10%" }}
              >
                <div className="circle">
                  <img className="clearimage" src={clearlogo} alt="..." />
                </div>
                {/* <div style={{width:'20px'}}>
    <div class="triangle-down"></div>
    </div> */}
              </Col>
              <Col
                md={3}
                className="mob"
                style={{ marginBottom: "10px", padding: "0px 10%" }}
              >
                <div className="circle">
                  <img className="clearimage" src={clearlogo} alt="..." />
                </div>
                {/* <div style={{width:'20px'}}>
    <div class="triangle-down"></div>
    </div> */}
              </Col>
              <Col
                md={3}
                className="mob"
                style={{ marginBottom: "10px", padding: "0px 10%" }}
              >
                <div className="circle">
                  <img className="clearimage" src={clearlogo} alt="..." />
                </div>
                {/* <div style={{width:'20px'}}>
    <div class="triangle-down"></div>
    </div> */}
              </Col>
              <Col
                md={3}
                className="mob"
                style={{ marginBottom: "10px", padding: "0px 10%" }}
              >
                <div className="circle">
                  <img className="clearimage" src={clearlogo} alt="..." />
                </div>
                {/* <div style={{width:'20px'}}>
    <div class="triangle-down"></div>
    </div> */}
              </Col>
            </Row>
          </Container>
          <Container className="pbottom">
            <div className="line">
              <div className="dot"></div>
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>

            <Row className="lineleft mt-3">
              <div className="linemb_s"></div>
              <div className="linemb_ss"></div>
              <div className="linemb_sss"></div>
              <div className="linemb_ssss"></div>
              <Col className="left" xs={12} md={3}>
                <div className="roadbox">
                  <h3
                    className="hdbtn"
                    style={{
                      color: "#00D1FF",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "20px",
                    }}
                  >
                    Phase 1: INITIAL BUILD
                  </h3>
                  <p className="pra">
                    . GuildQB Community Launches Social Creation
                  </p>
                  <p className="pra">. Partnership with the Gaming Guild</p>
                  <p className="pra">. Partnership with GameFi/P2E</p>
                  <p className="pra">
                    . Sponsorship of the world's first guild tournament
                  </p>
                </div>
              </Col>
              <Col className="left" xs={12} md={3}>
                <div className="roadbox">
                  <h3
                    className="hdbtn"
                    style={{
                      color: "#00D1FF",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "20px",
                    }}
                  >
                    Phase 2: LAUNCH
                  </h3>

                  <p className="pra">. NFT's Official Announcement </p>
                  <p className="pra">. White Paper Released</p>
                  <p className="pra">. Exhibited at Tokyo Game Show 2022 </p>
                  <p className="pra">. Official website released</p>
                  <p className="pra">. User mission page released (QB Quest)</p>
                </div>
              </Col>
              <Col className="left" xs={12} md={3}>
                <div className="roadbox">
                  <h3
                    className="hdbtn"
                    style={{
                      color: "#00D1FF",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "20px",
                      textAlign: "center",
                    }}
                  >
                    Phase 3: R&D DEVELOPMENT
                  </h3>

                  <p className="pra">. NFT's Official Announcement</p>
                  <p className="pra" style={{ lineHeight: "15px" }}>
                    . White Paper Released
                  </p>
                  <p className="pra">. Exhibited at Tokyo Game Show 2022 </p>
                  <p className="pra">. Official website released</p>
                  <p className="pra">. User mission page released (QB Quest)</p>
                </div>
              </Col>
              <Col className="left" xs={12} md={3}>
                <div className="roadbox">
                  <h3
                    className="hdbtn"
                    style={{
                      color: "#00D1FF",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "20px",
                    }}
                  >
                    Phase４: ADVANCED BUILD
                  </h3>
                  <p className="pra">. NFT's Official Announcement </p>
                  <p className="pra">. White Paper Released</p>
                  <p className="pra">. Exhibited at Tokyo Game Show 2022 </p>
                  <p className="pra">. Official website released</p>
                  <p className="pra">. User mission page released (QB Quest)</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
      <PartnerShip />
    </>
  );
};

export default Home;
