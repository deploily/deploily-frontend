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
        <Row
          key={index}
          align="middle"
          style={{
            padding: "5px 8%",
            flexDirection: isOdd(index) === 0 ? "row-reverse" : "row",
            backgroundColor: token.colorBgBase,
          }}
        >
          <Col
            xs={1}
            md={2}
            style={{
              minHeight: "300px",
              maxWidth: "10px",
              backgroundColor: token.colorPrimary,
              clipPath: "ellipse(10% 50% at 50% 50%)",
            }}
          />
          <Col xs={20} sm={20} md={12} style={{padding: "0 6%"}}>
            <Title
              level={3}
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                color: token.colorTextBase,
                textAlign: "center",
              }}
            >
              {service.title.toLocaleUpperCase()}
            </Title>
            <Text style={{fontWeight: 500, fontSize: "16px", display: "block"}}>
              {service.description}
            </Text>
          </Col>{" "}
          <Col xs={20} sm={20} md={11} lg={8}>
            {" "}
            {service.image}
          </Col>
        </Row>
      ))}
    </>
  );
}
