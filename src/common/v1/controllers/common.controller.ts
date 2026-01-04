import { Controller } from '@nestjs/common';

@Controller({ path: 'common', version: '1' })
export class CommonController {
  constructor() {}
}
