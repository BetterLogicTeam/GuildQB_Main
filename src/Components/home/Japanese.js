import React, { Component } from "react";

import "./style.css";
import { BsDiscord } from "react-icons/bs";

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
import c7 from "../../Assets/General images/x1/block 4 - characters/photo-7.svg";

import c1 from "../../Assets/General images/x1/block 4 - characters/photo-1.png";
import c2 from "../../Assets/General images/x1/block 4 - characters/photo-2.png";
import c3 from "../../Assets/General images/x1/block 4 - characters/photo-3.png";
import c4 from "../../Assets/General images/x1/block 4 - characters/photo-4.png";
import c5 from "../../Assets/General images/x1/block 4 - characters/photo-5.png";
import c6 from "../../Assets/General images/x1/block 4 - characters/photo-6.svg";
// import c7 from '../../Assets/General images/x1/block 4 - characters/photo-7.png'
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
import box from "../../Assets/backgrounds/backgrounds/boxphoto.png";
import mainhero from "../../Assets/backgrounds/herologo.png";
import Opensee from "../../Assets/backgrounds/opensea.png";
import Discord from "../../Assets/backgrounds/discord.png";
// import c6 from '../../Assets/General images/x1/block 4 - characters/photo-6.png'
import ico1 from "../../Assets/General images/x1/partners logo/Frame 78.png";
import ico2 from "../../Assets/General images/x1/partners logo/image 10.png";
import ico3 from "../../Assets/General images/x1/partners logo/image 11.png";
import ico4 from "../../Assets/General images/x1/partners logo/image 12.png";
import ico5 from "../../Assets/General images/x1/partners logo/image 13.png";
import ico6 from "../../Assets/General images/x1/partners logo/image 4.png";
import ico7 from "../../Assets/General images/x1/partners logo/image 5.png";
import ico8 from "../../Assets/General images/x1/partners logo/image 6.png";
import ico9 from "../../Assets/General images/x1/partners logo/image 7.png";
import ico10 from "../../Assets/General images/x1/partners logo/image 8.png";
import ico11 from "../../Assets/General images/x1/partners logo/image 9.png";

import play1 from "../../Assets/General images/x1/block 5 - image 1.png";
import play2 from "../../Assets/General images/x1/block 5 - image 2.png";
import play3 from "../../Assets/General images/x1/block 5 - image 3.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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

