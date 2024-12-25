"use client";
import Image from "next/image";
import {Layout, Row, Col} from "antd";
import LocaleSwitcher from "../../../components/locale/localeSwitcher";
import {useEffect, useRef, useState} from "react";

const {Header} = Layout;

function AppAppBar() {
  const [width, setWidth] = useState(0);
  const observedDiv = useRef(null);

  useEffect(() => {
    if (!observedDiv.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (observedDiv.current.offsetWidth !== width) {
        setWidth(observedDiv.current.offsetWidth);
      }
    });
    resizeObserver.observe(observedDiv.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [width]);

  return (
    <Layout>
      <Header
        ref={observedDiv}
        style={
          {
            // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }
        }
      >
        <Row align="middle" justify="space-between">
          <Col>
            <Image
              src="/images/logo_name.png"
              width={180}
              height={70}
              alt="logo-deploily"
              style={{marginRight: "20px"}}
            />
          </Col>
          <Col>
            <LocaleSwitcher />
            {/* <ToggleColorMode /> */}
          </Col>
        </Row>
      </Header>
    </Layout>
  );
}

export default AppAppBar;
