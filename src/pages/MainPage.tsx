import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    brand: "포맨트",
    name: "[1위향수/한정판]포맨트 시그니처 퍼퓸 헬로키티 에디션/단품 50ml 2종 택1",
    price: "36,900원",
    originalPrice: "39,000원",
    image: "/img/product1.jpg",
  },
  {
    id: 2,
    brand: "바이오던스",
    name: "[여배우PICK] 바이오던스 바이오 콜라겐 리얼 딥 마스크 16매",
    price: "62,900원",
    originalPrice: "80,000원",
    image: "/img/product2.jpg",
  },
  {
    id: 3,
    brand: "에스쁘아",
    name: "[윈터PICK/단독기획] 에스쁘아 비벨벳 커버쿠션 SPF42 PA++ (본품+리필) 8 colors",
    price: "32,000원",
    originalPrice: "40,000원",
    image: "/img/product3.jpg",
  },
  {
    id: 4,
    brand: "어바웃톤",
    name: "[5월올영픽/미니백 증정] 어바웃톤 블러 파우더 팩트 6종 (기획/단품)",
    price: "11,260원",
    originalPrice: "14,000원",
    image: "/img/product4.jpg",
  },
];

export default function OliveYoungClone() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="w-full border-b shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-green-700">
          <Link to="/">OLIVE YOUNG</Link>
        </h1>
          <div className="flex items-center gap-2">
            <Input placeholder="브랜드, 상품 검색" className="w-64" />
            <Button variant="outline" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-green-100 to-blue-100 py-10 text-center">
        <h2 className="text-2xl font-bold text-pink-500">APP 전용 혜택!</h2>
        <p className="mt-2 text-gray-700">
          APP에서만 일주일 간 열리는 페스티벌
        </p>
        <Button className="mt-4 bg-pink-500 text-white">지금 다운로드</Button>
      </div>

      {/* Weekly Specials */}
      <section className="max-w-screen-xl mx-auto py-10">
        <h3 className="text-lg font-semibold mb-4">요즘 주목 받는 상품</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link to="/product" key={product.id}>
              <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
                <CardContent className="p-3 space-y-1">
                  <p className="text-xs text-gray-500">{product.brand}</p>
                  <p className="text-sm text-gray-800 leading-tight line-clamp-2">{product.name}</p>
                  <div className="text-sm mt-1">
                    <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                    <span className="text-pink-500 font-semibold">{product.price}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 mt-10 py-6 text-sm text-gray-600">
        <div className="max-w-screen-xl mx-auto text-center">
          ⓒ CJ OliveYoung. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
