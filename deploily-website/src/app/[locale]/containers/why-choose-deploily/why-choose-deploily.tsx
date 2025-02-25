"use client";
import React from "react";
import {Row, Col, theme, Typography} from "antd";
import {
  CloudUploadOutlined,
  RocketOutlined,
  LockOutlined,
  DollarOutlined,
  DatabaseOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import {useScopedI18n} from "../../../../../locales/client";
const {Title} = Typography;

const WhyChooseDeploily = () => {
  const reasonsTranslateList = useScopedI18n("reasons");
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
          {reasonsTranslateList("title")}
        </Title>
        <Row justify="center" align="middle" gutter={[16, 16]}>
          {reasons(reasonsTranslateList).map((reason, index) => (
            <Col xs={24} sm={24} md={12} key={index}>
              <Col>
                <Row align="middle" gutter={8}>
                  {reason.icon}{" "}
                  <Typography.Title
                    level={3}
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginTop: "2%",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: token.colorTextBase,
                    }}
                  >
                    {reason.title}
                  </Typography.Title>
                </Row>
                <Row>
                  {" "}
                  <Typography.Text
                    style={{fontWeight: 500, fontSize: "16px", display: "block", marginLeft: "6%"}}
                  >
                    {reason.description}
                  </Typography.Text>
                </Row>
              </Col>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default WhyChooseDeploily;

const reasons = (reasonsTranslateList: any) => [
  {
    title: reasonsTranslateList("title1"),
    description: reasonsTranslateList("description1"),
    icon: <CloudUploadOutlined style={{fontSize: 32, color: "#E35B02"}} />,
  },
  {
    title: reasonsTranslateList("title2"),
    description: reasonsTranslateList("description2"),
    icon: <RocketOutlined style={{fontSize: 32, color: "#E35B02"}} />,
  },
  {
    title: reasonsTranslateList("title3"),
    description: reasonsTranslateList("description3"),
    icon: <LockOutlined style={{fontSize: 32, color: "#E35B02"}} />,
  },
  {
    title: reasonsTranslateList("title4"),
    description: reasonsTranslateList("description4"),
    icon: <DollarOutlined style={{fontSize: 32, color: "#E35B02"}} />,
  },
  {
    title: reasonsTranslateList("title5"),
    description: reasonsTranslateList("description5"),
    icon: <DatabaseOutlined style={{fontSize: 32, color: "#E35B02"}} />,
  },
  {
    title: reasonsTranslateList("title6"),
    description: reasonsTranslateList("description6"),
    icon: <ApiOutlined style={{fontSize: 32, color: "#E35B02"}} />,
  },
];
