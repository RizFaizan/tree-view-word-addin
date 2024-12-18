/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { Image, Label, Input, Subtitle1, Button, Body1 } from "@fluentui/react-components";

const SignIn = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "10px",
        }}
      >
        <div>
          <Image alt="Addin expert Logo" shape="circular" src=".\assets\AE Blue-Grade.png" height={150} width={150} />
        </div>
        <div style={{ padding: "10px 40px", textAlign: "center" }}>
          <Subtitle1 as="h3">Explore the creators of All Addin Projects.</Subtitle1>
        </div>
        <div style={{ width: "240px" }}>
          <div style={{ display: "flex", flexDirection: "column", padding: "10px 0px" }}>
            <Label>Name :</Label>
            <Input />
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "10px 0px" }}>
            <Label>Email :</Label>
            <Input type="email" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "6px 0px" }}>
            <Label>Create Password :</Label>
            <Input type="password" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "6px 0px" }}>
            <Label>Confirm Password :</Label>
            <Input type="password" />
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
            <Button appearance="primary" shape="circular">
              Sign In
            </Button>
          </div>
          <div style={{ padding: "4px 0px" }}>
            <Body1>
              Already have an account? <Body1 style={{ color: "#51A3DA", cursor: "pointer" }}>Log In!</Body1>
            </Body1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