const Japanese = () => {
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
      <Container fluid className="blueshade">
        {/* <Container fluid  style={{width:'90%'}}>
            <Row style={{ height: "100%" ,textAlign:'left' }}>
              <Col xs={12} md={8}>
                <h1 className='margin'>
                  Blockchain Gaming<br />Guild QB [Quest & Battle]
                </h1>
                <h5 className='headingplay'>
                遊ぶ、戦う、出会う、ゲームの未来はここにある。
                </h5>
            
               
                <Row className="leftSocial">
                <Col xs={12} md={12}>
                  <Button href='https://opensea.io/collection/ru-yue-kisaragi'  className="opensea">
                    <img  src={Opensee} alt="..." className='openzep'/>
                  </Button>
                  <Button href='https://discord.com/invite/BNjFBTgpMt' className="mright1 opensea" >
                    <img  src={Discord} alt="..."  className='openzep1'/>
                  </Button>
                </Col>
          
              </Row>
              
              
                <p className="para">
                GuildQBは、Web3ゲームに特化したソーシャルWeb3プラットフォーム、およびNFTゲー<br />ムプレイヤーによるコミュニティです
                </p>

                <div style={{ textAlign: "left" }} className="social-icons">
               
                <a className="ico hex4" href="https://twitter.com/GuildQB" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px',  borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)'}}>
                  <i class="fa-brands fa-twitter soc" ></i>
                  <div className="tooltip">Twitter</div>
                </a>
                <a className="ico hex4" href="https://www.youtube.com/channel/UCkfd5R9q8RyxUYE1abTfpUg" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-youtube soc" ></i>
                  <div className="tooltip">YouTube</div>
                </a>
                <a className="ico hex4" href="https://www.instagram.com/qb_guild/?__coig_restricted=1" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-instagram  soc"  ></i>
                  <div className="tooltip">INSTAGRAM</div>
                </a>
                <a className="ico hex4" href="https://www.facebook.com/GuildQb/" style={{background: 'linear-gradient(180deg, rgba(242, 0, 220, 0.16) 0%, rgba(130, 23, 244, 0.16) 100%)',width: '60px',display: 'inline-block',height: '60px'}}>
                  <i class="fa-brands fa-facebook  soc"  ></i>
                  <div className="tooltip">FACEBOOK</div>
                </a>
               
              </div>
              </Col>
              <Col xs={12} md={4}>
              <Card.Img
                className="mobile"
                style={{ width: "100%", borderRadius: "100px" ,marginTop:'1%'  }}
                variant="top"
                src={mainhero}
              />
              </Col>
            </Row>
  </Container> */}
        <Container fluid className="blueshade mttaa">
          <div className="container-fluid main_bg mt-5">
            <div className="row justify-content-center align-items-center ">
              <div className="col-md-6  ">
                <div>
                  {" "}
                  <h1 className="margin new_main_heading_here text-start main_heading">
                    Blockchain Gaming Guild QB [Quest & Battle]
                  </h1>
                  <h5 className="headingplay text-start">
                    遊ぶ、戦う、出会う、ゲームの未来はここにある。
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
                      className=" opensea  new_herheq w-100"
                    >
                      <BsDiscord className="discord" />
                      <span className="text-white fw-bold ">Discord</span>
                    </Button>
                  </div>
                </div>
                <p className="para">
                  GuildQBは、Web3ゲームに特化したソーシャルWeb3プラットフォーム、およびNFTゲームプレイヤーによるコミュニティです
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
      </Container>

      {/* <Container fluid style={{paddingTop:'0px',paddingBottom:'70px'}} >
<Row>
  <Col  xs={12} md={2}></Col>
  <Col xs={12} md={8}>
  <h2>GuildQB Mission</h2>
<h5 style={{marginBottom:'50px'}}>総合的なゲーミングエコシステム</h5>
  

  
  </Col>
  <Col  xs={12} md={2}></Col>
</Row>
<img width='100%' className='mainimgh' src={main} alt='..' />
<img width='100%' className='mainmob' src={mainmob} alt='..' />
</Container> */}
      <div className="container-fuild disktop">
        <h2 className="sss">GuildQB Mission</h2>
        <h5 className="cgameing" style={{ marginBottom: "50px" }}>
          総合的なゲーミングエコシステム
        </h5>

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

      <h2>GuildQB NFT</h2>
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
              <h2>如月-KISARAGI-</h2>
              <p className="kis">
                如月-KISARAGI-はNFTゲームに特化したソーシャルWeb3プラットフォーム、およびNFTゲームプレイヤーによるコミュニティであるGuildQBが発行するNFTです。
              </p>
              <Row
                style={{ marginTop: "20px", marginBottom: "6px" }}
                className="left"
              >
                <Col xs={12} md={6}>
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
        <Container
          fluid
          style={{ marginTop: "50px" }}
          className="boxshade2 pb-5"
        >
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
          <Container>
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
                    Phase 1（初期構築段階{" "}
                  </h3>
                  <p className="pra">
                    . GuildQBコミュニティがソーシャルクリエーションを開始
                  </p>
                  <p className="pra">. ゲーミングギルドとの提携</p>
                  <p className="pra">. GameFi/P2Eとの提携</p>
                  <p className="pra">
                    . アクシーオリジン - 世界初のギルド大会に協賛{" "}
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
                    Phase 2（発売開始時期)
                  </h3>

                  <p className="pra">. NFTの公式発表</p>
                  <p className="pra">. ホワイトペーパーを公開</p>
                  <p className="pra">. 東京ゲームショウ2022に出展</p>
                  <p className="pra">
                    . 日本初のAxieプロゲームチームを創設/世界1位を獲得
                  </p>
                  <p className="pra">. オフィシャルサイト公開</p>
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
                    Phase 3（R&D開発フェーズ)
                  </h3>

                  <p className="pra">. NFTユーティリティを実装</p>
                  <p className="pra" style={{ lineHeight: "15px" }}>
                    . OHARAINFT{" "}
                  </p>
                  <p className="pra">
                    . ユーザーミッションページ公開 (QBクエスト)
                  </p>
                  <p className="pra">. $QB / $GQB ローンチ</p>
                  <p className="pra">. IGO/INO QBローンチパッド</p>
                  <p className="pra">. SocialFiの製品開発</p>
                  <p className="pra">. ノードリワードシステム</p>
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
                    Phese 4（アドバンスドビルドフェーズ）
                  </h3>

                  <p className="pra">
                    . FT/NFTを活用したQBオリジナルweb3ゲームのローンチ
                  </p>
                  <p className="pra">. DAO/オンチェーンガバナンス </p>
                  <p className="pra">. ス マルチチェーン対応</p>
                  <p className="pra">. GuildQB NFTFi</p>
                  <p className="pra" style={{ lineHeight: "15px" }}>
                    . GuildQB Ventures
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>

      {/* news part  */}
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
                    GuildQB が 2023 年第 2 四半期レポートを公開しました!
                    ：資産運用実績とKISARAGIのアップデートをカバー
                  </Card.Title>
                  <Card.Text className="cardp">
                    Social Finance
                    Limitedが運営するブロックチェーンおよびWeb3ゲームのギルドであるGuildQBは、2023年第2四半期(Q2)のレポートを発表しました。
                    ...
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
                  2023 年 7 月 18 日、午前 11 時 41 分
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
                    GuildQBはPolygonとのコラボレーションを発表
                  </Card.Title>

                  <Card.Text className="cardp">
                    ​Social Finance
                    Limitedの運営する次世代のGameFiプラットフォーム「GuildQB」は、Polygonとのコラボレーションを発表いたしま...{" "}
                    <a
                      href="https://prtimes.jp/main/html/rd/p/000000007.000109511.html"
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
                    2023年1月17日 11時00分
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
                    GuildQB CEOのPyrolysisがHANEDA
                    EXPOで語る未来：新たな時代のweb3ギルド
                  </Card.Title>
                  <Card.Text className="cardp">
                    Social Finance
                    Limitedが運営するGuildQBのCEO、Pyrolysis(パイロリシス)が2月11日(土)に「HANEDA
                    WEB3.0 EXPO 2023~The bridge to ...{" "}
                    <a
                      href="https://prtimes.jp/main/html/rd/p/000000017.000109511.html  "
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
                    2023年2月8日 16時50分
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
                    ギルドQB：コミュニティアップデート|2023年第1四半期
                  </Card.Title>
                  <Card.Text className="cardp">
                    2023 年の第 1 四半期、GuildQB
                    はゲーム業界とコミュニティに貢献することを目的として、コミュニティの成長と
                    Web3 ゲームの促進に全力を尽くしました。...
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
                2023 年 4 月 29 日、午前 11 時 2 分
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
                  
