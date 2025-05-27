# BMI Calculator MCP Server

[![smithery badge](https://smithery.ai/badge/@jongin1004/mbi-mcp-server)](https://smithery.ai/server/@jongin1004/bmi-mcp-server)

BMI(체질량지수)를 계산하는 MCP 서버입니다.

## 기능

- 체중(kg)과 키(cm)를 입력받아 BMI를 계산
- BMI 수치에 따른 체중 분류 제공 (저체중, 정상, 과체중, 비만, 고도비만)

## 설치 방법

### Installing via Smithery

To install bmi-mcp-server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@jongin1004/bmi-mcp-server):

```bash
npx -y @smithery/cli install @jongin1004/bmi-mcp-server --client claude
```

### Manual Installation
```bash
# 의존성 설치
npm install

# 빌드
npm run build

# 실행
npm start
```

## 사용 방법

MCP 클라이언트에서 다음과 같이 사용할 수 있습니다:

```typescript
// BMI 계산 도구 호출
const result = await client.tool("calculate-bmi", {
  weightKg: 70,
  heightCm: 170
});
```

## GitHub 배포

1. GitHub에 새 저장소 생성
2. 로컬 저장소 초기화 및 푸시:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Smithery 배포

1. https://smithery.ai/new 접속
2. GitHub 저장소 연결
3. 배포 설정 완료 후 "Deploy" 버튼 클릭

## 라이선스

MIT 