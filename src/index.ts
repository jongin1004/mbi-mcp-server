import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// MCP 서버 생성
const server = new McpServer({
  name: "BMI Calculator",
  version: "1.0.0"
});

// BMI 계산 도구 추가
server.tool(
  "calculate-bmi",
  {
    weightKg: z.number().min(0).max(500),
    heightCm: z.number().min(0).max(300)
  },
  async ({ weightKg, heightCm }) => {
    // cm를 m로 변환
    const heightM = heightCm / 100;
    // BMI 계산
    const bmi = weightKg / (heightM * heightM);
    
    // BMI 범주 결정
    let category = "";
    if (bmi < 18.5) category = "저체중";
    else if (bmi < 23) category = "정상";
    else if (bmi < 25) category = "과체중";
    else if (bmi < 30) category = "비만";
    else category = "고도비만";

    return {
      content: [{
        type: "text",
        text: `BMI: ${bmi.toFixed(1)}\n체중: ${weightKg}kg\n키: ${heightCm}cm\n분류: ${category}`
      }]
    };
  }
);

// 서버 시작
const transport = new StdioServerTransport();
await server.connect(transport); 