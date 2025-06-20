import { Spin, theme } from "antd";

const GlobalSpinner = () => {
  const { token } = theme.useToken();

  const spinnerStyle = {
    position: "fixed" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: token.zIndexPopupBase + 1000,
    backgroundColor: token.colorBgMask, // Arka plan için design token
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const spinnerInnerStyle = {
    padding: token.paddingLG, // Padding için design token
    borderRadius: token.borderRadiusLG, // Border radius için design token
    backgroundColor: token.colorBgElevated, // Yükseltilmiş arka plan
    boxShadow: token.boxShadowSecondary, // Gölge için design token
  };

  return (
    <div style={spinnerStyle}>
      <div style={spinnerInnerStyle}>
        <Spin
          size="large"
          className="global-spinner"
        />
      </div>
    </div>
  );
};

export default GlobalSpinner;