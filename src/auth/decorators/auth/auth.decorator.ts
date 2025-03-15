import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from 'src/auth/guards/user-role/user-role.guard';
import { ValidRoles } from 'src/auth/interface/valid-roles';
import { RoleProtected } from '../role-protected/role-protected.decorator';

export function Auth(...rol: ValidRoles[]){
    return applyDecorators(
        RoleProtected(...rol),
        UseGuards(AuthGuard(),UserRoleGuard),

    );
}
