
import { Flex, Typography } from "antd";
import type React from "react";

const Home: React.FC = () => {
  return (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex>
        <Typography.Title level={3} style={{ margin: 0 }}>
          Home
        </Typography.Title>
      </Flex>
      <Flex
        gap={16}
        style={{ flex: 1, width: "100%" }}
        justify="space-evenly"
      >
        {/* burada genel panel kuralları olacak şekilde yazı yazılmasını istiyorum kullanıcı ve ürün tanımları olacak ve sayıları gösterilecek */}
        <Flex vertical gap={16}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Users
          </Typography.Title>
          <Typography.Text>
            kullanıcıların eklendiği sayfa <Typography.Paragraph code>/users/add</Typography.Paragraph>
          </Typography.Text>
          <Typography.Text>
            kullanıcıların listelendiği sayfa <Typography.Paragraph code>/users</Typography.Paragraph>
          </Typography.Text>
          <Typography.Text>
            kullanıcıların düzenlendiği sayfa <Typography.Paragraph code>/users/:id/edit</Typography.Paragraph>
          </Typography.Text>
          <Typography.Text>
            kullanıcıların detaylarının gösterildiği sayfa <Typography.Paragraph code>/users/:id</Typography.Paragraph>
          </Typography.Text>
          <Typography.Text>
            kullanıcıların silinmesi <Typography.Paragraph code>redux store içerisinde deleteUser action'ı ile silinir</Typography.Paragraph>
          </Typography.Text>
        </Flex>
        <Flex vertical gap={16}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Products
          </Typography.Title>
          <Typography.Text >
            ürünlerin eklendiği sayfa <Typography.Paragraph code>/products/add</Typography.Paragraph>
          </Typography.Text>
          <Typography.Text >
            ürünlerin listelendiği sayfa <Typography.Paragraph code>/products</Typography.Paragraph>
          </Typography.Text>
          <Typography.Text>
            ürünlerin düzenlendiği sayfa <Typography.Paragraph code>/products/:id/edit</Typography.Paragraph>
          </Typography.Text>
          <Typography.Text>
            ürünlerin detaylarının gösterildiği sayfa <Typography.Paragraph code>/products/:id</Typography.Paragraph>
          </Typography.Text>
          <Typography.Text>
            ürünlerin silinmesi <Typography.Paragraph code>redux store içerisinde deleteProduct action'ı ile silinir</Typography.Paragraph>
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
