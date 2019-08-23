export const formatMoney = num => {
  return (num).toLocaleString('zh-Hant', { style: 'decimal', currency: 'NTD' });
}
