/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { Image, Label, Input, Subtitle1, Button, Body1 } from "@fluentui/react-components";

const LogIn = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "20px",
        }}
      >
        <div>
          <Image alt="Addin expert Logo" shape="circular" src=".\assets\AE Blue-Grade.png" height={120} width={120} />
        </div>
        <div style={{ width: "230px", textAlign: "center" }}>
          <Subtitle1 as="h3">Welcome Back!! LogIn to your Account Quickly.</Subtitle1>
        </div>
        <div style={{ width: "240px" }}>
          <div style={{ display: "flex", flexDirection: "column", padding: "10px 0px 0px 0px" }}>
            <Label>Email :</Label>
            <Input type="email" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "10px 0px 0px 0px" }}>
            <Label>Password :</Label>
            <Input type="password" />
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
            <Button appearance="primary" shape="circular">
              Login
            </Button>
          </div>
          <div style={{ padding: "4px 0px" }}>
            <Body1>
              Don't have an account? <Body1 style={{ color: "#51A3DA", cursor: "pointer" }}>Create One!</Body1>
            </Body1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
