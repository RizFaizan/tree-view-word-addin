import * as React from "react";
import { useState } from "react";
import { Image, Label, Input, Subtitle1, Button, Body1, Checkbox, Link } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClickButton = () => {
    navigate("/LogIn");
  };

  const handleClickButton1 = () => {
    if (createPassword === confirmPassword) {
      navigate("/LogIn");
    } else {
      setPasswordMismatch(true);
    }
  };

  return (
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
        <Image alt="Addin expert Logo" shape="circular" src=".\assets\AE Blue-Grade.png" height={120} width={120} />
      </div>
      <div style={{ width: "230px", textAlign: "center" }}>
        <Subtitle1 as="h3">Explore the creators of All Addin Projects.</Subtitle1>
      </div>
      <div style={{ width: "240px" }}>
        <div style={{ display: "flex", flexDirection: "column", padding: "10px 0px 0px 0px" }}>
          <Label>Name :</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "10px 0px 0px 0px" }}>
          <Label>Email :</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "10px 0px 0px 0px" }}>
          <Label>Create Password :</Label>
          <Input
            id="createInput"
            type="password"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "10px 0px 0px 0px" }}>
          <Label>Confirm Password :</Label>
          <Input
            id="confirmInput"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {passwordMismatch && (
          <div style={{ color: "red", fontSize: "12px", paddingTop: "5px" }}>Passwords do not match.</div>
        )}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "10px 0px 0px 0px" }}>
          <Checkbox size="large" onChange={handleCheckboxChange} />
          <Body1>By clicking, you agree to our terms and conditions.</Body1>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
          <Button onClick={handleClickButton1} appearance="primary" shape="circular" disabled={!isChecked}>
            Sign Up
          </Button>
        </div>
        <div style={{ padding: "4px 0px" }}>
          <Body1>
            Already have an account?
            <Link onClick={handleClickButton} style={{ color: "#51A3DA", cursor: "pointer" }}>
              Log In!
            </Link>
          </Body1>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
