"use client";
import React from "react";
import {Row, Col, theme, Typography} from "antd";
import {
  CarOutlined,
  TableOutlined,
  EnvironmentOutlined,
  AimOutlined,
  GlobalOutlined,
  RiseOutlined,
} from "@ant-design/icons";
const {Title} = Typography;

const reasons = [
  {
    title: "Directions",
    description:
      "Consume rich route instructions for cars, trucks, bikes, walking, hiking, or wheelchair with various road restriction options.",
    icon: <CarOutlined style={{fontSize: 38, color: "#E35B02"}} />,
  },
  {
    title: "Time-Distance Matrix",
    description:
      "Compute many-to-many distances and route times efficiently. Ideal for logistics and delivery route optimization.",
    icon: <TableOutlined style={{fontSize: 38, color: "#E35B02"}} />,
  },
  {
    title: "POIs",
    description:
      "Find points of interest using geographic coordinates. Search by categories and consume rich metadata.",
    icon: <EnvironmentOutlined style={{fontSize: 38, color: "#E35B02"}} />,
  },
  {
    title: "Isochrones",
    description:
      "Determine accessible areas within given times or distances to enhance reachability analysis.",
    icon: <AimOutlined style={{fontSize: 38, color: "#E35B02"}} />,
  },
  {
    title: "Pelias Geocoding",
    description:
      "Convert location descriptions into normalized geographic coordinates using multiple data sources.",
    icon: <GlobalOutlined style={{fontSize: 38, color: "#E35B02"}} />,
  },
  {
    title: "Elevation",
    description:
      "Enhance 2D geometries with height information, converting them into 3D formats in milliseconds.",
    icon: <RiseOutlined style={{fontSize: 38, color: "#E35B02"}} />,
  },
];
const WhyChooseDeploily = () => {
  const {useToken} = theme;
  const {token} = useToken();
  return (
    <div style={{padding: "40px", backgroundColor: token.colorBgBase, paddingBottom: "5%"}}>
      <Col
        md={24}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0 10%",
        }}
      >
        <Title
          level={3}
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            color: token.colorTextBase,
            marginBottom: "3%",
          }}
        >
          Why choose deploily :
        </Title>
        <Row justify="center" align="middle" gutter={[16, 16]}>
          {reasons.map((reason, index) => (
            <Col xs={24} sm={24} md={12} key={index}>
              <Col>
                <Row align="middle" gutter={8}>
                  {reason.icon}{" "}
                  <Typography.Title
                    level={3}
                    style={{
                      marginLeft: "2%",
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
                  <Typography.Text style={{fontWeight: 500, fontSize: "16px", display: "block"}}>
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
