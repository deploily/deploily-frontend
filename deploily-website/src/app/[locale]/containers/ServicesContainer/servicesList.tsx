"use client";
import React from "react";
import {useScopedI18n} from "../../../../../locales/client";
import {allServices} from "./allServices";
import {Row, Col, Typography, theme} from "antd";

const {Title, Text} = Typography;

function isOdd(num: any) {
  return num % 2;
}
export default function ServiceListContainer() {
  // const [theme] = useState("dark");
  const scopedService = useScopedI18n("service");
  const {useToken} = theme;
  const {token} = useToken();
  return (
    <>
      {allServices(scopedService).map((service, index) => (
        <div key={index}>
          <Row
            justify="center"
            align="middle"
            gutter={[16, 16]}
            style={{
              flexDirection: isOdd(index) === 0 ? "row-reverse" : "row",
              backgroundColor: token.colorBgBase,
            }}
          >
            {/* Barre latérale avec effet */}
            <Col
              style={{
                minHeight: "300px",
                width: "5px",
                backgroundColor: token.colorPrimary,
                clipPath: "ellipse(20% 50% at 50% 50%)",
              }}
            />

            {/* Contenu principal */}
            <Col
              xs={24}
              sm={24}
              md={19}
              style={{
                display: "flex",
                flexDirection: isOdd(index) === 0 ? "row-reverse" : "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {/* Section du texte */}
              <Col
                md={10}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "30px",
                }}
              >
                <Title
                  level={3}
                  style={{fontWeight: "bold", fontSize: "25px", color: token.colorTextBase}}
                >
                  {service.title.toLocaleUpperCase()}
                </Title>
                <Text style={{fontWeight: 500, fontSize: "16px", display: "block"}}>
                  {service.description}
                </Text>
              </Col>
              <Col xs={24} md={10} style={{display: "flex", justifyContent: "center"}}>
                {service.image}
              </Col>{" "}
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
}
