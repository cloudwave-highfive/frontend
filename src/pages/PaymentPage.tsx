import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-sm">
      {/* 상단 헤더 */}
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

      {/* 본문 */}
      <main className="max-w-6xl mx-auto mt-10 grid grid-cols-3 gap-8">
        {/* 왼쪽 2/3 영역 */}
        <section className="col-span-2 space-y-6">
          {/* 상품 정보 */}
          <div className="flex gap-4 items-center border p-4">
            <img
              src="/img/product1.jpg"
              alt="상품 이미지"
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <p className="font-semibold">[1위향수/한정판]포맨트 시그니처 퍼퓸 헬로키티 에디션</p>
              <p className="text-gray-500">단품 50ml 2종 택1</p>
              <p className="mt-2 text-red-600 font-bold">36,900원</p>
            </div>
          </div>

          {/* 쿠폰 영역 */}
          <div className="border p-4">
            <h3 className="font-semibold mb-2">쿠폰 할인</h3>
            <select className="w-full border p-2 rounded">
              <option>적용할 수 있는 쿠폰이 없습니다</option>
            </select>
          </div>

          {/* 포인트 영역 */}
          <div className="border p-4">
            <h3 className="font-semibold mb-2">포인트 사용</h3>
            <input
              type="text"
              placeholder="포인트 입력"
              className="w-full border p-2 rounded"
            />
            <p className="text-xs text-gray-500 mt-1">
              최소 1,000점 이상 보유 시 사용 가능
            </p>
          </div>

          {/* 결제 수단 */}
          <div className="border p-4">
            <h3 className="font-semibold mb-2">결제 수단 선택</h3>
            <div className="space-y-2">
              <label className="block">
                <input type="radio" name="payment" className="mr-2" /> 신용카드
              </label>
              <label className="block">
                <input type="radio" name="payment" className="mr-2" /> 카카오페이
              </label>
              <label className="block">
                <input type="radio" name="payment" className="mr-2" /> 네이버페이
              </label>
              <label className="block">
                <input type="radio" name="payment" className="mr-2" /> 휴대폰결제
              </label>
            </div>
          </div>

          {/* 약관 동의 */}
          <div className="border p-4">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>
                주문 상품정보 및 결제대행 서비스 이용 약관에 모두 동의합니다.
              </span>
            </label>
          </div>
        </section>

        {/* 오른쪽 결제 정보 */}
        <section className="border p-6 bg-gray-50 h-fit">
          <h2 className="text-lg font-semibold mb-4">최종 결제정보</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>총 상품금액</span>
              <span>36,500원</span>
            </div>
            <div className="flex justify-between">
              <span>쿠폰 할인금액</span>
              <span>0원</span>
            </div>
            <div className="flex justify-between">
              <span>총 배송비</span>
              <span>0원</span>
            </div>
            <div className="flex justify-between">
              <span>CJ ONE 포인트</span>
              <span>0원</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-base">
              <span>최종 결제금액</span>
              <span className="text-red-600">36,500원</span>
            </div>
          </div>
          <Button
            className="mt-6 w-full py-3 bg-red-500 text-white font-semibold rounded"
            onClick={() => navigate('/order/complete')}
          >
          결제하기
          </Button>
        </section>
      </main>
    </div>
  );
}
