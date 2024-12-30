"use client";
import React from "react";
import {Col, Row, theme, Typography} from "antd";
import {useScopedI18n} from "../../../../../locales/client";
export default function DeployCodeContainer() {
  const {useToken} = theme;
  const {token} = useToken();

  // const [theme] = useState("dark");
  const scopedService = useScopedI18n("service");
  return (
    <Row
      justify="center"
      style={{
        paddingTop: "60px",
        backgroundColor: token.colorBgBase,
      }}
    >
      <Col
        style={{
          width: "100%",
          maxWidth: "1280px",
          textAlign: "center",
          padding: "40px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            padding: "10px",
          }}
        >
          <Typography.Title
            style={{
              fontSize: "48px",
              background: token.colorTextBase,
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "30px",
              padding: "5px",
            }}
          >
            {scopedService("title2")}
          </Typography.Title>
        </div>

        <div
          style={{
            padding: "10px",
          }}
        >
          <Typography.Paragraph
            style={{
              color: "white",
              fontSize: "18px",
              width: "90%",
              paddingTop: "20px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {scopedService("description2")}
          </Typography.Paragraph>
        </div>
      </Col>
    </Row>
  );
}
