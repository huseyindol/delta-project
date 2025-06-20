import { DatabaseOutlined, SettingOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Flex, Statistic, Typography, theme } from "antd";
import type React from "react";

const Home: React.FC = () => {
  const { token } = theme.useToken();

  const containerStyle = {
    flex: 1,
    width: "100%",
    padding: token.paddingLG,
    backgroundColor: token.colorBgLayout,
  };

  const headerStyle = {
    marginBottom: token.marginXL,
    padding: token.paddingMD,
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowTertiary,
  };

  const cardStyle = {
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorderSecondary}`,
    boxShadow: token.boxShadowSecondary,
    transition: `all ${token.motionDurationMid}`,
    flex: 1,
    cursor: "pointer",
    "&:hover": {
      boxShadow: token.boxShadow,
      borderColor: token.colorPrimary,
    }
  };

  const sectionStyle = {
    padding: token.paddingLG,
    gap: token.marginMD,
  };

  const statsContainerStyle = {
    gap: token.marginLG,
    marginBottom: token.marginXL,
  };

  const routeItemStyle = {
    padding: token.paddingSM,
    borderRadius: token.borderRadius,
    backgroundColor: token.colorFillTertiary,
    border: `1px solid ${token.colorBorder}`,
    marginBottom: token.marginXS,
  };

  const iconStyle = {
    fontSize: token.fontSizeHeading2,
    color: token.colorPrimary,
    marginBottom: token.marginSM,
  };

  const titleStyle = {
    color: token.colorTextHeading,
    marginBottom: token.marginMD,
    fontWeight: token.fontWeightStrong,
  };

  const textStyle = {
    color: token.colorTextSecondary,
    lineHeight: token.lineHeight,
    fontSize: token.fontSize,
  };

  return (
    <Flex vertical style={containerStyle}>
      <div style={headerStyle}>
        <Typography.Title
          level={2}
          style={{
            margin: 0,
            color: token.colorTextHeading,
            fontSize: token.fontSizeHeading2,
            fontWeight: token.fontWeightStrong
          }}
        >
          Dashboard
        </Typography.Title>
        <Typography.Text style={textStyle}>
          Sistem yönetimi ve genel bakış
        </Typography.Text>
      </div>

      <Flex style={statsContainerStyle} wrap="wrap" justify="space-between">
        <Card style={cardStyle} hoverable>
          <Statistic
            title="Toplam Kullanıcı"
            value={12}
            prefix={<UserOutlined style={{ color: token.colorPrimary }} />}
            valueStyle={{
              color: token.colorPrimary,
              fontSize: token.fontSizeHeading3
            }}
          />
        </Card>

        <Card style={cardStyle} hoverable>
          <Statistic
            title="Toplam Ürün"
            value={48}
            prefix={<ShoppingOutlined style={{ color: token.colorSuccess }} />}
            valueStyle={{
              color: token.colorSuccess,
              fontSize: token.fontSizeHeading3
            }}
          />
        </Card>

        <Card style={cardStyle} hoverable>
          <Statistic
            title="Kategori"
            value={8}
            prefix={<DatabaseOutlined style={{ color: token.colorWarning }} />}
            valueStyle={{
              color: token.colorWarning,
              fontSize: token.fontSizeHeading3
            }}
          />
        </Card>

        <Card style={cardStyle} hoverable>
          <Statistic
            title="Aktif İşlem"
            value={3}
            prefix={<SettingOutlined style={{ color: token.colorInfo }} />}
            valueStyle={{
              color: token.colorInfo,
              fontSize: token.fontSizeHeading3
            }}
          />
        </Card>
      </Flex>

      <Flex
        gap={token.marginXL}
        style={{ flex: 1, width: "100%" }}
        justify="space-evenly"
        wrap="wrap"
      >
        <Flex vertical style={sectionStyle} flex={1}>
          <div style={{ display: "flex", alignItems: "center", gap: token.marginSM }}>
            <UserOutlined style={iconStyle} />
            <Typography.Title level={3} style={titleStyle}>
              Users Management
            </Typography.Title>
          </div>

          <div style={routeItemStyle}>
            <Typography.Text style={textStyle}>
              Kullanıcı ekleme sayfası:
              <Typography.Text
                code
              >
                /users/add
              </Typography.Text>
            </Typography.Text>
          </div>

          <div style={routeItemStyle}>
            <Typography.Text style={textStyle}>
              Kullanıcı listesi:
              <Typography.Text code>/users</Typography.Text>
            </Typography.Text>
          </div>

          <div style={routeItemStyle}>
            <Typography.Text style={textStyle}>
              Kullanıcı düzenleme:
              <Typography.Text code>/users/:id/edit</Typography.Text>
            </Typography.Text>
          </div>

          <div style={routeItemStyle}>
            <Typography.Text style={textStyle}>
              Kullanıcı detayları:
              <Typography.Text code>/users/:id</Typography.Text>
            </Typography.Text>
          </div>
        </Flex>

        <Flex vertical style={sectionStyle} flex={1}>
          <div style={{ display: "flex", alignItems: "center", gap: token.marginSM }}>
            <ShoppingOutlined style={iconStyle} />
            <Typography.Title level={3} style={titleStyle}>
              Products Management
            </Typography.Title>
          </div>

          <div style={routeItemStyle}>
            <Typography.Text style={textStyle}>
              Ürün ekleme sayfası:
              <Typography.Text code>/products/add</Typography.Text>
            </Typography.Text>
          </div>

          <div style={routeItemStyle}>
            <Typography.Text style={textStyle}>
              Ürün listesi:
              <Typography.Text code>/products</Typography.Text>
            </Typography.Text>
          </div>

          <div style={routeItemStyle}>
            <Typography.Text style={textStyle}>
              Ürün düzenleme:
              <Typography.Text code>/products/:id/edit</Typography.Text>
            </Typography.Text>
          </div>

          <div style={routeItemStyle}>
            <Typography.Text style={textStyle}>
              Ürün detayları:
              <Typography.Text code>/products/:id</Typography.Text>
            </Typography.Text>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
