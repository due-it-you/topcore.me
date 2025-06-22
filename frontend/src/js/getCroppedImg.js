export const createImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.src = url;
  });
};

// 画像トリミングを行い新しい画像URLを作成
export default async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return '';
  }

  // canvasのサイズ指定
  canvas.width = image.width;
  canvas.height = image.height;

  // canvas上に画像を描画
  ctx.drawImage(image, 0, 0);

  // トリミングした後の画像を抽出
  const data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height);

  // canvasのサイズを切り取り後の画像サイズに更新
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // 抽出した画像データをcanvasの左隅に貼り付け
  ctx.putImageData(data, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('エラーが発生しました'));
      }

      const previewUrl = URL.createObjectURL(blob);
      resolve({ blob, previewUrl });
    }, 'image/jpeg');
  });
}
