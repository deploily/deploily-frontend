"use client";
import Image from "next/image";
import {socialMedias} from "./utils/about";
import {useState} from "react";
import {Col, Row, Typography, Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import Link from "next/link";
import {useScopedI18n} from "../../../../locales/client";

function Copyright() {
  return (
    <Typography>
      {"Copyright ©  "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" rel="noopener" target="blank" href={"https://transformatek.dz"}>
        SARL Transformatek
      </Link>
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const reasonsTranslateList = useScopedI18n("footer");

  const {Footer} = Layout;
  const [theme] = useState("dark");

  return (
    <>
      <Footer style={{background: theme === "dark" ? "#3a3f47" : "#FFFFFF"}}>
        <Row
          id="footer"
          style={{
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            margin: "0px",
            width: "100%",
          }}
        >
          <Col
            xs={24}
            md={24}
            style={{
              margin: "2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Row gutter={[16, 16]} style={{justifyContent: "space-between"}} justify="center">
              <Col xs={24} md={6}>
                <Typography.Title
                  level={4}
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  {reasonsTranslateList("title1")}
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {reasonsTranslateList("description1")}
                </Typography.Text>
              </Col>
              <Col xs={24} md={6}>
                <Typography.Title
                  level={4}
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  {reasonsTranslateList("title2")}{" "}
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {reasonsTranslateList("description2")}
                </Typography.Text>
              </Col>
              <Col xs={24} md={6}>
                <Typography.Title
                  level={4}
                  style={{
                    color: "white",
                    fontSize: "20px",
                    letterSpacing: "0.5px",
                    fontWeight: "bold",
                  }}
                >
                  {reasonsTranslateList("title3")}{" "}
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {reasonsTranslateList("description3")}
                </Typography.Text>
              </Col>
            </Row>
          </Col>

          {socialMedias.map((socialM, index) => (
            <Col key={index} style={{paddingTop: "20px"}}>
              <a
                href={socialM.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{margin: "2px", paddingBottom: "0px", paddingTop: "50px", color: "white"}}
              >
                <Row
                  key={index}
                  style={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  <Image src={socialM.image} width={30} height={30} alt={socialM.alt} />{" "}
                  <Typography.Title
                    level={5}
                    underline
                    style={{margin: 0, padding: 1, color: "white"}}
                  >
                    {socialM.alt}
                  </Typography.Title>
                </Row>
              </a>
            </Col>
          ))}
        </Row>
      </Footer>
      <Content style={{background: "#4b9be6"}}>
        <Row
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Copyright />
        </Row>
      </Content>
    </>
  );
}