GuildQB初のAI生成NFT傑作『如月-KISARAGI-』2月24日発売決定！
                  </Card.Title>
                  <Card.Text className="cardp">
                  Social Finance Limited が運営する Web3 ゲーム ギルドである GuildQB は、最近発行された KISARAGI - KISARAGI を発表できることを嬉しく思います
                    ...
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
                  2023 年 2 月 29 日、午後 12 時 12 分
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
                    GuildQBの発行するNFT『如月-KISARAGI-』37分で完売！
                  </Card.Title>
                  <Card.Text className="cardp">
                    Social Finance
                    Limitedの運営するWeb3ゲーミングギルドのGuildQBは、このたび発行した独自の美麗グラフィックNFT「如月-KISARAGI-」がセ
                    ...{" "}
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
                    2023年2月24日 22時49分
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

      {/* slider part  */}
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

      {/* <Container fluid className='blueshadeg'>
<Container >
<h2 style={{marginBottom:'50px'}}>News</h2>
<Row>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={one} />
      <Card.Body>
        <Card.Title className='cardt'>ユーザー数28万人超えを誇る世界トップゲームギルドGuildFiとGuildQBがコミュニティイベントを開催</Card.Title>
        <Card.Text className='cardp'>
        このたび、Social Finance Limitedが運営するGuildQBはGuildFiと協力してコミュニティイベントを開催します。12月18日の21：00 ...
        <a href='https://prtimes.jp/main/html/rd/p/000000002.000109511.html' className='cardr' variant="primary">Read More</a>
        </Card.Text>
       
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2022年12月15日 11時41分</p>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={two} />
      <Card.Body>
        <Card.Title className='cardt'>GuildQBはPolygonとのコラボレーションを発表</Card.Title>
        <Card.Text className='cardp'>
        ​Social Finance Limitedの運営する次世代のGameFiプラットフォーム「GuildQB」は、Polygonとのコラボレーションを発表いたしま... <a  href='https://prtimes.jp/main/html/rd/p/000000007.000109511.html' className='cardr' variant="primary">Read More</a> </Card.Text>

        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年1月17日 11時00分</p>
      </Card.Body>
    </Card>
  </Col>



  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={three} />
      <Card.Body>
        <Card.Title className='cardt'>GuildQB CEOのPyrolysisがHANEDA EXPOで語る未来：新たな時代のweb3ギルド</Card.Title>
        <Card.Text className='cardp'>
        Social Finance Limitedが運営するGuildQBのCEO、Pyrolysis(パイロリシス)が2月11日(土)に「HANEDA WEB3.0 EXPO 2023~The bridge to ...  <a href='https://prtimes.jp/main/html/rd/p/000000017.000109511.html  ' className='cardr' variant="primary">Read More</a></Card.Text>
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年2月8日 16時50分</p>
      </Card.Body>
    </Card>
  </Col>




  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={six} />
      <Card.Body>
        <Card.Title className='cardt'>元素騎士オンラインとカイカデジタルグループのオフラインイベントにGuildQBが協賛</Card.Title>
        <Card.Text className='cardp'>
        ​Social Finance Limitedの運営するGuildQBは2023年3月14日（火）に、新橋にあるクロスコープ新橋 セミナールームCにて開催される元素騎士オ...<a href='https://prtimes.jp/main/html/rd/p/000000022.000109511.html' className='cardr' variant="primary">Read More</a></Card.Text>
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年3月13日 11時02分</p>
      </Card.Body>
    </Card>
  </Col>



  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={four} />
      <Card.Body>
        <Card.Title className='cardt'>Nethergate: 新たなインキュベーションプログラムが開幕！</Card.Title>
        <Card.Text className='cardp'>
        Social Finance Limitedの運営するGuildQBはモノバンドル株式会社と共同でインキュベーションプログラム「Nethergate」を開催することを発 ...<a href='https://prtimes.jp/main/html/rd/p/000000023.000109511.html' className='cardr' variant="primary">Read More</a></Card.Text>
        
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年3月25日 12時12分</p>
      </Card.Body>
    </Card>
  </Col>



  <Col xs={12} md={4}>
  <Card className='crd'>
      <Card.Img style={{borderRadius:'40px'}} variant="top" src={five}/>
      <Card.Body>
        <Card.Title className='cardt'>GuildQBの発行するNFT『如月-KISARAGI-』37分で完売！</Card.Title>
        <Card.Text className='cardp'>
        Social Finance Limitedの運営するWeb3ゲーミングギルドのGuildQBは、このたび発行した独自の美麗グラフィックNFT「如月-KISARAGI-」がセ ... <a href='https://prtimes.jp/main/html/rd/p/000000020.000109511.html' className='cardr' variant="primary">Read More</a> </Card.Text>
        
        <p className='cardd'><i style={{marginRight:'10px'}} class="fa-solid fa-clock ico6"></i> 2023年2月24日 22時49分</p>
      </Card.Body>
    </Card>
  </Col>
</Row>
<a href='https://prtimes.jp/main/html/searchrlp/company_id/109511' className='walletbtn' style={{background:'linear-gradient(93.19deg, #20AFFF 5.25%, #A8E0FF 96.59%)',width:'auto'}}><i style={{marginRight:'10px'}} class="fa-brands fa-medium"></i>Read More</a>
</Container>
</Container> */}
    </>
  );
};

export default Japanese;
