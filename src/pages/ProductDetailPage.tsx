import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User, X, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// 상품 옵션 타입
interface ProductOption {
  label: string;
  price: number;
}

// 매장 정보 타입
interface Store {
  name: string;
  stock: number;
  open: boolean;
  hours: string;
  image: string;
}

const productOptions: ProductOption[] = [
  { label: '코튼허그 쿠로미 에디션 50ml 36,500원 - 오늘드림', price: 36500 },
  { label: '코튼메모리 쿠로미 에디션 50ml 46,000원 - 오늘드림', price: 46000 },
  { label: '[리뉴얼]코튼허그 50ml 36,500원 - 오늘드림', price: 36500 },
  { label: '[리뉴얼]코튼메모리 50ml 46,000원 - 오늘드림', price: 46000 },
];

const storeInventory: Store[] = [
  {
    name: '강남역점',
    stock: 3,
    open: true,
    hours: '10:00 - 21:00',
    image: '/src/assets/img/store1.jpg',
  },
  {
    name: '홍대점',
    stock: 0,
    open: false,
    hours: '10:00 - 22:00',
    image: '/src/assets/img/store2.jpg',
  },
  {
    name: '잠실점',
    stock: 5,
    open: true,
    hours: '09:00 - 21:00',
    image: '/src/assets/img/store3.jpg',
  },
];

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [showComplete, setShowComplete] = useState<boolean>(false);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = productOptions.find((opt) => opt.label === e.target.value);
    setSelectedOption(e.target.value);
    setSelectedPrice(selected ? selected.price : 0);
  };

  const handlePurchase = () => {
    setShowModal(false);
    setShowComplete(true);
    setTimeout(() => setShowComplete(false), 2000);
    navigate('/order');
  };

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

      {/* Product Detail Section */}
      <main className="max-w-screen-xl mx-auto py-10 px-4 md:flex gap-10">
        {/* Left: Image */}
        <div className="flex-1 mb-6 md:mb-0">
          <img
            src="/src/assets/img/product.jpg"
            alt="포맨트 시그니처 퍼퓸"
            className="w-full max-h-[500px] object-contain rounded-lg"
          />
          <div className="grid grid-cols-4 gap-7 mt-4">
            {['product1.jpg', 'product2.jpg', 'product3.jpg', 'product4.jpg'].map((img: string, idx: number) => (
              <img
                key={idx}
                src={`/src/assets/img/${img}`}
                alt={`썸네일 ${idx + 1}`}
                className="w-24 h-24 object-cover rounded-md border hover:border-pink-500 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 leading-snug">
            [하루특가/1위향수]포맨트 시그니처 퍼퓸 쿠로미에디션/단품 50ml 2종 택1
          </h2>
          <p className="text-pink-600 text-xl font-semibold mb-2">
            {selectedPrice > 0 ? `${selectedPrice.toLocaleString()}원` : '36,500원 ~'}
          </p>

          {/* 배송정보 */}
          <div className="text-gray-700 text-sm mb-4 space-y-1">
            <h3 className="font-semibold">배송정보</h3>
            <p>일반배송: 2,500원 (20,000 원 이상 무료배송)</p>
            <p>오늘드림: 2,500원 또는 5,000원 <span className="text-blue-500 underline cursor-pointer">배송정보 안내</span></p>
            <p>픽업: 배송비 조건 없음 <span className="text-blue-500 underline cursor-pointer">픽업 안내</span></p>
          </div>

          {/* 결제혜택 */}
          <div className="text-gray-700 text-sm mb-4 space-y-1">
            <h3 className="font-semibold">결제혜택</h3>
            <p>THE CJ 카드 추가 10%할인 <span className="text-blue-500 underline cursor-pointer">카드혜택가 안내</span></p>
            <p>CJ ONE 포인트 최대 1% 적립 예상 <span className="text-blue-500 underline cursor-pointer">포인트 예상적립</span></p>
          </div>

          {/* 상품 선택 */}
          <div className="mb-4 text-sm">
            <p className="font-semibold mb-2 text-gray-800">상품을 선택해주세요</p>
            <select className="w-full border rounded-md p-2 mb-2" onChange={handleOptionChange} value={selectedOption}>
              <option>옵션 선택</option>
              {productOptions.map((opt, idx) => (
                <option key={idx} value={opt.label}>
                  {opt.label}
                </option>
              ))}
            </select>
            <p className="text-gray-600">
              상품금액 합계 <span className="font-bold text-red-500">{(selectedPrice * quantity).toLocaleString()}원</span>
            </p>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="form-checkbox" />
              매장픽업으로 받아 보시겠어요?
            </label>
          </div>

          {/* 수량 */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-semibold">수량</span>
            <button
              onClick={() => setQuantity((prev: number) => Math.max(1, prev - 1))}
              className="px-2 py-1 border rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev: number) => prev + 1)}
              className="px-2 py-1 border rounded"
            >
              +
            </button>
          </div>

          {/* 버튼들 */}
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <Button className="bg-pink-500 text-white w-full md:w-auto">장바구니</Button>
            <Button
              variant="outline"
              className="w-full md:w-auto"
              onClick={() => setShowModal(true)}
            >
              결제하기
            </Button>
            <Button variant="ghost" className="w-full md:w-auto border" onClick={() => setShowModal(true)}>
              재고조회
            </Button>
          </div>
        </div>
      </main>

      {/* Modal: 재고조회 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
            <button className="absolute top-3 right-3" onClick={() => setShowModal(false)}>
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-semibold mb-4">재고조회 매장</h3>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {storeInventory.map((store: Store, idx: number) => (
                <div key={idx} className="flex gap-4 border-b pb-4 items-start">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-lg font-bold">{store.name}</p>
                        <p className="text-sm text-gray-700">재고수량: {store.stock}개</p>
                        <p className={`text-sm ${store.open ? 'text-green-600' : 'text-red-500'}`}>
                          {store.open ? '영업중' : '영업종료'}
                        </p>
                        <p className="text-sm text-gray-600">{store.hours}</p>
                      </div>
                      {store.name === '강남역점' && (
                        <Button
                          size="sm"
                          className="bg-pink-500 text-white mt-8"
                          onClick={handlePurchase}
                        >
                          구매하기
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 mt-10 py-6 text-sm text-gray-600">
        <div className="max-w-screen-xl mx-auto text-center">
          ⓒ CJ OliveYoung. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
