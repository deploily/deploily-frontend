"use client";
import React from "react";
import {Row, Col, theme, Typography, Image, Card} from "antd";

import {useScopedI18n} from "../../../../../locales/client";
const {Title} = Typography;

const Partners = () => {
  const partnersTranslateList = useScopedI18n("partners");
  const {useToken} = theme;
  const {token} = useToken();
  return (
    <div style={{padding: "2%", backgroundColor: token.colorBgBase, paddingBottom: "5%"}}>
      <Col
        md={24}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0 4%",
        }}
      >
        <Title
          level={3}
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            color: token.colorTextBase,
            marginBottom: "3%",
            textAlign: "center",
          }}
        >
          {partnersTranslateList("title")}
        </Title>
      </Col>
      <Row gutter={[16, 16]} justify="center">
        {partners(partnersTranslateList).map((partner, index) => (
          <Col
            key={index}
            xs={12}
            sm={8}
            md={8}
            lg={4}
            style={{maxWidth: "800px", minWidth: "200px"}}
          >
            <a href={partner.url}>
              <Card style={{textAlign: "center", backgroundColor: "white"}}>
                <Title style={{color: token.colorPrimary}}>{partner.name}</Title>

                <div style={{fontSize: "30px", marginBottom: "10px"}}>
                  {" "}
                  <Image
                    src={partner.logo}
                    preview={false}
                    style={{objectFit: "contain", maxHeight: "100%", width: "90%"}}
                    alt="parner1"
                  />
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Partners;

const partners = (partnersTranslateList: any) => [
  {
    name: partnersTranslateList("title1"),
    url: partnersTranslateList("url1"),
    logo: "/images/issal_logo.jpeg",
  },
];
