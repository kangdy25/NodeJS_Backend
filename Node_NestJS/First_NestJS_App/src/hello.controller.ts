import { Controller, Get } from "@nestjs/common";

// 컨트롤러 데코레이터
@Controller()
export class HelloController {
  // Get 요청 처리 데코레이터
  @Get()
  hello() {
    return "안녕 세계! NestJS로 만든 첫 번째 애플리케이션입니다.";
  }
}
