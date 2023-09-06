interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Manager'],
  customerRoles: ['Student'],
  tenantRoles: ['Manager', 'Content Creator'],
  tenantName: 'Education Provider',
  applicationName: 'GamifySaaS',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own profile',
    'View course gamified content',
    'Update progress in gamified content',
    'Delete own progress in gamified content',
  ],
  ownerAbilities: [
    'Manage Education Provider account',
    'Invite Content Creators',
    'Remove Content Creators',
    'Update Education Provider details',
  ],
};
