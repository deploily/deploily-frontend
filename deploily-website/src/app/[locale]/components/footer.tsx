"use client";
import Image from "next/image";
import {socialMedias} from "./utils/about";
import {useState} from "react";
import {Col, Row, Typography} from "antd";
import {Content} from "antd/es/layout/layout";
import Link from "next/link";

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
  const [theme] = useState("dark");

  return (
    <>
      <Row
        id="footer"
        style={{
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          margin: "0px",
          width: "100%",
          backgroundColor: theme === "dark" ? "#0c0d0f" : "#FFFFFF",
        }}
      >
        {socialMedias.map((socialM, index) => (
          <Col key={index}>
            <a
              href={socialM.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{margin: "2px", paddingBottom: "0px", color: "white"}}
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
      <Content style={{background: "#2c82d4"}}>
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
