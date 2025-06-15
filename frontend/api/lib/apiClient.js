import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

// フロントエンドからRails APIを通信するための共通のAxiosクライアントを生成

const options = {
  ignoreHeaders: true,
};

const createClient = () => {
  const instance = axios.create({
    // APIのベースとなるURLを設定
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  });
  return applyCaseMiddleware(instance, options);
};

const client = createClient();

export default client;
