"use client";
import React, {useEffect, useState} from "react";
import {Button, Col, Row, theme, Typography} from "antd";
import Image from "next/image";
import {motion} from "framer-motion";
import {useScopedI18n} from "../../../../../locales/client";

export default function HeroContainer() {
  const {useToken} = theme;
  const {token} = useToken();

  // const [theme] = useState("dark");
  const scopedHero = useScopedI18n("hero");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <Row
      style={{
        paddingTop: "60px",
        backgroundColor: token.colorBgBase,
      }}
    >
      <Col
        span={24}
        style={{
          padding: "0px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <Row
          justify="center"
          align="middle"
          style={{
            width: "100%",
            textAlign: "center",
            padding: "20px 0px",
            marginTop: "50px",
          }}
        >
          <Col xs={24} md={12}>
            <Row justify="center" align="middle">
              <Col style={{padding: "5px"}}>
                <Typography.Title
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                    background: token.colorTextBase,
                    backgroundClip: "text",
                    marginBottom: "30px",
                    padding: "5px",
                    color: "#ccdae6",
                  }}
                >
                  {scopedHero("title")}
                </Typography.Title>
                <Typography.Text
                  style={{
                    width: "90%",
                    paddingTop: "20px",
                    textAlign: "start",
                    fontSize: "clamp(1rem, 3vw, 1.25rem)",
                    color: "#ccdae6",
                  }}
                >
                  {scopedHero("subtitle")}
                </Typography.Text>
              </Col>
              <Col>
                <Button
                  type="primary"
                  style={{
                    marginTop: "50px",
                    color: "#FFF",
                    backgroundColor: "#4c96d7",
                    boxShadow: "none",
                  }}
                >
                  {scopedHero("buttonHero")}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            xs={18}
            md={10}
            style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "10px"}}
          >
            <motion.div
              initial={{opacity: 0, scale: 0.9}}
              animate={{
                opacity: imageLoaded ? 1 : 0,
                scale: imageLoaded ? 1 : 0.9,
              }}
              transition={{duration: 0.5}}
              whileHover={{scale: 1.1, rotate: 3}}
              whileTap={{scale: 0.8}}
              style={{width: "90%", height: "auto"}}
            >
              <Image
                src="/images/deploy_image.png"
                width={0}
                height={0}
                sizes="80vw"
                style={{width: "100%", height: "auto"}}
                alt="deploy"
              />
            </motion.div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
