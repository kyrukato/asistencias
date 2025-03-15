import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from 'src/auth/interface/valid-roles';

export const META_ROLES = 'rol';

export const RoleProtected = (...args: ValidRoles[]) => {
    return SetMetadata(META_ROLES, args);
}

