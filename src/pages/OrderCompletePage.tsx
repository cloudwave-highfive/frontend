import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderCompletePage() {
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

      <div className="py-10 px-4 md:px-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-center mb-2">
            주문이 <span className="text-green-500">완료</span>되었습니다.
          </h1>
          <p className="text-center text-sm text-gray-700 mb-8">
            <span className="inline-block bg-gray-200 text-black py-1 px-3 rounded-full font-semibold">
              주문번호: Y2506202135714
            </span>
          </p>

          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">결제정보</h2>
            <table className="w-full text-sm border-t border-gray-200">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-500">총상품금액</td>
                  <td className="py-2 text-right font-medium">36,900원</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-500">총할인금액</td>
                  <td className="py-2 text-right text-pink-500">0원</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-500">총배송비</td>
                  <td className="py-2 text-right">0원</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-500">CJ기프트카드 사용</td>
                  <td className="py-2 text-right text-pink-500">0원</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-500">CJ ONE 포인트 사용</td>
                  <td className="py-2 text-right text-pink-500">0원</td>
                </tr>
                <tr>
                  <td className="py-3 text-lg font-semibold">최종 결제금액</td>
                  <td className="py-3 text-right text-red-500 text-lg font-bold">
                    36,900원
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="text-right text-xs text-gray-400 pb-4">
                    포인트 및 기타결제
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}