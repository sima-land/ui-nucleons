import { useEffect, useState } from 'react';
import { isString } from 'lodash';

/**
 * Формирует монограмму из переданной строки.
 * @param {string} string Переданная строка.
 * @return {string} Монограмма.
 */
const getMonogram = string => isString(string)
  ? (string.match(/(^|\s)[\wА-Яа-я]/g) || []).slice(0, 2).join('').replace(/\s+/g, '').toUpperCase()
  : '';

/**
 * Хук загрузки изображения.
 * @param {string} imageURL URL изображения.
 * @return {boolean} Загружено ли изображение.
 */
const useImageLoad = imageURL => {
  const [isLoaded, setIsLoaded] = useState(useImageLoad.loadedURLs.has(imageURL));

  useEffect(() => {
    if (!isLoaded && imageURL) {
      const image = new Image();

      image.onload = () => {
        useImageLoad.loadedURLs.add(imageURL);
        setIsLoaded(true);
      };

      image.src = imageURL;

      return () => image.onload = null;
    }
  }, [imageURL]);

  return isLoaded;
};

useImageLoad.loadedURLs = new Set();

export { getMonogram, useImageLoad };
