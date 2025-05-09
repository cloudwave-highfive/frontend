import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from "react-router-dom";

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
          {[...Array(4)].map((_, i) => (
            <Link to="/product" key={i}>
              <Card className="hover:shadow-md cursor-pointer">
                <CardContent className="p-4">
                  <div className="h-32 bg-gray-200 rounded mb-2" />
                  <p className="text-sm font-medium">상품 이름 {i + 1}</p>
                  <p className="text-xs text-gray-500">설명 텍스트</p>
                  <p className="text-pink-500 font-bold mt-1">25,900원</p>
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
