import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptioins = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value))
      throw new BadRequestException(`"${value}" isn't in the status options`);

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.StatusOptioins.indexOf(status);
    return idx !== -1;
  }
}
