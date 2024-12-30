"use client";
import React, {useState} from "react";
import {Col, Row, Typography} from "antd";
import {useScopedI18n} from "../../../../../locales/client";

export default function ApiServiceContainer() {
  const [theme] = useState("dark");
  const scopedService = useScopedI18n("service");

  return (
    <Row
      justify="center"
      style={{
        paddingTop: "60px",
        backgroundColor: theme === "dark" ? "#0c0d0f" : "#FFF",
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
              background: theme === "light" ? "#ba5814" : "#dce9f5",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "30px",
              padding: "5px",
            }}
          >
            {scopedService("title1")}
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
            {scopedService("description1")}
          </Typography.Paragraph>
        </div>
      </Col>
    </Row>
  );
}
