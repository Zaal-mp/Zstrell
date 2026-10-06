// lib/whatsapp.ts
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971542038985";

export function getWhatsAppLink(productName: string, price: string) {
  const message = `Hi ZSTRELL, I'd like to order the ${productName} (${price}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}