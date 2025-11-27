import { Test, TestingModule } from '@nestjs/testing';
import { SaleDetailController } from './sale_detail.controller';
import { SaleDetailService } from './sale_detail.service';

describe('SaleDetailController', () => {
  let controller: SaleDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleDetailController],
      providers: [SaleDetailService],
    }).compile();

    controller = module.get<SaleDetailController>(SaleDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
