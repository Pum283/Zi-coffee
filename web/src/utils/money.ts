/**
 * Format giá tiền VND theo chuẩn hiển thị Việt Nam.
 */
export function formatVnd(value: number) {
  return new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 0 }).format(value)
}

