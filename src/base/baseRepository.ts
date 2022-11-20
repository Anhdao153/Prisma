import { PrismaService } from './../service/prisma.service';
export abstract class BaseRepository<E> extends PrismaService {}
