import { Button, Result } from "antd";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  // Route hatası olup olmadığını kontrol ediyoruz
  if (isRouteErrorResponse(error)) {
    // 404 hatası için
    if (error.status === 404) {
      return (
        <Result
          status="404"
          title="404"
          subTitle="Üzgünüz, aradığınız sayfa bulunamadı."
          extra={
            <Link to="/">
              <Button type="primary">Ana Sayfaya Dön</Button>
            </Link>
          }
        />
      );
    }

    // Diğer HTTP hataları için
    return (
      <Result
        status="error"
        title={error.status}
        subTitle={error.statusText}
        extra={
          <Link to="/">
            <Button type="primary">Ana Sayfaya Dön</Button>
          </Link>
        }
      />
    );
  }

  // Beklenmeyen hatalar için
  return (
    <Result
      status="error"
      title="Hata"
      subTitle="Üzgünüz, beklenmeyen bir hata oluştu."
      extra={
        <Link to="/">
          <Button type="primary">Ana Sayfaya Dön</Button>
        </Link>
      }
    />
  );
}
