import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { useHistory } from "react-router-dom";

import Icons from "../../Assets/logo.png";
import mobIcons from "../../Assets/backgrounds/moblogo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from 'wagmi'

const Header = () => {
  const { open, close } = useWeb3Modal()
  const { address, isConnecting, isDisconnected } = useAccount()

  var [language, setLanguage] = useState('')
  var [Collapse, setCollapse] = useState("collapse")
  var [Expend, setExpend] = useState("false")


  async function clickHome() {
    document.getElementById('home').style.color = '#157ee5';
    document.getElementById('game').style.color = 'white';
    document.getElementById('nft').style.color = 'white';
    document.getElementById('events').style.color = 'white';
    document.getElementById('merchs').style.color = 'white';
    document.getElementById('account').style.color = 'white';

  }
  async function clickGame() {
    document.getElementById('home').style.color = 'white';
    document.getElementById('game').style.color = '#157ee5';
    document.getElementById('nft').style.color = 'white';
    document.getElementById('events').style.color = 'white';
    document.getElementById('merchs').style.color = 'white';
    document.getElementById('account').style.color = 'white';

  }
  async function clicknft() {
    document.getElementById('home').style.color = 'white';
    document.getElementById('game').style.color = 'white';
    document.getElementById('nft').style.color = '#157ee5';
    document.getElementById('events').style.color = 'white';
    document.getElementById('merchs').style.color = 'white';
    document.getElementById('account').style.color = 'white';

  }
  async function clickEvents() {
    document.getElementById('home').style.color = 'white';
    document.getElementById('game').style.color = 'white';
    document.getElementById('nft').style.color = 'white';
    document.getElementById('events').style.color = '#157ee5';
    document.getElementById('merchs').style.color = 'white';
    document.getElementById('account').style.color = 'white';

  }
  async function clickMerchs() {
    document.getElementById('home').style.color = 'white';
    document.getElementById('game').style.color = 'white';
    document.getElementById('nft').style.color = 'white';
    document.getElementById('events').style.color = 'white';
    document.getElementById('merchs').style.color = '#157ee5';
    document.getElementById('account').style.color = 'white';

  }
  async function clickAccount() {
    document.getElementById('home').style.color = 'white';
    document.getElementById('game').style.color = 'white';
    document.getElementById('nft').style.color = 'white';
    document.getElementById('events').style.color = 'white';
    document.getElementById('merchs').style.color = 'white';
    document.getElementById('account').style.color = '#157ee5';

  }

  async function nave() {
    setCollapse('')
    setExpend('true')
    var element = document.getElementById("navbarSupportedContent");
    element.classList.add("show");
    document.getElementById('nave').style.display = 'none';
    document.getElementById('wave').style.display = 'block';
  }
  function wave() {
    setCollapse('collapse')
    setExpend('false')
    var element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show");
    document.getElementById('nave').style.display = 'block';
    document.getElementById('wave').style.display = 'none';
  }
  async function setLangeng() {
    setLanguage('English')
    localStorage.setItem("lang", 1)
  }
  async function setLangchi() {


    localStorage.setItem("lang", 0)
  }

  useEffect(() => {
    document.getElementById('nave').style.backgroundColor = 'white'
  }, [Collapse, Expend]);
  useEffect(() => {
    var lang = localStorage.getItem("lang")
    if (lang == 0) {
      setLanguage('日本語')
    }
    else {
      setLanguage('English')
    }
    console.log('sdsd' + typeof (language))
  }, []);


  return (
    <>

      <div style={{ marginBottom: '--211px' }} className="stiiksy" id="header">



        <div className="container-fluid stiiksy">
          <nav className="navbar navbar-expand-lg" >
            <div className="d-block d-lg-none rUpperas" href="#">


              <Row className="d-flex asjadkandk justify-conetent-between">
                <Col xs={3} className="pito2">
                  <div className="logo">

                    <Link to={'/blogpage'}>
                      {/* <img src="" className="w-25" alt="" /> */}
                      <Card.Img style={{ width: '63px' }} variant="top" src="mblogo.png" />
                    </Link>
                  </div>
                </Col>



                <Col xs={7} className=" text-start" style={{ paddingLeft: '17px' }}>
                  <div className="d-flex positio justify-content-center align-items-center pito">
                    {/* <button  className='walletbtnmob'> <i className="fas fa-wallet"></i> </button> */}

                    <Button className='walletbtnmob myyyyy d-flex' onClick={() => open()}>
                     
                     {address ? <></>:<><i className="fas fa-wallet"><span style={{ fontFamily: 'myFirstFont', fontStyle: 'initial', fontWeight: '200' }}>&nbsp;&nbsp;  </span></i> </>}  {address ? address.substring(0, 4)+"..."+address.substring(
                            address.length - 4
                          ) :"CONNECT"}</Button>
                    <button
                      id="nave"
                      style={{ color: 'white', padding: '10px 20px', background: 'linear-gradient(93.09deg, #8217F4 25.84%, #00D1FF 116.48%) ', borderRadius: '23px', lineHeight: '6px', marginTop: '11px' }}
                      onClick={nave}
                      className="navbar-toggler navbar_toggle"
                      type="button"
                      data-bs-toggle={Collapse}
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded={Expend}
                      aria-label="Toggle navigation"
                    >
                      <i style={{ fontSize: '20px' }} class="fa-solid fa-bars ico3"></i>
                    </button>
                    <button
                      id="wave"
                      style={{ marginTop: '11px', color: 'white', display: 'none', background: 'linear-gradient(93.09deg, #8217F4 25.84%, #00D1FF 116.48%) ', padding: '10px 20px', borderRadius: '32px' }}
                      onClick={wave}
                      className="navbar-toggler navbar_toggle"
                      type="button"
                      data-bs-toggle={Collapse}
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded={Expend}
                      aria-label="Toggle navigation"
                    >
                      <i style={{ fontSize: '20px' }} class="fa-solid fa-xmark ico3"></i>
                    </button>
                  </div>
                </Col>

              </Row>


            </div>


            <div className="collapse navbar-collapse hdr" id="navbarSupportedContent">
              <Link className="home_link" to="/">
                <img className="desktoplogo" variant="top" src={Icons} /> </Link>

              <ul className="navbar-nav nab text-center">

                {/* <li style={{ marginRight: "10px", fontSize: '12px', }} className="nav-item">
                  <Link to={'/'} id="home" onClick={clickHome} className="nav-link active" aria-current="page">
                    Metaverse
                  </Link>
                </li>
                <li style={{ marginRight: "10px", fontSize: '12px', }} className="nav-item">
                  <Link to={'/game'} id="game" onClick={clickGame} className="nav-link" >
                    Token
                  </Link>
                </li> */}
                <li style={{ marginRight: "10px", fontSize: '12px', }} className="nav-item ">
                  <a href="https://quest.guildqb.com/" target="_blank" id="nft" onClick={clicknft} className="nav-link" >
                  {/* <a href="#"  id="nft" onClick={clicknft} className="nav-link" > */}

                    QUEST
                  </a>
                </li>
                {/* <li style={{ marginRight: "10px", fontSize: '12px', }} className="nav-item">
                  <Link to={'/nft'} id="nft" onClick={clicknft} className="nav-link" >
                    OharaiNFT
                  </Link>
                </li>
                <li style={{ marginRight: "10px", fontSize: '12px', }} className="nav-item">
                  <a href="https://guildqb.gitbook.io/guild-qb-white-paper-ver1.0/guildqb-overview/guildqbtoha" target="_blank" id="nft" onClick={clicknft} className="nav-link" >
                    Scholarship
                  </a>
                </li> */}
                <li style={{ marginRight: "10px", fontSize: '12px', }} className="nav-item navright">
                  <a href="https://guildqb.gitbook.io/guild-qb-white-paper-ver1.0/guildqb-overview/guildqbtoha" target="_blank" id="nft" onClick={clicknft} className="nav-link" >
                    DOCS
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav">

                <li className="nav-item ">
                  <Dropdown >

                    <Dropdown.Toggle className='dpdown' style={{ fontWeight: '200', position: 'inherit ' }} variant="Warning" id="dropdown-basic">
                      {language}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdownbtn"  >
                      <Dropdown.Item onClick={setLangeng} href="/" >English</Dropdown.Item>
                      <Dropdown.Item onClick={setLangchi} href="/japanese"  >日本語</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                </li>
                <li style={{ marginLeft: '2px' }} onClick={clickAccount} className="nav-item">
                  <Button className='walletbtn'  onClick={() => open()} ><i className="fas fa-wallet" style={{ color: 'white' }}><span style={{ fontFamily: 'myFirstFont', fontStyle: 'initial', fontWeight: '200', color: 'white' }}>&nbsp;&nbsp; 
                  {address ? address.substring(0, 8)+"..."+address.substring(
                            address.length - 8
                          ) :"CONNECT WALLET"} </span></i></Button>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>

    </>
  );
};

export default Header;
