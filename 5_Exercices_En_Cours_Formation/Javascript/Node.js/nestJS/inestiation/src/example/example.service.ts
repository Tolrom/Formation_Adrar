import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
    getHello(): string {
        return 'Zébardiiii';
    }
}
