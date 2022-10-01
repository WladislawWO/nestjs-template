import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

const actions = {
  post: 'view',
  patch: 'update',
  get: 'get',
  delete: 'delete',
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const {
      user,
      route: {
        path,
        stack: [{ method }],
      },
    } = context.switchToHttp().getRequest();
    const modules = [];
    const allPermissions = [];
    const permissions = [];

    const action = actions[method];
    let name = path?.match(/\/api\/([\w\/:]+)/)?.[1]?.replace(/\//g, '.') || '';

    if (name.includes(':id')) {
      name = name.replace(':id', action == 'all' ? 'one' : action);
    } else {
      name += `.${action}`;
    }

    return allPermissions.includes(name) ? permissions.includes(name) : true;
  }
}
