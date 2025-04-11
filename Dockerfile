# 베이스 이미지
FROM node:20-alpine3.20 AS builder

# 작업 디렉토리
WORKDIR /app

# 패키지 복사 및 설치
COPY package*.json ./
RUN npm install

# 전체 소스 복사 후 빌드
COPY . .
RUN npm run build

# 실제 배포 컨테이너
FROM node:20-alpine3.20

WORKDIR /app

# 빌드된 정적 파일만 복사
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install

# 포트 열기
EXPOSE 4173

# 배포 서버 실행
CMD ["npx", "vite", "preview", "--port", "4173", "--host"]
